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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm in the final year of my Bachelor's degree in{" "}
        <span className="font-medium italic"> Information Technology </span> ,
        and I'm quite interested in{" "}
        <span className="font-medium italic"> Front-end Web Development </span>{" "}
        , especially <span className="underline font-mono">Next.js</span> . I
        also have some understanding of{" "}
        <span className="font-medium italic">Graphic Design</span> . I'm excited
        to put my talents to use in real-world situations through internships
        and further develop my knowledge.
      </p>

      <p>
        When I'm not coding, I enjoy playing{" "}
        <span className="italic font-medium">video games</span> & watching{" "}
        <span className="italic font-medium">movies</span>.
      </p>
    </motion.section>
  );
}
