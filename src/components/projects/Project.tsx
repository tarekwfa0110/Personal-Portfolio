import React from 'react';
import { FaGithub } from 'react-icons/fa6';

interface ProjectProps {
    image: string;
    name: string;
    year: number;
    description: React.ReactNode;
    github: string;
    project: string;
}

const Project: React.FC<ProjectProps> = ({
    image,
    name,
    year,
    description,
    github,
    project
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
                <img src={image} alt={name} className="rounded-lg w-full" />
            </div>
            <div className="text-center mt-6 w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{name}</h3>
                <p className="text-[#C7C7C7] mt-2">Built in {year}</p>
                <div className="mt-4 text-left text-sm sm:text-base">{description}</div>

                <div className="flex justify-center items-center gap-4 flex-wrap sm:flex-nowrap">
                    <a href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 sm:mt-12">
                        <button>
                            <FaGithub />
                        </button>
                    </a>
                    <a href={project}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 sm:mt-12"
                    >
                        <button>
                            View Project
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;