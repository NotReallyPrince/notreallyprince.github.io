import { Laptop } from "lucide-react";

import { Tool } from "@/types/tool";
import { Icons } from "@/components/icons";

const {
  Chrome,
  Firefox,
  Github,
  JavaScript,
  NextJs,
  React,
  FastAPI,
  Mongo,
  TypeScript,
  VSCode,
  Python,
} = Icons;

export const tools: Tool[] = [
  {
    heading: "Technologies",
    items: [
      {
        name: "React",
        description: "A JavaScript library for building modern user interfaces",
        url: "https://react.dev/",
        icon: React,
      },
      {
        name: "React Native",
        description:
          "Build cross-platform mobile, web, and desktop apps with React Native",
        url: "https://reactnative.dev/",
        icon: React,
      },
      {
        name: "Next.js",
        description: "A React framework for production-grade web applications",
        url: "https://nextjs.org/",
        icon: NextJs,
      },
      {
        name: "MongoDB",
        description:
          "A flexible, scalable NoSQL database for modern applications",
        url: "https://mongodb.com/",
        icon: Mongo,
      },
      {
        name: "FastAPI",
        description:
          "A high-performance web framework for building APIs with Python",
        url: "https://fastapi.tiangolo.com/",
        icon: FastAPI,
      },
    ],
  },

  {
    heading: "Languages",
    items: [
      {
        name: "JavaScript",
        description: "The core programming language of the web",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: JavaScript,
      },
      {
        name: "TypeScript",
        description:
          "A typed superset of JavaScript that enhances productivity",
        url: "https://www.typescriptlang.org/",
        icon: TypeScript,
      },
      {
        name: "Python",
        description:
          "A versatile programming language known for its simplicity and performance",
        url: "https://www.python.org/",
        icon: Python,
      },
    ],
  },

  {
    heading: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "A free, open-source code editor optimized for modern development",
        url: "https://code.visualstudio.com/",
        icon: VSCode,
      },
      {
        name: "GitHub",
        description:
          "A platform for version control and collaboration in software development",
        url: "https://github.com/",
        icon: Github,
      },
      {
        name: "Google Chrome",
        description: "A fast, secure, and widely-used web browser",
        url: "https://www.google.com/chrome/",
        icon: Chrome,
      },
      {
        name: "Firefox",
        description: "A privacy-focused and fast web browser",
        url: "https://www.mozilla.org/en-US/firefox/new/",
        icon: Firefox,
      },
    ],
  },

  {
    heading: "Hardware",
    items: [
      {
        name: "Lenovo V-Series",
        description: "A reliable laptop for daily productivity",
        url: "https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/lenovo-v-series-laptops/v130-15ikb/81hn",
        icon: Laptop,
      },
    ],
  },
];
