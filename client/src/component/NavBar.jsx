import React, { useState, useEffect } from "react";
import { LuSunMoon, LuLaptopMinimal} from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { animate } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", id: "home", icon: <GoHomeFill /> },
    { label: "About", id: "about", icon: <IoPerson /> },
    { label: "Skills", id: "skills", icon: <GiSkills /> },
    { label: "Projects", id: "projects", icon: <LuLaptopMinimal /> },
    { label: "Contact", id: "contact", icon: <MdContacts /> },
  ];

  const ScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // ===== THEME MANAGER (system + manual) =====
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "dark";
      document.documentElement.classList.toggle("dark", isDark);
      setDarkMode(isDark);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setDarkMode(prefersDark);
    }
    // listen to system change when user has NOT set override
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => {
      const override = localStorage.getItem("theme");
      if (!override) {
        document.documentElement.classList.toggle("dark", e.matches);
        setDarkMode(e.matches);
      }
    };
    media.addEventListener("change", listener);

    return () =>
      media.removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    const newDark = !isDarkNow;
    document.documentElement.classList.toggle("dark",newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    setDarkMode(newDark);
  };

  // ===== ACTIVE SECTION OBSERVER =====
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () =>
      sections.forEach((sec) =>
        observer.unobserve(sec)
      );
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-zinc-900 shadow transition-colors duration-500 ease-in-out">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="font-monoton text-xl font-bold bg-linear-to-r from-blue-900 to-red-500 bg-clip-text text-transparent cursor-pointer dark:from-blue-300 dark:to-rose-500">
          Emmanuel
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 font-medium font-quicksand text-gray-700 dark:text-gray-300">
          {navLinks.map(({ label, id }) => (
            <li
              key={id}
              onClick={() => ScrollToSection(id)}
              className="relative cursor-pointer hover:text-red-400 transition font-medium"
            >
              {label}

              {/* Glowing Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all duration-300 ${
                  activeSection === id
                    ? "w-full animate-bounce"
                    : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xs font-quicksand p-1 filter backdrop-blur-sm bg-white rounded-full font-bold mr-5 flex items-center gap-2 text-zinc-900 dark:text-white dark:bg-zinc-900 lg:px-3 animate-pulse"
        >
          {darkMode ? <HiOutlineLightBulb size={22} /> : <LuSunMoon size={22}/>}
          <span className="hidden md:block text-medium font-quicksand">
            {darkMode ? "Light" : "Dark"}
          </span>
        </button>

        {/* Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden shadow-sm  rounded-full ml-3 flex h-8 w-8 flex-col items-center justify-center space-y-1 cursor-pointer"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-linear-to-r from-blue-950 to-red-700 dark:bg-white transition-transform duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "rotate-45 translate-y-1.5 w-4" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-linear-to-r from-blue-950 to-red-700 rounded dark:bg-white transition-opacity duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-linear-to-r from-blue-950 to-red-700 dark:bg-white transition-transform duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "-rotate-45 -translate-y-1.5 w-4" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 h-screen w-60 bg-white dark:bg-zinc-900 shadow-md transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="mt-10 space-y-10 px-6">
          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => ScrollToSection(link.id)}
              className={`flex items-center gap-5 font-quicksand text-gray-900 dark:text-gray-200 cursor-pointer transition ${
                activeSection === link.id
                  ? "text-red-500 font-semibold dark:text-red-500"
                  : ""
              }`}
            >
              {link.icon}
              {link.label}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;