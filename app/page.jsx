import ProjectGrid from "./_components/ProjectGrid";

import image1 from "../public/1.jpg";
import image2 from "../public/2.jpg";
import image3 from "../public/3.jpg";
import image4 from "../public/4.jpg";
import image5 from "../public/5.jpg";
import image6 from "../public/6.jpg";
import image7 from "../public/7.jpg";
import image8 from "../public/8.jpg";
import image9 from "../public/9.jpg";

const projects = [
  {
    id: 1,
    title: "Next.js",
    description: "A React framework built on top of Node.js",
    image: image1,
  },
  {
    id: 2,
    title: "React",
    description: "A JavaScript library for building user interfaces",
    image: image2,
  },
  {
    id: 3,
    title: "Sass",
    description: "A CSS preprocessor",
    image: image3,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description: "A utility-first CSS framework",
    image: image4,
  },
  {
    id: 5,
    title: "GraphQL",
    description: "A query language for APIs",
    image: image5,
  },
  {
    id: 6,
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine",
    image: image6,
  },
  {
    id: 7,
    title: "Express.js",
    description: "A web application framework for Node.js",
    image: image7,
  },
  {
    id: 8,
    title: "MongoDB",
    description: "A NoSQL database",
    image: image8,
  },
  {
    id: 9,
    title: "Redis",
    description: "An in-memory data structure store",
    image: image9,
  },
];

export default function Home() {
  return <ProjectGrid projects={projects} />;
}
