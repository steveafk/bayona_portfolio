import Image from "next/image";

const projectsData = [
  {
    title: "My Favorite Places",
    description:
      "This app allows users to keep a personalized collection of their favorite places. Users can input any location they like, add notes, and even take and store pictures.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/steveafk/myfaveplaces",
    live: "https://myfaveplaces.vercel.app/",
    image: "/myfaveplaces.png", // Make sure this image is in the public folder
  },
  {
    title: "Shopping List",
    description: "This app helps users organize their shopping efficiently.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/steveafk/shopping_list",
    live: "https://shopping-list-brown.vercel.app/",
    image: "/shopping_list.png",
  },
  {
    title: "Personal Trainer",
    description:
      "A web application for managing gym memberships and wellness tracking.",
    technologies: [".Net Framework", "C#", "SQL Server"],
    github: "https://github.com/steveafk/PERSONAL_TRAINER_INC",
    live: "https://personal-trainer-inc.vercel.app/",
    image: "/personal_trainer.png",
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
            {/* Image fully visible, no cropping */}
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
