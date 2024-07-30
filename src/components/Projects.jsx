import React from "react";
import projectsImage from '../public/images/projects.png';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="my-projects" className="container-blue">
            <h2 className="pt-5 text-2xl">MY PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <ProjectCard
                    imagePath={projectsImage}
                    title="Project name"
                    description="Project description"
                    link_url="#"
                    link_text="Visit this project!"
                />
                <ProjectCard
                    imagePath={projectsImage}
                    title="Open source projects"
                    description="Check out my open source projects!"
                    link_url="#"
                    link_text="Visit my github profile!"
                />
            </div>
        </section>
    )
}

export default Projects