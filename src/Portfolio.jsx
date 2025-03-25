import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioData = {
  name: "Jyotishman Das",
  title: "AI/ML Engineer | M.Tech AI @ IIT Jodhpur",
  contact: {
    email: "m24csa013@iitj.ac.in",
    linkedin: "https://www.linkedin.com/in/jyotishmandas85p/",
    github: "https://github.com/rishi02102017",
    medium: "https://medium.com/@jyotishmandas85p",
  },
  profileImage: "/profile.JPG",
  summary:
    "I'm an AI/ML engineer who loves turning ideas into real-world applications. From compiler design to AI-powered healthcare tools, I’ve worked on diverse, production-level projects that blend innovation with impact. I thrive on solving problems, learning fast, and bringing tech to life in creative, practical ways.",
  sections: [
    {
      title: "Work Experience",
      items: [
        {
          role: "MLOps Intern",
          company: "People Tech Group",
          duration: "Jan 2024 – Jul 2024",
          details: [
            "Worked on Ivory AI (dental diagnostics platform) using object detection for X-ray scans.",
            "Built MLflow-based training/inference APIs and started integrating LLMs for patient report analysis.",
          ],
        },
        {
          role: "Project Intern(AI)",
          company: "Infosys Springboard",
          duration: "Nov 2024 – Jan 2025",
          link: "https://github.com/rishi02102017/Infosys_Springboard_Project",
          details: [
            "Developed a RAG-based healthcare chatbot using LangChain, FAISS, and Llama3-70b via a Gradio UI.",
            "Built a Pandas AI Agent for automated trend analysis and healthcare data visualization, leveraging LangChain’s experimental toolkits.",
          ],
        },
      ],
    },
    {
      title: "Featured Projects",
      items: [
        {
          name: "AI LeadGen Scraper",
          stack: "Python, Streamlit, BeautifulSoup",
          link: "https://caprae-leadgen-tool-ywtu9ekczpkeakcazg8d8u.streamlit.app",
          description:
            "Built in <5 hours, this tool scrapes lead data, scores based on engagement, and exports CRM-ready CSVs.",
        },
        {
          name: "Weather Forecast App with CRUD",
          stack: "Streamlit, MongoDB, OpenWeatherMap API",
          link: "https://weather-app-dymlftfhdgvsersyquu6pe.streamlit.app/",
          description:
            "Full-stack weather app with search, forecast, MongoDB CRUD, Google Maps, and export options.",
        },
        {
          name: "MiniPy Compiler",
          stack: "PLY, Python, Streamlit",
          link: "https://github.com/rishi02102017/minipy-compiler-basic",
          description:
            "End-to-end compiler for a Python-like language with custom bytecode and VM execution.",
        },
        {
          name: "Weather Trend Forecasting",
          stack: "ARIMA, Holt-Winters, Isolation Forest, GeoPandas",
          link: "https://github.com/rishi02102017/weather-trend-forecasting",
          description:
            "Time-series ML models + anomaly detection for global weather trends visualization.",
        },
        {
          name: "Data Visualization Dashboard",
          stack: "React.js, Flask, MongoDB Atlas",
          link: "https://d5rv9f.csb.app/",
          description:
            "Full-stack BI dashboard with filters, charting (Chart.js), and live API backend.",
        },
        {
          name: "BuildVision (Computer Vision Hackathon)",
          stack: "YOLOv5, OpenCV, Flask",
          description:
            "Smart campus navigation system that identifies buildings using real-time camera input.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "M.Tech in Artificial Intelligence",
          institution: "Indian Institute of Technology Jodhpur",
          duration: "2024 – Present",
        },
        {
          name: "B.Tech in Computer Science and Engineering",
          institution: "Central Institute of Technology Kokrajhar",
          duration: "2019 – 2023",
          cgpa: "8.73 CGPA",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        "AWS Solutions Architect Associate (Score: 853/1000)",
        "Agile Scrum in Practice – Infosys Springboard",
        "Artificial Intelligence Primer – Infosys Springboard",
      ],
    },
  ],
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? "#111827" : "#f8f9fa";
    document.body.style.color = darkMode ? "#e5e7eb" : "#1a1a1a";
  }, [darkMode]);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "0.4rem 1rem",
            borderRadius: "0.4rem",
            backgroundColor: darkMode ? "#facc15" : "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <motion.div
        style={{ textAlign: "center", marginBottom: "3rem" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            color: darkMode ? "#f9fafb" : "#1f2937",
          }}
        >
          {portfolioData.name}
        </motion.h1>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            color: darkMode ? "#cbd5e1" : "#4b5563",
          }}
        >
          {portfolioData.title}
        </p>
        <img
          src={portfolioData.profileImage}
          alt="Profile"
          style={{
            width: "210px",
            height: "210px",
            objectFit: "cover",
            borderRadius: "50%",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "0.5rem",
          }}
        />
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          {portfolioData.summary}
        </p>
        <div
          style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}
        >
          <p><strong>📧 Email:</strong> {portfolioData.contact.email}</p>
  <p><strong>💼 LinkedIn:</strong>{" "}
  <a href={portfolioData.contact.linkedin} target="_blank" style={{ color: "#3b82f6" }}>
    View
  </a>
</p>
<p>
  <strong>🐙 GitHub:</strong>{" "}
  <a href={portfolioData.contact.github} target="_blank" style={{ color: "#3b82f6" }}>
    View
  </a>
</p>
<p>
  <strong>✍️ Medium:</strong>{" "}
  <a href={portfolioData.contact.medium} target="_blank" style={{ color: "#3b82f6" }}>
    View
  </a>
</p>

        </div>
        <a
          href="/Jyotishman_Updated_Resume.pdf"
          download
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Download Resume
        </a>
      </motion.div>

      {portfolioData.sections.map((section, idx) => (
        <motion.div
          key={idx}
          style={{ marginTop: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: darkMode ? "#f3f4f6" : "#1f2937",
            }}
          >
            {section.title}
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {section.items.map((item, i) =>
              typeof item === "string" ? (
                <div
                  key={i}
                  style={{
                    padding: "1rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    background: darkMode ? "#1f2937" : "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  {item}
                </div>
              ) : (
                <div
                  key={i}
                  style={{
                    padding: "1rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    background: darkMode ? "#1f2937" : "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  {item.role && (
                    <p>
                      <strong>{item.role}</strong> @ {item.company}
                    </p>
                  )}
                  {item.name && (
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                  )}
                  {item.institution && <p>{item.institution}</p>}
                  {item.duration && (
                    <p style={{ color: "#6b7280" }}>{item.duration}</p>
                  )}
                  {item.cgpa && <p>CGPA: {item.cgpa}</p>}
                  {item.stack && (
                    <p>
                      <strong>Tech Stack:</strong> {item.stack}
                    </p>
                  )}
                  {item.description && <p>{item.description}</p>}
                  {item.details && (
                    <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                      {item.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <p style={{ marginTop: "0.5rem" }}>
                      <a
                        href={item.link}
                        target="_blank"
                        style={{ color: "#3b82f6", fontWeight: "500" }}
                      >
                        {section.title === "Featured Projects"
                          ? "View Project"
                          : "View GitHub Repo"}
                      </a>
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
