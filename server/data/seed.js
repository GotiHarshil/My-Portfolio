/**
 * Seed Script — Populates MongoDB with Harshil Goti's portfolio data.
 *
 * Usage:  cd server && node data/seed.js
 */

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Profile = require("../models/Profile");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Education = require("../models/Education");
const Certification = require("../models/Certification");

const seedData = async () => {
  await connectDB();

  // Clear existing data
  await Promise.all([
    Profile.deleteMany(),
    Experience.deleteMany(),
    Project.deleteMany(),
    Skill.deleteMany(),
    Education.deleteMany(),
    Certification.deleteMany(),
  ]);

  console.log("🗑  Cleared existing data");

  // ── Profile ──
  await Profile.create({
    name: "Harshil Goti",
    title: "Software Engineer",
    tagline:
      "Full-stack engineer specializing in MERN stack development — building performant, user-focused web applications from New York City.",
    bio: [
      "I'm a software engineer currently pursuing my Master of Science in Computer Science at Pace University, New York. With professional experience as a Junior Software Engineer at SquareBit in India, I've built and shipped responsive, data-driven web applications used by real clients.",
      "My core strength lies in the MERN stack — React.js, Node.js, Express, and MongoDB — where I design clean architectures, build robust APIs, and create interfaces that people enjoy using. I care deeply about writing maintainable code and delivering solutions that scale.",
    ],
    location: "Jersey City, NJ",
    email: "harshilgoti01@gmail.com",
    phone: "+1 (551) 376-8675",
    linkedin: "https://www.linkedin.com/in/harshil-goti/",
    github: "https://github.com/harshilgoti",
    stats: [
      { value: "1+", label: "Years Experience" },
      { value: "5+", label: "Projects Delivered" },
      { value: "7+", label: "Technologies" },
    ],
    details: [
      { label: "Location", value: "Jersey City, NJ" },
      { label: "Education", value: "MS in Computer Science" },
      { label: "Focus", value: "Full-Stack Development" },
      { label: "Stack", value: "MERN (React / Node)" },
    ],
  });

  // ── Experience ──
  await Experience.insertMany([
    {
      role: "Software Engineer",
      company: "SquareBit",
      location: "Remote",
      startDate: "May 2023",
      endDate: "Jul 2024",
      points: [
        "Engineered backend services for 3+ client-facing MERN applications by collaborating directly with cross-functional teammates, translating client requirements into production code that shipped on schedule every time.",
        "Designed and built 20+ RESTful API endpoints using Node.js, Express, and MongoDB, validating each via Postman before integration — replacing static content with real-time data flows.",
        "Resolved 15+ production defects by partnering with design and QA teams, tightening issue-resolution turnaround while maintaining 99%+ uptime across all live client applications.",
        "Collaborated with teammates using Git/GitHub branching and PR workflows to ship backend features without regressions, supporting parallel delivery across multiple client projects.",
        "Communicated directly with clients to scope backend requirements and incorporate feedback, strengthening retention and enabling SquareBit to take on higher-complexity engagements.",
      ],
      order: 0,
    },
    {
      role: "Software Engineering Intern",
      company: "SquareBit",
      location: "Remote",
      startDate: "Jan 2023",
      endDate: "Apr 2023",
      points: [
        "Learned and applied the MERN stack (React, Node.js, Express, MongoDB) by pairing with senior engineers on live client projects, ramping from foundational web development to shipping production code within weeks.",
        "Modernized 4 legacy web interfaces, eliminating cross-browser UI inconsistencies flagged in client feedback and standardizing the team's component patterns.",
        "Contributed 30+ commits in the first 60 days using Git/GitHub branching and PR workflows, integrating into the team's CI/CD process from week one.",
        "Assisted in building and testing backend API endpoints with Node.js and Express, validating responses in Postman alongside senior engineers to build toward full-stack ownership.",
        "Earned promotion to full-time Software Engineer within 4 months — recognized for taking independent ownership of front-end tasks ahead of schedule and quickly absorbing backend fundamentals.",
      ],
      order: 1,
    },
  ]);

  // ── Projects ──
  await Project.insertMany([
    {
      title: "MANU — Food Vendor E-Commerce",
      subtitle: "Full-Stack MERN Web Application",
      stack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Redux"],
      description: [
        "Built a full-stack e-commerce platform enabling vendors to manage products and customers to browse, add to cart, and complete purchases.",
        "Implemented secure authentication and role-based access control using Firebase for protected vendor and customer workflows.",
        "Developed RESTful APIs consumed by a React frontend with Redux-based state management.",
      ],
      liveUrl: "https://food-vendor-ecommerce-l4rtlc4pq.vercel.app/",
      featured: true,
      order: 0,
    },
    {
      title: "Accommodation Booking Platform",
      subtitle: "Full-Stack MERN Web App",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      description: [
        "Designed and developed a booking platform supporting user authentication, property search, and real-time reservation workflows.",
        "Built 15+ RESTful APIs using Node.js and Express integrated with MongoDB to handle booking and property data operations.",
        "Improved backend performance by ~40% through query optimization and refactoring inefficient request handling.",
      ],
      featured: true,
      order: 1,
    },
  ]);

  // ── Skills ──
  await Skill.insertMany([
    {
      category: "Languages",
      icon: "code",
      items: ["JavaScript", "Python", "Java", "SQL", "PHP", "C#", "Kotlin"],
      order: 0,
    },
    {
      category: "Frameworks & Libraries",
      icon: "layers",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Ionic",
        "Bootstrap",
        "Tailwind CSS",
      ],
      order: 1,
    },
    {
      category: "Tools & Platforms",
      icon: "settings",
      items: ["Git", "GitHub", "Postman", "Chrome DevTools", "Firebase", "Redux"],
      order: 2,
    },
    {
      category: "Concepts",
      icon: "zap",
      items: [
        "RESTful APIs",
        "API Integration",
        "OOP",
        "Secure Coding",
        "Responsive Design",
      ],
      order: 3,
    },
  ]);

  // ── Education ──
  await Education.insertMany([
    {
      degree: "Master of Science",
      field: "Computer Science",
      school: "Pace University",
      location: "New York, NY",
      graduationDate: "Expected May 2026",
      order: 0,
    },
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      school: "CHARUSAT University",
      location: "Changa, India",
      graduationDate: "May 2023",
      order: 1,
    },
  ]);

  // ── Certifications ──
  await Certification.insertMany([
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Apna College",
      icon: "award",
      order: 0,
    },
    {
      title: "Full Stack Web Development (MERN)",
      issuer: "Apna College",
      icon: "globe",
      order: 1,
    },
  ]);

  console.log("✅ Database seeded successfully!");
  process.exit(0);
};

seedData().catch((err) => {
  console.error("❌ Seed error:", err);
  process.exit(1);
});
