import React from "react";
import profileImage from '../public/images/profile_image.png';

const About = () =>  {
    return (
        <section id="about-me" className="container-blue">
            <span className="flex justify-center items-center pt-10 md:pt-0">
                <img className="rounded-full m-10 justify-center" src={profileImage}  width="150" height="150" alt="Daniel"/>
            </span>
            <p className="text-3xl font-bold"> Hi! I'm Daniel</p>
            <p> Software Engineer</p>

            <div className="text-justify p-5 m-0 md:m-5 " >
                <hr/>
                <h2 className="p-8 text-2xl text-center">ABOUT ME</h2>
                <div className="flex justify-center items-center">
                    <div className="rounded border border-indigo-300 font-mono p-4 md:p-10 text-justify space-y-1.5">
                        <p>Allow me to introduce myself. I am a software engineer from Tarragona, Spain, who is currently living in Basel.</p>
                        <p>I am passionate about sports and travelling, I would say am a bit nomad.</p>
                        <p>
                            This page is just an introduction about me, so you can know a bit more about my life and my experience as a Software developer.
                        </p>
                        <p>
                            If you keep scrolling down, you will learn what cities marked my life, as well as my programmer skills and which projects have I worked on.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
  }

export default About