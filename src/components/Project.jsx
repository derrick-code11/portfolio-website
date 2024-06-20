import "../styles/Project.css";

const Project = ({ media, name, glink, dlink }) => {
  const handleOpenGitHubLink = () => {
    window.open(glink, "_blank");
  };

  const handleOpenDemoLink = () => {
    window.open(dlink, "_blank");
  };

  return (
    <>
      <div className="details-container color-container">
        <div className="article-container">
          <img src={media} alt={`${name} media`} className="project-img" />
        </div>
        <h2 className="experience-sub-title project-title">{name}</h2>
        <div className="btn-container">
          <button
            className="btn btn-color-2 project-btn"
            onClick={handleOpenGitHubLink}
          >
            Github
          </button>
          {dlink && (
            <button
              className="btn btn-color-2 project-btn"
              onClick={handleOpenDemoLink}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
