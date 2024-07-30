import React from "react";
import TechItem from "./TechItem";


const Skills  = () => {
    const technologies = [
        "ruby", "rails", "csharp", "java", "html5", "reactjs", "js", "css3", "graphql", 
        "postgresql", "mysql", "aws", "heroku", "azure", "github", "bitbucket", "jira",
        "git"
    ];

    return (
        <>  
            <h2 className="p-5 text-2xl">MY TECH STACK</h2>
            <section id="my-skills" className="p-5 grid grid-cols-3 md:grid-cols-9">
                {technologies.map((tech, i) => (
                    <TechItem key={i} name={tech} />
                ))}

            </section>
        </>
    )
}

export default Skills