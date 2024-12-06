import { FaGithub } from "react-icons/fa6"
function Project({image, name, year, description, github}) {
    return (
        <div className="flex justify-between">
            <div className="w-1/2 h-[500px] bg-[#1A1A1A] p-12 flex items-center justify-center">
                <img src={image} />
            </div>

            <div className="w-1/2 h-[500px] p-12 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-white">{name}</h1>
                    <p className="text-[#C7C7C7]">{description}</p>
                </div>
                <p className="text-[#C7C7C7]">Project Info</p>
                <hr />
                <div className="flex justify-between text-white">
                    <p>Year</p>
                    <p>{year}</p>
                </div>
                <hr />
                <div className="flex justify-between text-white">
                    <p>Role</p>
                    <p>Front-End Developer</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="bg-[#D3E97A] text-black font-semibold p-3 rounded-md">View Project</button>
                    <a href="https://github.com/tarekwfa0110" target="_blank"><button className="text-[#D3E97A] p-2 rounded-full flex justify-center items-center"><FaGithub className="w-8 h-8"/></button></a>
                </div>
            </div>
        </div>
    )
}
export default Project