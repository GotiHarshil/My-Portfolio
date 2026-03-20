import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api",
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

export default API;
