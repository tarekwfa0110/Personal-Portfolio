import React from 'react';

interface ProjectProps {
    image: string;
    name: string;
    year: number;
    description: React.ReactNode;
    github: string;
}

const Project: React.FC<ProjectProps> = ({
    image,
    name,
    year,
    description,
    github
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                <img src={image} alt={name} className="rounded-lg" />
            </div>
            <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <p className="text-[#C7C7C7] mt-2">Built in {year}</p>
                <div className="mt-4 text-left">{description}</div>


                <a href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12">
                    <button>
                        View Project
                    </button>
                </a>
            </div>
        </div >
    );
};

export default Project;