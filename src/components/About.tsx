import { forwardRef } from 'react';

interface AboutProps {
    id: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ id }, ref) => {
    return (
        <div className="p-24 pb-72 text-white flex justify-between gap-36" id="about" ref={ref}>
            <h1 className="text-7xl font-bold">ABOUT ME</h1>
            <div className="flex flex-col gap-6">
                <h2 className="text-white text-3xl">
                    I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                </h2>
                <p className="text-[#C7C7C7]">
                    I am a front-end developer based in Sydney looking for exciting opportunities. Has
                    Mechanical Engineering background. Likes to focus on accessibility when developing.
                    Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow
                    and a bit of Designing. While I am not programming, I enjoy playing football, photography
                    and playing Valorant. Learning more to improve skill.
                </p>
                <button className="bg-[#D3E97A] text-black font-semibold p-3 rounded-md w-fit">
                    More About Me
                </button>
            </div>
        </div>
    );
});

export default About;
