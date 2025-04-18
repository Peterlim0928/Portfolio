import { useNavigate } from "react-router-dom";
import "./ProjectHighlight.css";
import default_img from "../img/default-img.jpg";

function ProjectHighlight({ id, title, desc, img, link, flip = false }) {
  const navigate = useNavigate();

  const projectOnClick = () => {
    navigate(link);
  };

  return (
    <div className="row mb-5 project-highlight-container">
      <div className={`d-none d-md-block col-md-6 px-4 order-${flip ? 2 : 1}`}>
        <p className="project-id">{id}</p>
        <p className="project-title">{title}</p>
        <p className="project-desc mb-5">{desc}</p>
        {/* <button onClick={projectOnClick}>
          DETAILS
        </button> */}
      </div>
      <div className={`d-none d-md-flex align-items-center col-md-6 px-4 order-${flip ? 1 : 2}`}>
        <img src={img || default_img} className="img-fluid" alt="Project"/>
      </div>

      <div className="d-md-none col-12">
        <p className="project-id">{id}</p>
        <p className="project-title">{title}</p>
        <img src={img || default_img} className="img-fluid" alt="Project"/>
        <p className="project-desc my-5">{desc}</p>
        {/* <button onClick={projectOnClick}>
          DETAILS
        </button> */}
      </div>
    </div>
  );
}

export default ProjectHighlight;
