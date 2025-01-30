import image from "../../public/profile.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Main() {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-white px-4 md:px-12 gap-8 md:gap-0">
            <div className="flex flex-col gap-7 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    HI I AM,<br />TAREK WFA.
                </h1>
                <p className="text-[#C7C7C7] text-sm md:text-base">
                    An Egypt based front-end developer passionate about building accessible and user friendly websites.
                </p>
                <div className="flex gap-8 items-center justify-center md:justify-start">
                    <a href=""><button className="bg-[#D3E97A] text-black font-semibold p-3 rounded-md">Contact Me</button></a>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/tarek-wfa/" target="_blank"><button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center"><FaLinkedinIn /></button></a>
                        <a href="https://github.com/tarekwfa0110" target="_blank"><button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center"><FaGithub /></button></a>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className="w-[200px] md:w-[300px] lg:w-[400px]" />
        </div>
    )
}

export default Main;