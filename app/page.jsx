import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start text-white p-6">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Steve Kurt Bayona
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Full-Stack Developer
        </h2>

        {/* PROFILE IMAGE*/}
        <div className="mt-6">
          <Image
            src="/steveprofile.jpg"
            width={250}
            height={250}
            alt="Profile Picture"
            className="rounded-full border-4 border-gray-600 shadow-lg"
          />
        </div>

        <p className="text-center max-w-xl mt-6 mb-12 text-lg md:text-xl">
          I build modern and responsive web applications with creativity and precision. Let&apos;s create something amazing together!
        </p>
      </div>

      {/* CARDS SECTION*/}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-4 mb-12">

        {/* WORK EXP CARD */}
        <div className="bg-gray-600 text-white rounded-xl shadow-lg p-6 flex-1 hover:scale-105 transform transition relative">
          <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Frontend Developer - ABC Company</strong> (2023 - Present)
              <p>Built responsive UI components using React and Tailwind.</p>
            </li>
            <li>
              <strong>Intern - XYZ Tech</strong> (2022 - 2023)
              <p>Assisted in developing web applications and testing features.</p>
            </li>
          </ul>
          <Link
            href="/skillsandexpertise"
            className="absolute bottom-4 right-4 text-gray-800 font-bold hover:text-gray-500 transition"
          >
            ➜ View More
          </Link>
        </div>

        {/* PROJECTS CARD*/}
        <div className="bg-gray-600 text-white rounded-xl shadow-lg p-6 flex-1 hover:scale-105 transform transition relative">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Portfolio Website</strong> - Next.js + Tailwind
              <p>Showcases my work, skills, and contact info in a modern UI.</p>
            </li>
            <li>
              <strong>Todo App</strong> - React + Firebase
              <p>Real-time task management app with authentication.</p>
            </li>
          </ul>
          <Link
            href="/projects"
            className="absolute bottom-4 right-4 text-gray-800 font-bold hover:text-gray-500 transition"
          >
            ➜ View More
          </Link>
        </div>

        {/* SKILLS AND EXPERTISE CARD */}
        <div className="bg-gray-600 text-white rounded-xl shadow-lg p-6 flex-1 hover:scale-105 transform transition relative">
          <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
          <ul className="space-y-2 mb-6">
            <li>React.js / Next.js</li>
            <li>Tailwind CSS / CSS3 / HTML5</li>
            <li>JavaScript / TypeScript</li>
            <li>Node.js / Express / Firebase</li>
            <li>Responsive & Mobile-First Design</li>
          </ul>
          <Link
            href="/skillsandexpertise"
            className="absolute bottom-4 right-4 text-gray-800 font-bold hover:text-gray-500 transition"
          >
            ➜ View More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
