import Image from "next/image";

const projectsData = [
  {
    // MY FAV PLACES CARD
    title: "My Favorite Places",
    description:
      "This app allows users to keep a personalized collection of their favorite places.Users can input any location they like, add notes, and even take and store pictures. It’s a simple and interactive way to remember and share special spots, whether it’s a cozy café, a scenic park, or a hidden gem in the city.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/steveafk/myfaveplaces",
    live: "http://localhost:53824/",
    image: "/myfaveplaces.png",
  },
  {
    // SHOPPING LIST CARD
    title: "Shopping List",
    description:
      "This app helps users organize their shopping efficiently. Users can create a list of items they need and easily select the ones they want to purchase. It’s a practical and user-friendly tool for planning trips to the store, ensuring nothing is forgotten, and making shopping more organized and stress-free.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/steveafk/shopping_list",
    live: "http://localhost:52442/",
    image: "/shopping_list.png",
  },
  {
    // PERSONAL TRAINER CARD
    title: "Personal Trainer",
    description:
      "A web application for managing gym memberships, wellness tracking, and activity scheduling. It supports dual-level membership and detailed activity analytics.",
    technologies: [".Net Framework", "C#", "SQL Server"],
    github: "https://github.com/yourusername/personal-trainer-app",
    live: "https://personal-trainer-app.vercel.app",
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
            className="bg-gray-500 rounded-2xl shadow-lg p-6 flex flex-col h-full"
          >
            {/* PARA MA EDIT SIZE OF THE CARD */}
            <div className="relative w-full h-[450px] md:h-[500px] mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-xl object-cover"
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
