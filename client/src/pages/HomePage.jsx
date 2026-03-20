import React, { useState, useEffect } from "react";
import {
  fetchProfile,
  fetchExperiences,
  fetchProjects,
  fetchSkills,
  fetchEducation,
  fetchCertifications,
} from "../utils/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  const [data, setData] = useState({
    profile: null,
    experiences: [],
    projects: [],
    skills: [],
    education: [],
    certifications: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [prof, exp, proj, sk, edu, cert] = await Promise.all([
          fetchProfile(),
          fetchExperiences(),
          fetchProjects(),
          fetchSkills(),
          fetchEducation(),
          fetchCertifications(),
        ]);

        setData({
          profile: prof.data,
          experiences: exp.data,
          projects: proj.data,
          skills: sk.data,
          education: edu.data,
          certifications: cert.data,
        });
      } catch (err) {
        console.error("Error loading portfolio data:", err);
        setError("Failed to load portfolio data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadAll();
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader" />
        <div className="loader-text">Loading portfolio…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-wrapper">
        <div className="loader-text" style={{ color: "#f0916b" }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero profile={data.profile} />
      <About profile={data.profile} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <Certifications certifications={data.certifications} />
      <Contact profile={data.profile} />
      <Footer />
    </>
  );
};

export default HomePage;
