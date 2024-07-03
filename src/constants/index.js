
import { IoIosSchool } from "react-icons/io";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";



import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - June 2022",
    role: "Associate Software Developer",
    company: "Cognizant",
    description: `Facilitated business meetings and collaborated with a cross-functional team to gather comprehensive requirements and construct workflows tailored to business needs. Led the planning, creation, and execution of TRIRIGA data migrations and integrations, utilizing tools such as Integration Objects and Data Integrator. Focused on leveraging TRIRIGA Platform tools, including Workflows, Queries, GUI, Data Modeler, and Object migration, to ensure efficient and accurate data management.`,
    technologies: ["IBM TRIRIGA"],
  },
  {
    year: "October 2020 - May 2022",
    role: "Program Analyst",
    company: "Cognizant",
    description: `Operated as an IBM TRIRIGA and Java Integration Software Developer, designing and implementing TRIRIGA data integration modules. Developed custom Java classes for extracting and analyzing TRIRIGA data for front-end HTML presentation. Collaborated with cross-functional teams to enhance data workflows and system functionality, improving operational efficiency and data accuracy. Provided technical support and troubleshooting for integration-related issues, demonstrating strong problem-solving skills and expertise in TRIRIGA and Java technologies.`,
    technologies: ["HTML", "CSS", "JS", "IBM TRIRIGA","Java"],
  },
  {
    year: "January 2020 - June 2020",
    role: "Program Analyst Trainee (Internship)",
    company: "Cognizant",
    description: `I contributed to a project focusing on geographic information systems (GIS), utilizing expertise in ArcGIS and ADO.NET to perform advanced spatial data analysis and integration.`,
    technologies: ["ADO.NET", "ArcGIS", "C#", "mySQL"],
  },
  {
    year: "July 2019 - August 2019",
    role: "Data Analyst (Internship)",
    company: "Bharat Electronics Limited",
    description: `During my internship at Bharat Electronics Limited in Hyderabad, I specialized in socket programming using Java and Python. I efficiently managed data transfer utilizing sockets in Python, visualizing, and recognizing patterns in the received data. Additionally, I collaborated with cross-functional teams to enhance data processing efficiency and ensured the seamless integration of the socket programming module into existing systems.`,
    technologies: ["Java", "Python", "Anaconda", "Flask"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "1712 NE Silkwood CT, Grimes, IA 50111. ",
  phoneNo: "+1 3159574215 ",
  email: "kthiruma@syr.edu",
};

export const ServiceData = [
  {
    icon: IoIosSchool,
    title: "Education",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: carousel1,
  },
  {
    icon: SiGithub,
    title: "Github",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: carousel2,
  },
  {
    icon: SiLeetcode,
    title: "Leetcode",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: carousel3, 
  },
  {
    icon: PiCertificateFill,
    title: "Certifications",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: carousel4,
  },

];