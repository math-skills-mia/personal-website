import { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Personal Website",
    category: "Web Development",
    status: "In Progress",
    description:
      "A personal site for experimenting with interface design, interactive utilities, games, and future data and machine learning projects.",
    tech: ["React", "TypeScript", "CSS", "Git"],
    link: null,
  },
  {
    number: "02",
    title: "Machine Learning Project",
    category: "Machine Learning",
    status: "Coming Soon",
    description: "Reserved for an upcoming machine learning project.",
    tech: ["Python", "scikit-learn"],
    link: null,
  },
  {
    number: "03",
    title: "Machine Learning Project",
    category: "Data + ML",
    status: "Coming Soon",
    description: "Reserved for another data or machine learning project.",
    tech: ["Python", "SQL"],
    link: null,
  },
];

function CurrentProjects() {
  const [openProject, setOpenProject] = useState<number | null>(0);

  const toggleProject = (index: number) => {
    setOpenProject((current) => (current === index ? null : index));
  };

  return (
    <section className="current-projects" id="projects">
      <div className="current-projects__header">
        <p className="section-label">Selected Work</p>
        <h2 className="current-projects__title">Current Projects</h2>
      </div>

      <div className="current-projects__list">
        {projects.map((project, index) => {
          const isOpen = openProject === index;

          return (
            <article
              className={`project-row ${isOpen ? "project-row--open" : ""}`}
              key={`${project.number}-${project.title}`}
            >
              <button
                className="project-row__button"
                type="button"
                onClick={() => toggleProject(index)}
                aria-expanded={isOpen}
              >
                <span className="project-row__number">{project.number}</span>

                <span className="project-row__main">
                  <span className="project-row__title">{project.title}</span>

                  <span className="project-row__category">
                    {project.category}
                  </span>
                </span>

                <span className="project-row__status">{project.status}</span>

                <span className="project-row__toggle" aria-hidden="true">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div className="project-row__details">
                <div className="project-row__details-inner">
                  <p>{project.description}</p>

                  <div className="project-row__meta">
                    <span>{project.tech.join(" · ")}</span>

                    {project.link && (
                      <a href={project.link}>
                        View project
                        <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CurrentProjects;
