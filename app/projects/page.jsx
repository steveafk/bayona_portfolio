import Image from "next/image";

const projectsData = [
  {
    // FITNESS MULTIVERSE CARD
    title: "Fitness Multiverse",
    description:
      "Fitness Multiverse is a sleek web UI showcasing a modern fitness platform. It highlights user-friendly interfaces for tracking workouts, memberships, and wellness activities. Designed for fitness enthusiasts and gym admins who want a visually appealing and intuitive platform.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Figma (UI Design)"],
    github: "https://github.com/yourusername/fitness-multiverse",
    live: "https://fitness-multiverse.vercel.app",
    image: "/fitness_multiverse.png",
  },
  {
    // SMARTTOUR CARD
    title: "SmartTour Antique",
    description:
      "An AI-powered mobile-based tourism guide for Antique province. It helps tourists find attractions, hotels, and restaurants with interactive maps and AI recommendations.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js", "OpenAI API"],
    github: "https://github.com/yourusername/smarttour-antique",
    live: "https://smarttour-antique.vercel.app",
    image: "/smarttour.png",
  },
  {
    // PERSONAL TRAINER CARD
    title: "Personal Trainer",
    description:
      "A web application for managing gym memberships, wellness tracking, and activity scheduling. It supports dual-level membership and detailed activity analytics.",
    technologies: ["Next.js", "Tailwind CSS", "C#", "SQL Server"],
    github: "https://github.com/yourusername/personal-trainer-app",
    live: "https://personal-trainer-app.vercel.app",
    image: "/personal_trainer.png",
  },
];

const Projects = () => {
  return (
    <div className="bg-transparent py-16 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

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

            <p className="text-sm text-gray-500 mb-4">
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
