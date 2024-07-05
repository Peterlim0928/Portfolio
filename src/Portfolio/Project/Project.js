function Project({ title, desc, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className="col-12 col-md-6 my-5 px-5">
      <p className="project-title">{title}</p>
      <p className="project-desc mb-5">{desc}</p>
      <button onClick={handleClick}>GO TO</button>
    </div>
  );
}

export default Project;
