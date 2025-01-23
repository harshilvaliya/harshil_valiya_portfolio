import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2025{" "}
        <Link
          href="https://www.linkedin.com/in/harshil-valiya-1b1082274/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Harshil Valiya
        </Link>
        . All rights reserved.
      </small>
    </footer>
  );
}
