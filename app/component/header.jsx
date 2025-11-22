"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaTools,
  FaCommentAlt,
} from "react-icons/fa";

const RootHeader = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navItems = [
    { href: "/home", label: "Home", icon: <FaHome size={20} /> },
    { href: "/aboutme", label: "About Me", icon: <FaUser size={20} /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope size={20} /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram size={20} /> },
    { href: "/skillsandexpertise", label: "Skills", icon: <FaTools size={20} /> },
  ];

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4 w-full max-w-6xl flex flex-col">

        <div className="flex items-center justify-between">

          <Link href="/home" className="text-2xl font-bold hover:text-gray-300 transition">
            <span className="text-white">steve</span>
            <span className="text-blue-500">afk</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 font-semibold px-4 py-2 rounded-lg transition
                  ${isActive(item.href)
                    ? "bg-gray-500 text-white shadow-md"
                    : "hover:text-gray-300 text-gray-200"}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* SA MAY "LETS TALK" */}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold text-sm transition whitespace-nowrap shadow-md
              ${isActive("/contact")
                ? "bg-blue-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"}
            `}
          >
            <FaCommentAlt size={16} />
            <span>Let’s Talk</span>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <nav className="mt-4 flex md:hidden overflow-x-auto pb-2 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center space-y-1 shrink-0 px-2 py-2 rounded transition
                ${isActive(item.href)
                  ? "text-blue-400 bg-gray-500/50"
                  : "text-gray-300 hover:text-white"}
              `}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label === "About Me" ? "About" : item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RootHeader;