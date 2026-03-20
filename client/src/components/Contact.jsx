import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { submitContact } from "../utils/api";
import useReveal from "../utils/useReveal";
import "./Contact.css";

const Contact = ({ profile }) => {
  const titleRef = useReveal();
  const formRef = useReveal();

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-label contact__label">07 — Contact</div>
      <h2 className="contact__title reveal" ref={titleRef}>
        Let's build
        <br />
        something <em>great</em>.
      </h2>
      <p className="contact__sub">
        I'm currently open to full-time software engineering opportunities. Feel
        free to reach out.
      </p>

      <div className="contact__links">
        {profile?.email && (
          <a href={`mailto:${profile.email}`} className="contact__pill">
            <Mail size={14} /> {profile.email}
          </a>
        )}
        {profile?.phone && (
          <a href={`tel:${profile.phone}`} className="contact__pill">
            <Phone size={14} /> {profile.phone}
          </a>
        )}
        {profile?.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__pill">
            <Linkedin size={14} /> LinkedIn
          </a>
        )}
        {profile?.github && (
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__pill">
            <Github size={14} /> GitHub
          </a>
        )}
      </div>

      <div className="contact__form-wrapper reveal" ref={formRef}>
        {status === "success" ? (
          <div className="contact__success">
            <CheckCircle size={40} />
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
            <button className="btn btn-outline" onClick={() => setStatus("idle")}>
              Send Another
            </button>
          </div>
        ) : (
          <div className="contact__form-container" onSubmit={handleSubmit}>
            <div className="contact__form-header">
              <Send size={18} />
              <span>Send me a message</span>
            </div>
            <form className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {status === "error" && (
                <div className="contact__error">{errorMsg}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message ↗"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
