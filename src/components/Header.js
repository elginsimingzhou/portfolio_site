import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <header className="z-[999] relative">
      <div
        className="fixed top-0 left-1/2 h-[6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        style={{
          opacity: 1,
          transform: "translateX(-50%) translateY(0px) translateZ(0px)",
        }}
      ></div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-16 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              style={
                isActive("#home")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
              smooth
              to="#home"
            >
              Home
            </NavHashLink>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              smooth
              to="#projects"
              style={
                isActive("#projects")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
            >
              Projects
            </NavHashLink>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              smooth
              to="#skills"
              style={
                isActive("#skills")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
            >
              Skills
            </NavHashLink>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              smooth
              to="#experience"
              style={
                isActive("#experience")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
            >
              Experience
            </NavHashLink>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              smooth
              to="#education"
              style={
                isActive("#education")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
            >
              Education
            </NavHashLink>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: null }}
          >
            <NavHashLink
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              smooth
              to="#contact"
              style={
                isActive("#contact")
                  ? {
                      borderRadius: "9999px",
                      backgroundColor: "#718096",
                      color: "#FFF",
                    }
                  : {}
              }
              activeStyle={{
                borderRadius: "9999px",
                backgroundColor: "#718096",
                color: "#FFF",
              }}
            >
              Contact
            </NavHashLink>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}
