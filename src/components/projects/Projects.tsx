import { forwardRef } from 'react';
import Project from "./Project";
import admindashboard from "../../../public/admin-dashboard.png";
import ecommerce from "../../../public/ecommerce.png";
import nutrtientTracker from "../../../public/nutrtient-tracker.png";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="px-4 md:px-12 flex flex-col gap-20 md:gap-36">
            <div className="flex flex-col gap-2 pb-8 md:pb-14">
                <h1 className="text-3xl md:text-5xl text-white">Featured Projects</h1>
                <h2 className="text-[#C7C7C7] text-sm md:text-base">Here are some of the selected projects that showcase my passion for front-end development.</h2>
            </div>
            <Project
                image={ecommerce}
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
                project={"https://e-commerce-tarekwfa0110s-projects.vercel.app/"}
            />
            <Project
                image={admindashboard}
                name={"Admin Dashboard"}
                year={2023}
                description={
                    <>
                        <p className="text-[#C7C7C7] mb-4 leading-relaxed">A comprehensive <span className="font-bold text-white">admin dashboard</span> built with React.</p>
                        <ol className="list-decimal pl-8 mb-4 text-[#C7C7C7]">
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Data Visualization</span> with Charts and Graphs.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">User Management</span> and Authentication.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Responsive Design</span> for All Devices.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Dark/Light Mode</span> Theme Toggle.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Real-time Updates</span>.</li>
                        </ol>
                        <p className="text-[#C7C7C7] leading-relaxed">Demonstrates proficiency in <span className="font-bold text-white">React development</span> and <span className="font-bold text-white">UI/UX design</span>.</p>
                    </>
                }
                github={"https://github.com/tarekwfa0110/Admin-Dashboard"}
                project={"https://admin-dashboard-tarekwfa0110s-projects.vercel.app/"}
            />
            <Project
                image={nutrtientTracker}
                name={"Nutrtient Tracker"}
                year={2024}
                description={
                    <>
                        <p className="text-[#C7C7C7] mb-4 leading-relaxed">A comprehensive <span className="font-bold text-white">nutrtient tracker</span> built with React.</p>
                        <ol className="list-decimal pl-8 mb-4 text-[#C7C7C7]">
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Data Visualization</span> with Charts and Graphs.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">User Management</span> and Authentication.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Responsive Design</span> for All Devices.</li>
                            <li className="mb-2 pl-2"><span className="font-semibold text-white">Dark/Light Mode</span> Theme Toggle.</li>
                        </ol>
                        <p className="text-[#C7C7C7] leading-relaxed">Highlights <span className="font-bold text-white">interactive web application development</span>.</p>
                    </>
                }
                github={"https://github.com/tarekwfa0110/NutrtientTracker"}
                project={"https://nutrtient-tracker.vercel.app/"}
            />

        </div>
    );
});

export default Projects;