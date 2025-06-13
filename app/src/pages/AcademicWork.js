import "./AcademicWork.css"
import wow from "../assets/photos/wow.jpg"

const sections = [
  { 
    id: 1,
    title: "WOW Children's Museum Campaign",
    subtitle: "How do we portray the value of WOW! Children’s Museum for children, while making a case for donors’ investment in the museum and its’ mission?",
    imageUrl: wow,
    link: "/wowcampaign"
  },
  {
    id: 2,
    title: "Entrepreneurial Capstone",
    imageUrl: "../assets/entrepreneurial.jpg", 
    link: "/entrepreneurialcapstone"
  },
  { 
    id: 3,
    title: "Sports Media",
    imageUrl: "../assets/sports-media",
    link: "/sportsmedia"
  },
  {
    id: 4,
    title: "Glossier Campaign",
    imageUrl: "../assets/glossier.jpg",
    link: "/glossiercampaign"
  }
];

const AcademicWork = () => {
  return (
  <div className="academic-work-container">
    <h2 className="header">Academic Work</h2>
    <div className="card-grid">
      {sections.map((section) => (
        <a href={section.link} key={section.id} className="card">
          <div className="circle-image">
            <img src={section.imageUrl} alt={section.title} />
          </div>
          <div className="card-content">
            <h2 className="card-title">{section.title}</h2>
            <p className="card-subtitle">{section.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
  );
}


export default AcademicWork;