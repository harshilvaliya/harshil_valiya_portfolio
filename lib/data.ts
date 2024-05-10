import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Crunchyroll from "@/public/crunchyroll.png";
import Login from "@/public/login.png";
import GiftConnect from "@/public/GiftConnect.png";
import NicoRobin from "@/public/NicoRobin.png";
import PetMania from "@/public/Pet-Mania.png";
import Tshirt from "@/public/back.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BE - IT",
    location: "LDRP-ITR, Gandhinagar, Gujarat",
    description: "Pursuing bachelor's degree in IT engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Front-end Developer",
    location: "SSIP Hackathon",
    description:
      "I served as a frontend developer for the 'KrushiAdhaar' project, where I contributed significantly to developing frontend pages. My responsibilities included crafting PowerPoint presentations and project reports. I utilized HTML and CSS technologies extensively to design and execute various project elements.",
    icon: React.createElement(FaCode),
    date: "Oct 2022",
  },
  {
    title: "UI Designer",
    location: "SSIP Hackathon",
    description:
      "Engaged as a UI designer for the 'GiftConnect' project, I concentrated on refining the website's user interface to elevate both user experience and visual allure. My pivotal role involved leveraging Figma extensively to craft intricate UI designs. Additionally, I contributed to developing PowerPoint presentations and project reports, effectively demonstrating the project's advancements and achievements.",
    icon: React.createElement(FaFigma),
    date: "Nov 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "The Special Character, Ahmedabad, Gujarat",
    description:
      "Led a team of six in developing an e-commerce site for pet items, utilizing Next.js, HTML5, CSS3, and Tailwind CSS. Leveraged GitHub for version control and collaboration, winning first prize in a web development competition. Spearheaded problem-solving efforts, fostering teamwork and communication skills. Gained valuable Full Stack Development experience, contributing to project success.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Pet Mania",
    description:
      "This e-commerce project was my full-stack development work. Customers can browse the website and purchase products for their pets online.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    imageUrl: PetMania,
    projectUrl: "https://github.com/special-char/grinding-pandas-pet/tree/main",
  },
  {
    title: "GiftConnect",
    description:
      "I designed the user interface (UI) for our project 'GiftConnect' mobile application and website during the hackathon.",
    tags: ["Figma"],
    imageUrl: GiftConnect,
    projectUrl:
      "https://drive.google.com/drive/folders/14z5q_GQ9NrjZMSeCXS07JmKhxYEbzsSy?usp=drive_link",
  },
  {
    title: "Log In & Sign Up Page",
    description:
      "I created a single page for this basic project that allows users to sign up and log in. This is a simple component that can be adapted to various projects.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: Login,
    projectUrl: "https://github.com/harshilvaliya/log-in-page",
  },
  {
    title: "Wallpapers",
    description:
      "I occasionally design desktop as well as smartphone wallpapers in my free time.",
    tags: ["Figma", "PixelLab"],
    imageUrl: NicoRobin,
    projectUrl:
      "https://drive.google.com/drive/folders/1zU7kBulxNsddgT0OjCTWooHX0_Esk5fw?usp=drive_link",
  },
  {
    title: "Crunchyroll",
    description:
      "This is the landing page for the anime streaming service 'Crunchyroll'. This web page is static and includes minimal animations.",
    tags: ["HTML", "CSS"],
    imageUrl: Crunchyroll,
    projectUrl: "https://github.com/harshilvaliya/anime-site",
  },
  {
    title: "T-shirt Design",
    description:
      "I designed t-shirt for our event 'Ultimate Clash' which is part of college's tech fest 'Xenesis'.",
    tags: ["Figma"],
    imageUrl: Tshirt,
    projectUrl:
      "https://drive.google.com/drive/folders/1JxJNoxiG3o2SAVhs8uvzowyu4ehp3JRE?usp=drive_link",
  },
] as const;

export const skillsData = [
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Figma",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "GitHub",
  "MongoDB",
  "Framer Motion",
] as const;
