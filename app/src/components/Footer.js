import './Footer.css'; 
import {
    FiLinkedin,
} from "react-icons/fi";
import {
    FaEnvelope
} from "react-icons/fa";

const socialLinks = [
    {
        id: 1,
        icon: <FiLinkedin />,
        //TODO:  put audrey's linkedin url here
        url: "https://www.linkedin.com/",
    },
    {
        id: 2, 
        icon: <FaEnvelope />,
        //TODO:  put audrey's email url here
        url: "mailto:"
    },
];

function Footer() {
  return (
     <div className="footer-container">
      <div className="footer-row-inline">
        <p className="footer-text">Let's keep in touch!</p>
        <ul className="footer-icons-inline">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              className="footer-icon-link"
            >
              <i className="footer-icon">{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
