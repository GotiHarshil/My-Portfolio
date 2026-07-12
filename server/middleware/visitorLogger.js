const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.ip;
};

const logVisitor = (req, res, next) => {
  console.log(
    `[visit] ${new Date().toISOString()} ip=${getClientIp(req)} path=${req.path} referrer=${
      req.headers.referer || "-"
    } ua="${req.headers["user-agent"] || "-"}"`
  );
  next();
};

module.exports = logVisitor;
