import Project from "./Project";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="container">
      <div className="row">
        <Project
          title="Tetris Clone"
          desc={
            <>
              This project is a simplified version of the classic Tetris game,
              developed with a focus on web development using JavaScript and
              RxJS. It effectively manages game states and logic, providing a
              smooth gameplay experience.
              <br />
              <br />
              <strong>Controls:</strong>
              <br />
              <ul>
                <li>
                  <strong>W</strong>: Rotate
                </li>
                <li>
                  <strong>A</strong>: Move left
                </li>
                <li>
                  <strong>D</strong>: Move right
                </li>
                <li>
                  <strong>S</strong>: Soft drop
                </li>
                <li>
                  <strong>Spacebar</strong>: Hard drop
                </li>
              </ul>
              The game features a mechanic where the speed increases as more
              lines are cleared, adding an engaging challenge. This project
              serves as a practical demonstration of handling game logic and
              state management in a web environment.
            </>
          }
          link="https://Peterlim0928.github.io/Tetris-Clone"
        />
        <Project
          title="Discord clone (UI replica)"
          desc="A static replica of the Discord web interface, built entirely with 
          pure HTML and CSS, without the use of any frameworks or libraries like Bootstrap."
          link="https://Peterlim0928.github.io/Discord-Clone"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
