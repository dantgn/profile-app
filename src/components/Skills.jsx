import React from "react";
import StackIcon from "tech-stack-icons";
import { Tooltip } from 'react-tooltip'


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
                    <div key={i} className="p-5">
                        <Tooltip id={tech} />
                        <a data-tooltip-id={tech} data-tooltip-place="top" data-tooltip-offset="50" data-tooltip-content={tech.toUpperCase()}>
                            <StackIcon name={tech} key={tech.id} className="size-14" />
                        </a>
                    </div>
                ))}

            </section>
        </>
    )
}

export default Skills