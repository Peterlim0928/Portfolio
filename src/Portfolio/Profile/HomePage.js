import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import LinkButton from "../Utils/LinkButton";
import ProjectHighlight from "./ProjectHighlight";
import profile from "../img/my-picture.jpg";
import default_img from "../img/default-img.jpg";
import tetris_preview from "../img/tetris-preview.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const navigate = useNavigate();

  const projectOnClick = () => {
    navigate("/project");
  };

  return (
    <div className="container-fluid p-0" id="main">
      <div className="row px-5 d-flex">
        <div className="col-md-6 col-12 py-2">
          <div className="p-3 d-flex flex-column justify-content-center intro">
            <h1>Peter Lim Jian Tao</h1>
            <p>
              Hello! I am a 3rd year Computer Science student at Monash
              University Malaysia with a strong passion for web development,
              algorithms, and data structures. As a dedicated Full Stack
              Developer, I have experience in creating robust web applications
              using HTML, CSS, JavaScript and React.
            </p>
            <p>
              My recent internship allowed me to work on diverse projects,
              enhancing my proficiency in designing and implementing efficient
              and scalable solutions. I am eager to contribute my technical
              expertise to innovative teams and exciting projects.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 py-2">
          <div className="p-3 d-flex justify-content-center intro">
            <img src={profile} className="profile-picture" alt="Profile" />
          </div>
        </div>
      </div>

      <div className="row mt-5 project-highlight-container">
        <div className="col-12 p-0 d-flex justify-content-between align-items-center">
          <h2>Highlighted Projects</h2>
          <button className="project-button" type="button" onClick={projectOnClick}>
            ALL PROJECTS
          </button>
        </div>
      </div>
      <ProjectHighlight
        id="01"
        title="Tetris clone"
        desc="A simplified version of the classic Tetris game, featuring minimal UI and basic controls. Developed with JavaScript and RxJS, this project demonstrates effective management of game states and logic, providing a functional gameplay experience."
        img={tetris_preview}
      />
      {/* Additional ProjectHighlights can go here */}

      <div className="row m-5">
        <div className="d-flex flex-column align-items-center contact-container">
          <h2>Contact me</h2>
          <p>
            Interested in discussing a project or collaboration? Feel free to
            contact me using any of the methods below.
          </p>
          <LinkButton
            name="EMAIL"
            icon={faEnvelope}
            link="mailto:limjiantao@gmail.com"
          />
          <LinkButton
            name="GITHUB"
            icon={faGithub}
            link="https://github.com/Peterlim0928"
          />
          <LinkButton
            name="LINKEDIN"
            icon={faLinkedin}
            link="https://www.linkedin.com/in/jian-tao-lim-70a177290/"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
