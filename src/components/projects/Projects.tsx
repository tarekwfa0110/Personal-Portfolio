import Project from "./Project"
import project1 from "../../../public/project1.png"
function Projects() {
    return (
        <div className="px-12 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-white">Featured Projects</h1>
                <h2 className="text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for front-end development.</h2>
            </div>
            <Project image={project1} name={"Project 1"} year={2024} description={"Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."} github={"https://github.com/tarekwfa0110"} />
            <Project image={project1} name={"Project 2"} year={2023} description={"Built an interactive and engaging web application, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."} github={"https://github.com/tarekwfa0110"} />
            <Project image={project1} name={"Project 3"} year={2022} description={"Built a responsive website using HTML, CSS, and JavaScript, allowing users to easily navigate through different sections of the website."} github={"https://github.com/tarekwfa0110"} />
        </div>
    )
}
export default Projects