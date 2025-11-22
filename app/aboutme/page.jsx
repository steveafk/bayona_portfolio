import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start p-6 text-white">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">

        {/* LEFT COLUMN */}
        <div className="bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center text-center md:w-1/3">
          <Image
            src="/steveprofile.jpg"
            width={250}
            height={250}
            alt="Profile Picture"
            className="rounded-full border-4 border-gray-600 shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">Steve Kurt Bayona</h1>
          <h2 className="text-lg font-medium mt-2">Full-Stack Developer</h2>

          <p className="mt-4 text-gray-200 text-center">
            I am passionate about building modern and responsive web applications that combine
            creativity and precision. My goal is to create solutions that are not only functional
            but also engaging for users.
          </p>

          {/* ANG MGA SOCIAL ICONS */}
          <div className="flex space-x-6 mt-6 justify-center">
            <a
              href="https://github.com/steveafk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:bayona.sk1@gmail.com"
              className="hover:text-gray-300 transition"
            >
              <SiGmail size={28} />
            </a>
            <a
              href="https://www.facebook.com/steve.kurt.bayona.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/tebcdef/?next=%2Ftebcdef%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 md:w-2/3">
          {[
            "I am an enthusiastic full-stack developer committed to creating cutting-edge, user-friendly, and responsive online applications. During my college years, I became fascinated with using technology to solve real-world problems, which led me to pursue a career in web development.",
            "I've worked on a variety of projects throughout the years, from comprehensive task management apps to dynamic portfolio websites. My expertise of scalable architecture, clean code, and user-friendly UI/UX design has been influenced by each project.",
            "My approach to growth places a strong emphasis on teamwork, flexibility, and lifelong learning. I place a high importance on producing maintainable code, adhering to best practices, and keeping up with the newest technology. My proficiency with React, Next.js, Tailwind CSS, Node.js, and TypeScript enables me to effectively develop front-end and back-end solutions.",
            "I have a strong commitment to personal development and curiosity outside of coding. I like participating in coding groups, learning new programming languages, and investigating cutting-edge technology. When I'm not working, I like to travel, take pictures of cities, and partake in artistic pursuits that motivate me.",
            "My education and self-study efforts have given me a strong basis for taking on challenging tasks. I'm always looking for ways to innovate, enhance, and add value to every application I create. Delivering outstanding web solutions, in my opinion, requires a powerful blend of technical expertise, inventiveness, and commitment."
          ].map((paragraph, index) => (
            <div key={index} className="bg-gray-700 rounded-xl shadow-lg p-6">
              <p className="text-gray-200">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12"></div>
    </div>
  );
};

export default AboutMe;