import axios from "axios";

// Vite exposes env vars on import.meta.env (VITE_ prefix only) — `process`
// does not exist in the browser bundle.
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 10000,
});

// ── Profile ──
export const fetchProfile = () => API.get("/profile");

// ── Experiences ──
export const fetchExperiences = () => API.get("/experiences");

// ── Projects ──
export const fetchProjects = () => API.get("/projects");

// ── Skills ──
export const fetchSkills = () => API.get("/skills");

// ── Education ──
export const fetchEducation = () => API.get("/education");

// ── Certifications ──
export const fetchCertifications = () => API.get("/certifications");

// ── Contact ──
export const submitContact = (data) => API.post("/contact", data);

// ── Visit ──
export const logVisit = () =>
  API.get("/visit", {
    params: {
      path: window.location.pathname + window.location.hash,
      referrer: document.referrer || "",
    },
  });

export default API;
