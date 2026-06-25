import React from "react";
import './App.css';
import Card from "./Card";
import pro from "./pro.jpg";

function Projects() {
  return (
    <div id="projects">
      <h1>PROJECTS</h1>
      <div id="text">
      <Card
        image={pro}
        heading="Smart Job Market Analyzer"
        desc="Analyzes job market trends, required skills, and opportunities.
Helps users understand demand for different technologies and career paths."
      />

      <Card
        image={pro}
        heading="Inventory Management System"
        desc="Manages product inventory, stock levels, and records.
Designed to simplify tracking and management of items."
      />

      <Card
        image={pro}
        heading="Campus Lost and Found Platform"
        desc="A platform where students can report lost items and help return found belongings.
You mentioned using AI tools during the hackathon to develop it."
      />
        </div>
    </div>
  );
}

export default Projects;
