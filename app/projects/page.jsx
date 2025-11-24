import Image from "next/image";

const projectsData = [
  {
    title: "My To-Do List",
    description:
      "A simple web-based application that helps users organize their daily tasks. Users can add, edit, and delete tasks to keep track of what needs to be done efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/steveafk/to-do-list",
    live: "https://to-do-list-gold-sigma.vercel.app/",
    image: "/to-do-list.png",
  },
  {
    title: "Iloilo Tourist Spots",
    description: "A website showcasing popular tourist destinations in Iloilo. Users can explore different spots, view images, and learn interesting facts about each location.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/steveafk/tourists-website",
    live: "https://tourists-website.vercel.app/",
    image: "/iloilo-tourist-spots.png",
  },
  {
    title: "Reaction Time Game",
    description:
      "An interactive game that tests how quickly users can respond to visual cues. It helps improve focus, hand-eye coordination, and reaction speed while providing a fun challenge.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/steveafk/simple-game",
    live: "https://simple-game-two.vercel.app/",
    image: "/simple-game.png",
  },
];

const Projects = () => {
  return (
    <div className="bg-transparent py-16 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-2xl shadow-lg p-6 flex flex-col"
          >
            <div className="w-full mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

            <p className="text-white mb-4">{project.description}</p>

            <p className="text-sm text-white mb-4">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>

            <div className="mt-auto flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
