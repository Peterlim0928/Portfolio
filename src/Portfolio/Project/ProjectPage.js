import Project from "./Project";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="container">
      <div className="row">
        <Project
          title="Tetris clone"
          desc="A Tetris Clone in javascript using reactive extensions, employing
        observables for efficient game state management."
        />
        <Project title="A project title" desc="A project description" />
      </div>
    </div>
  );
}

export default ProjectPage;
