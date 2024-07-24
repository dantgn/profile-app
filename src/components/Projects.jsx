import React, { Component } from "react";
import projectsImage from '../public/images/projects.png';

const Projects = () => {
    return (
        <section id="my-projects" className="container-blue">
            <h2 className="pt-5 text-2xl">MY PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <span className="m-8 p-8 border border-indigo-300 rounded-2xl">
                    <span className="flex justify-center items-center  max-h-94">
                        <img src={projectsImage} className="rounded-lg" />
                    </span>
                    <div className="mt-8 text-left">
                        <h4 className="font-bold text-xl">PROJECT NAME</h4>
                        <p className="mt-2">
                            Project description
                        </p>
                        <div className="mt-5">
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Visit this project!</a>
                        </div>
                    </div>
                </span>

                <span className="m-8 p-8 border border-indigo-300 rounded-2xl">
                    <span className="flex justify-center items-center  max-h-94 bg rounded">
                        <img src={projectsImage} className="rounded-lg" />
                    </span>
                    <div className="mt-8 text-left">
                        <h4 className="font-bold text-xl">OPEN SOURCE PROJECTS</h4>
                        <p className="mt-2">
                            Check out my open source projects!
                        </p>
                        <div className="mt-5">
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Visit my github profile</a>
                        </div>
                    </div>
                </span>
            </div>
        </section>
    )
}

export default Projects