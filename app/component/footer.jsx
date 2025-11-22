import { FaGithub, FaFacebook, FaInstagram, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* SA WALA NGA SECTION */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Steve Kurt Bayona</h3>
          <p className="text-sm text-gray-400">
            Full Stack Developer passionate about building modern, 
            user-friendly web applications.
          </p>
        </div>

        {/* MID SECTION NAV */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-gray-500 transition">Home</a></li>
            <li><a href="/aboutme" className="hover:text-gray-500 transition">About Me</a></li>
            <li><a href="/contact" className="hover:text-gray-500 transition">Contact</a></li>
            <li><a href="/projects" className="hover:text-gray-500 transition">Projects</a></li>
            <li><a href="/skillsandexpertise" className="hover:text-gray-500 transition">Skills and Expertise</a></li>
            <li>
                
            </li>
          </ul>
        </div>

        {/* MY SOCIALS */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:bayona.sk1@gmail.com"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              <SiGmail />
            </a>

            <a
              href="https://www.facebook.com/steve.kurt.bayona.2024"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/tebcdef/?next=%2Ftebcdef%2F"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* DALOM */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © 2025 Steve Kurt Bayona. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
