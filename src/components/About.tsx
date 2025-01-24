import { forwardRef } from "react";

interface AboutProps {
  id?: string; // Make 'id' optional
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ id }, ref) => {
  return (
    <div ref={ref} id={id} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="text-gray-400">
        I am a passionate developer with experience in building web applications using modern technologies.
      </p>
    </div>
  );
});

export default About;