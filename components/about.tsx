"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-loose sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
  I completed my{" "}
  <span className="font-medium">BE in Information Technology</span> in April
  2025. I’m passionate about{" "}
  <span className="italic font-medium underline">
    Frontend Development.
  </span>
 Currently, I’m a{" "}
  <span className="font-medium">Frontend Developer Intern</span> at{" "}
  <span className="font-medium">InfiniDev</span>, where I’m gaining real-world
  experience and sharpening my skills.
</p>


      <p className="mt-3 text-lg">
        When I'm not coding, I enjoy watching{" "}
        <span className="italic font-medium">movies & animes</span>.
      </p>
    </motion.section>
  );
}
