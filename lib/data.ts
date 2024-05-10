import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    description: "Pursuing bechlor's degree in IT engg.",
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
