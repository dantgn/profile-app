import React from "react";

const ProjectCard = (props) => {
    const {imagePath, title, description, link_url, link_text} = props

    return (
        <div className="m-8 p-8 border border-indigo-300 rounded-2xl">
            <span className="flex justify-center items-center  max-h-94">
                <img src={imagePath} className="rounded-lg" alt={title} />
            </span>
            <div className="mt-8 text-left">
                <h4 className="font-bold text-xl">{title.toUpperCase()}</h4>
                <p className="mt-2">
                    {description}
                </p>
                <div className="mt-5">
                    <a href={link_url} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{link_text}</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard