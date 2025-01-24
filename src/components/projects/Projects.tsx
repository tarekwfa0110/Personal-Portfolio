import { forwardRef } from 'react';
import Project from "./Project";
import project1 from "../../../public/project1.png";
import admindashboard from "../../../public/admin-dashboard.png";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="px-12 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-white">Featured Projects</h1>
                <h2 className="text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for front-end development.</h2>
            </div>

            <Project
                image={project1}
                name={"E-Commerce Platform"}
                year={2024}
                description={
                    <>
                        <p className="text-[#C7C7C7] mb-4 leading-relaxed">A fully functional <span className="font-bold text-white">e-commerce website</span> built with React, offering a dynamic shopping experience.</p>
                        <ol className="list-decimal pl-8 mb-4 text-[#C7C7C7]">
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Responsive Product Listings</span> with real-time filtering.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Detailed Product Pages</span> with high-quality images.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Intuitive Shopping Cart</span> functionality.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Smooth Checkout Process</span> with user-friendly flow.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Efficient State Management</span> using React Context.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Real-time API Integration</span> with React Query.</li>
                        </ol>
                        <p className="text-[#C7C7C7] leading-relaxed">Scalable project <span className="font-bold text-white">showcasing front-end development skills</span>.</p>
                    </>
                }
                github={"https://github.com/tarekwfa0110/E-Commerce"}
            />
            <Project
                image={admindashboard}
                name={"Admin Dashboard"}
                year={2023}
                description={
                    <>
                        <p className="text-[#C7C7C7] mb-4 leading-relaxed">Comprehensive <span className="font-bold text-white">admin management system</span> with powerful features.</p>
                        <ol className="list-decimal pl-8 mb-4 text-[#C7C7C7]">
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">User Management</span> and Role-based Access Control.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Real-time Analytics</span> and Data Visualization.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Responsive Interface</span> with intuitive design.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Advanced Filtering</span> and Search Capabilities.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Secure Authentication</span> Mechanisms.</li>
                        </ol>
                        <p className="text-[#C7C7C7] leading-relaxed">Demonstrates <span className="font-bold text-white">complex dashboard development skills</span>.</p>
                    </>
                }
                github={"https://github.com/tarekwfa0110/Admin-Dashboard"}
            />
            <Project
                image={project1}
                name={"React Quiz App"}
                year={2022}
                description={
                    <>
                        <p className="text-[#C7C7C7] mb-4 leading-relaxed">Interactive <span className="font-bold text-white">quiz application</span> built with React.</p>
                        <ol className="list-decimal pl-8 mb-4 text-[#C7C7C7]">
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Multiple Quiz Categories</span> and Difficulty Levels.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Real-time Score Tracking</span>.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Responsive Design</span> for All Devices.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Timer and Progress Tracking</span>.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Results Analysis</span>.</li>
                        </ol>
                        <p className="text-[#C7C7C7] leading-relaxed">Highlights <span className="font-bold text-white">interactive web application development</span>.</p>
                    </>
                }
                github={"https://github.com/tarekwfa0110/React-Quiz"}
            />
        </div>
    );
});

export default Projects;