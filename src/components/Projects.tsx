import { useState, useEffect } from "react";
import "./css/Projects.css";

interface Project {
  name: string;
  displayName: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  language: string;
  public: boolean;
  hasLink: boolean;
  image: string
}

const formatName = (name: string) => {
  return name.replace(/-/g, " ");
}

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("data/projectsData.json");
        const data: Project[] = await res.json();

        data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        const formattedData = data.map(project => ({
          ...project,
          displayName: formatName(project.name),
          updatedAt: formatDate(new Date(project.updatedAt)),
          createdAt: formatDate(new Date(project.createdAt))
        }));

        setProjects(formattedData);
      } catch (err) {
        console.error("Erro ao carregar os projetos:", err);
      }
    };

    fetchProjects();
  }, []);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-container" id="projects">
      <h2>MEUS PROJETOS</h2>
      {projects.length > 0 ? (
        <div className="projects-slider-container">
          <button className="slider-button" id="prev-button" onClick={handlePrev}>
            <img
              src="assets/icons/arrow-small-left.svg"
              alt="Previous button"
              className="slider-button-icon"
            />
          </button>
          <div className="projects-slider">
            {projects.map((project, index) => (
              <div
                className={`project-card ${index === slideIndex ? "active" : "inactive"}`}
                key={index}
              >
                <div className="project-container">
                  <div className="project-image-container">
                    <img
                      src={project.image ? project.image : "assets/project-images/project_bg_placeholder.jpg"}
                      alt="Project image"
                      className="project-image"
                    />
                  </div>
                  <div className="project-infos">
                    <h3>{project.displayName}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <p>linguagem mais presente no projeto: {project.language ? project.language : "Markdown"}</p>
                      <p>projeto iniciado em {project.createdAt}</p>
                    </div>
                    <div className="project-footer">
                      {project.public ? <button className="project-button">
                          <a href={`https://github.com/ofelipelucca/${project.name}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            ver mais
                          </a>
                        </button> : <p>código fonte privado!</p>}                        
                      <p>{index + 1}/{projects.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-button" id="next-button" onClick={handleNext}>
            <img
              src="assets/icons/arrow-small-right.svg"
              alt="Next button"
              className="slider-button-icon"
            />
          </button>
        </div>
      ) : (
        <p>Carregando projetos...</p>
      )}
    </div>
  );
}

export default Projects;
