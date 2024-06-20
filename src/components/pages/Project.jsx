import "./Project.css";
export const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Android App",
      src: "mobile_app.jpg",
      link: "https://drive.google.com/drive/folders/1h-KtMV5hRb0q4X6D-C-W6cKUqu2YWSlh?fbclid=IwAR3ofhxdKKgt8RoJJZFe-05M5VnLRlUbvuKb8MfJp1BbgT0r93QVJtzaysQ",
    },
    {
      id: 2,
      name: "Library Management System",
      src: "lms.jpg",
      link: "https://drive.google.com/drive/folders/1pIVG2uNvPNKOf58vlURZyeKQ5gGzDCJa?fbclid=IwAR3ofhxdKKgt8RoJJZFe-05M5VnLRlUbvuKb8MfJp1BbgT0r93QVJtzaysQ",
    },
    {
      id: 3,
      name: "Programming",
      src: "prog.jpg",
      link: "https://github.com/Ji-arr",
    },
    {
      id: 4,
      name: "Application Programming Interface",
      src: "api.jpg",
    },
  ];
  return (
    <div className="project-div" id="project">
      <div>
        <h1>PROJECTS</h1>
      </div>
      <div className="flex-wrap">
        {projects.map((project, index) => {
          return (
            <a href={project.link}>
              <div
                className="project-card"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${project.src})`,
                }}
              >
                <div className="overlay">
                  <h1>{project.name}</h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
