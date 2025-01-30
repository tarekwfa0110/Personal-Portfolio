import { forwardRef } from "react";

interface AboutProps {
  id: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>((_, ref) => {
  return (
    <div className="p-6 md:p-24 pb-36 md:pb-72 text-white flex flex-col md:flex-row justify-between gap-12 md:gap-36" id="about" ref={ref}>
      <h1 className="text-4xl md:text-7xl font-bold">ABOUT ME</h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-white text-2xl md:text-3xl">
          I am a front-end developer based in Egypt with a Medical background.
        </h2>
        <p className="text-[#C7C7C7]">
          I am a front-end developer who likes to focus on accessibility when developing.
          Passionate and curious about solving problems. Currently, I'm exploring Reactjs and
          other web frameworks. When I am not programming, I enjoy playing football, chess,
          and LoL. Always learning more to improve my skills.
        </p>
        <button className="bg-[#D3E97A] text-black font-semibold p-3 rounded-md w-fit">
          More About Me
        </button>
      </div>
    </div>
  );
});

export default About;