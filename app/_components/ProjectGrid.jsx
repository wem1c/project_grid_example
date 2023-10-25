"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const ProjectGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const router = useRouter();

  return (
    <main className="grid-rows-9 relative grid min-h-[calc(100svh-3rem)] bg-fuchsia-400 bg-opacity-20 lg:grid-cols-3 lg:grid-rows-3">
      <Image
        key={"img" + projects[0].id}
        src={projects[selectedProject - 1].image}
        alt="image"
        fill
        className={clsx(
          "object-cover object-center transition-opacity duration-1000",
        )}
        priority
        sizes="100vw"
        placeholder="blur"
      />
      {projects.map((project) => (
        <label
          key={"label_" + project.id}
          className={clsx(
            "group z-0 p-4",
            "border-b border-gray-300 border-opacity-20 last:border-b-0 lg:border",
            "text-gray-300 text-opacity-40",
            selectedProject === project.id &&
              "border-white bg-fuchsia-600 bg-opacity-20 shadow backdrop-blur-sm",
          )}
          onMouseEnter={() => setSelectedProject(project.id)}
        >
          <input
            type="radio"
            checked={project.id === selectedProject}
            name="projectRadio"
            value={project.id}
            onChange={() => setSelectedProject(project.id)}
            onKeyDown={(e) =>
              e.key === "Enter" && router.push("/projects/" + project.id)
            }
            className="appearance-none"
          />
          <a
            className={clsx(
              "text-lg underline underline-offset-4 hover:font-medium",
              selectedProject === project.id && "text-white",
            )}
            href={`/projects/${project.id}`}
          >
            {project.title}
          </a>
        </label>
      ))}
    </main>
  );
};

export default ProjectGrid;
