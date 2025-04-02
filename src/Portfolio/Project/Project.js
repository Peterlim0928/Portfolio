import React, { useState, useEffect } from "react";
import "./Project.css";

function Project({ title, desc, index, link }) {
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMdOrLarger(window.matchMedia("(min-width: 768px)").matches);
  };

  // Add event listener on component mount, remove on unmount
  useEffect(() => {
    checkScreenSize(); // Initial check on component mount
    window.addEventListener("resize", checkScreenSize); // Update when window resizes

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup on component unmount
    };
  }, []);

  const isLight = Math.ceil(index * (isMdOrLarger ? 0.5 : 1)) % 2 === 0;

  return (
    <div className={`col-12 col-md-6 p-5 project-container ${isLight ? "background-light" : "background-dark"}`}>
      <p className="project-title">{title}</p>
      <p className="project-desc mb-5">{desc}</p>
      <button onClick={() => window.open(link)}>GO TO</button>
    </div>
  );
}

export default Project;
