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
        I'm in the final year of my Bachelor's degree in{" "}
        <span className="font-medium"> Information Technology</span>, and I'm
        quite interested in{" "}
        <span className="italic font-medium underline">
          {" "}
          Frontend Web Development{" "}
        </span>
        . I also have some basic understanding of{" "}
        <span className="italic font-medium underline">Graphic Design</span> .
        I'm excited to put my talents to use in real-world situations and I'm
        currently looking for an internship as a frontend web developer.
      </p>

      <p className="mt-3 text-lg">
        When I'm not coding, I enjoy watching{" "}
        <span className="italic font-medium">movies & animes</span>.
      </p>
    </motion.section>
  );
}
