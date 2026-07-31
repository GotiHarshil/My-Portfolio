const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const connectDB = require("./config/db");
const logVisitor = require("./middleware/visitorLogger");
const { getClientIp, getVisitedPath, getReferrer } = logVisitor;
const notifyIfNewVisitor = require("./services/visitNotifier");

// Route imports
const profileRoutes = require("./routes/profileRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const educationRoutes = require("./routes/educationRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);

// ─── Middleware ───
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());

// ─── API Routes ───
app.use("/api/profile", profileRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/contact", contactRoutes);

// ─── Health check ───
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Visit logging ───
app.get("/api/visit", logVisitor, async (req, res) => {
  try {
    await notifyIfNewVisitor({
      ip: getClientIp(req),
      path: getVisitedPath(req),
      referrer: getReferrer(req),
      userAgent: req.headers["user-agent"] || "-",
    });
  } catch (err) {
    console.error("Visit notification failed:", err.message);
  }
  res.status(204).end();
});

// ─── Serve React in production ───
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// ─── Global error handler ───
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// ─── Start server ───
const startServer = async () => {
  await connectDB();
  if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } else {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  }
};

startServer();

module.exports = app;
