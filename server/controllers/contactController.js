const Contact = require("../models/Contact");
const { sendContactNotification } = require("../config/mailer");

// @desc    Submit a contact message
// @route   POST /api/contact
const submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }

    const contact = await Contact.create({ name, email, subject, message });

    try {
      await sendContactNotification({ name, email, subject, message });
    } catch (emailError) {
      console.error("Failed to send contact notification email:", emailError.message);
    }

    res.status(201).json({ message: "Message sent successfully!", contact });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all messages (admin)
// @route   GET /api/contact
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { submitMessage, getMessages };
