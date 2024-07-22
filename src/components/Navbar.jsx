import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import personal_logo from "../assets/personal_logo.png";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (navId) => {
    setActive(navId);
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 ${
        scrolled ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className='flex items-start pointer-events-auto'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={personal_logo} 
            alt='logo' 
            className='w-12 h-12 object-contain cursor-pointer' 
          />
        </Link>

        <ul className='list-none hidden sm:flex flex-col gap-5 -mx-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => handleNavClick(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
                <li className="pointer-events-auto">
                <a
                  href="/Joshua_Alvarez_CV.pdf"
                  download="Joshua_Alvarez_CV.pdf"
                  className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-gray-600 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/personal-portfolio/Joshua_Alvarez_CV.pdf", "_blank");
                  }}
                >
                  Download CV
                </a>
              </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center pointer-events-auto'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav.id)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
                <li className="pointer-events-auto">
                <a
                  href="/Joshua_Alvarez_CV.pdf"
                  download="Joshua_Alvarez_CV.pdf"
                  className="bg-transparent text-white py-2 px-4 rounded cursor-pointer hover:bg-secondary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/personal-portfolio/Joshua_Alvarez_CV.pdf", "_blank");
                  }}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;