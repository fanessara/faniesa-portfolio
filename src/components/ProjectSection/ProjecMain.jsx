import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Inventory Kantor",
    year: "2026",
    align: "right",
    image: "/faniesa-portfolio/project1.png",
  },
  {
    name: "Monitoring Layanan DIV STI SUMUT",
    year: "2026",
    align: "left",
    image: "/faniesa-portfolio/pln_project.png",
  },
  {
    name: "Pondok Kue UMKM",
    year: "2025",
    align: "right",
    image: "/faniesa-portfolio/pondok_kue.png",
  },
];

function ProjecMain() {
  return (
    <div id="project" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjecMain;
