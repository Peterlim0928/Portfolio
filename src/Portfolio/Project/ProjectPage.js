import Project from "./Project";
import "./ProjectPage.css";

function ProjectPage() {
  const projects = [
    {
      title: "Tetris Clone",
      desc: (
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
      ),
      link: "https://Peterlim0928.github.io/Tetris-Clone",
    },
    {
      title: "Discord Clone (UI Replica)",
      desc: (
        <>
          This project is a static, pixel-perfect replica of the Discord web
          interface, built entirely with pure HTML and CSS, without relying
          on any frameworks or libraries like Bootstrap.
          <br />
          <br />
          <strong>Current Limitations:</strong>
          <br />
          <ul>
            <li>
              <strong>No small screen support:</strong> The design does not
              adapt well to mobile or smaller screens.
            </li>
            <li>
              <strong>Static interface:</strong> The interface is
              non-interactive as no JavaScript functionality is currently
              implemented.
            </li>
          </ul>
          <strong>Future Improvements:</strong>
          <br />
          <ul>
            <li>
              <strong>Responsive Design:</strong> Update the CSS to support
              mobile responsiveness, ensuring usability across all devices.
            </li>
            <li>
              <strong>JavaScript Integration:</strong> Implement interactive
              features, such as switching channels and sending messages.
            </li>
          </ul>
        </>
      ),
      link: "https://Peterlim0928.github.io/Discord-Clone",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {projects.map((project, index) => (
          <Project title={project.title} desc={project.desc} index={index} link={project.link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
