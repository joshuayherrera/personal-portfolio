import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    joyit,
    portfolio,
    gemini,
    rapidgo,
    threejs,
    python,
    huggingface
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI Developer",
      icon: creator,
    },
    {
      title: "Programmer Analyst",
      icon: mobile,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Hugging Face",
      icon: huggingface,
    }
  ];
  
  const experiences = [
    {
      title: "AI Developer",
      company_name: "JoyIt",
      icon: joyit,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Present",
      points: [
        "Developing and maintaining ai applications using python and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing ai models and frameworks for compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Joshua's productivity is unmatched. Working with him has been a game-changer for our team!",
      name: "Daniel Arotoma",
      designation: "Software Engineer",
      company: "JoyIt",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Joshua does.",
      name: "Jennifer Rodriguez",
      designation: "Data scientist",
      company: "JoyIt",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      testimonial:
        "After Joshua optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Giacomo Rojas",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "My personal portfolio is a presentation of myself, my skills, and my projects. It is a showcase of my work and a platform for me to connect with potential clients and collaborators.💻",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "teal-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "threejs",
          color: "brown-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/joshuayherrera/personal-portfolio",
    },
    {
      name: "Gemini AI",
      description:
        "The Gemini Clone project is a comprehensive recreation of the original Gemini application. This project involves replicating the core functionalities and design of the Gemini application, ensuring a high level of fidelity to the original.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "api integration",
          color: "yellow-text-gradient",
        },
      ],
      image: gemini,
      source_code_link: "https://github.com/joshuayherrera/gemini-clone",
    },
    {
      name: "RapidGo - Building...",
      description:
        "RapidGo is a sophisticated real-time food ordering system designed to streamline the process of placing and managing food orders. It enables users to browse menus, customize orders, and receive updates on their order status in real-time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "teal-text-gradient",
        },
        {
          name: "shadcn",
          color: "brown-text-gradient",
        },
        {
          name: "mongodb",
          color: "cyan-text-gradient",
        }
      ],
      image: rapidgo,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };