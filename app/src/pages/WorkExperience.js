import React from "react";
import "./workexperience.css";
import { Link } from "react-router-dom";
import legislativeaid from '../assets/photos/legislative_aid.jpeg';
import fieldofvision from  '../assets/photos/field_of_vision.jpeg';

const experience = [
  {
    id: 1,
    title: "Legislative Intern",
    company: "Colorado State Representative Rick Taggart",
    description: "Description of the legislative intern job",
    image: legislativeaid,
    url: "/workexperience/legislativeaid",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Field of Vision",
    description: "Description of the marketing intern job",
    image: fieldofvision,
    url: "/workexperience/marketinginternship",
  },
  {
    id: 3,
    title: "Craft Services",
    company: "Wild Manor",
    description: "Description of the craft services job",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    url: "/workexperience/craftservices",
  }
]

function WorkExperience() {
  return (
    <section className="workexperience-section">
      <div className="workexperience-header">
        <h2>Work Experience</h2>
        <p>
          Here is a summary of my recent work experience. 
        </p>
      </div>
      <div className="workexperience-grid">
        {experience.map((job) => (
          <Link to={job.url} key={job.id} className="work-card-link">
            <div className="work-card" key={job.id}>
              <div className="work-card-img-container">
                <img src={job.image} alt={job.title} className="work-card-img" />
              </div>
              <div className="work-card-content">
                <h3>{job.title}</h3>
                <p className="work-card-company">{job.company}</p>
                <p className="work-card-desc">{job.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;