import React from "react";
import tgnImage from '../public/images/tarragona.jpg';
import berlinImage from '../public/images/berlin.jpg';
import baselImage from '../public/images/basel.jpg';
import CityCard from "./CityCard";

const About = () => {
    return (
        <section id="path" className="md: p-5">
            <h2 className="text-2xl text-center">MY PATH</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <CityCard>
                    <img src={tgnImage} className="object-cover rounded" alt="tarragona" />
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3"><span className="text-2xl">Tarragona</span>, my city.</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3">Beautiful roman town in Catalonia, Spain. A hidden gem in the mediterranean ;)</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify">Here is where I was born, grew up and went to University (Univ. Rovira i Virgili), where I studied Computer Engineering.</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify">In Spain I had my first jobs as C# developer.</p>
                </CityCard>
                <CityCard>
                    <img src={berlinImage} className="object-cover rounded" alt="berlin" />
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3"><span className="text-2xl">Berlin</span>, the place to be.</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3">I lived almost ten years in this amazing city. It was my first experience living abroad, discovering new places, new people, new cultures, I loved it.</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify">Here I mastered my skills as Full-stack developer and lately as Backend engineer. Mostly working with Ruby on Rails.</p>
                </CityCard>
                <CityCard>
                    <img src={baselImage} className="object-cover rounded" alt="basel" />
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3"><span className="text-2xl">Basel</span>, the present.</p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify mt-3">Following my wife, who came to Switzerland by work, I now find myself living in Basel. I never expected to live here, but the quality of life is incredible. The old-town is like a fairy tale, and the nature near by is breathtaking. </p>
                    <p className="text-gray-700 dark:text-gray-400 text-justify">Professionally, I continue working with Ruby, but I am also open to new technologies.</p>
                </CityCard>
            </div>
        </section>
    )
}

export default About