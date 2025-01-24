import  { forwardRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaX } from 'react-icons/fa6';
import ContactForm from './ContactForm';

const Connect = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="text-white flex justify-between" id="contact">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-7xl font-bold">LET'S CONNECT</h1>
                <p>
                    Say hello at{' '}
                    <a href="mailto:tarekmohamedwfa@gmail.com" className="underline">
                        tarekmohamedwfa@gmail.com
                    </a>
                    <br />
                    For more info, here's my{' '}
                    <a href="https://www.linkedin.com/in/tarek-wfa/" className="underline" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </p>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/tarek-wfa/" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#D3E97A] bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center">
                            <FaLinkedinIn />
                        </button>
                    </a>
                    <a href="https://github.com/tarekwfa0110" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center">
                            <FaGithub />
                        </button>
                    </a>
                    <a href="https://x.com/TarekWfa/" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center">
                            <FaX />
                        </button>
                    </a>
                    <a href="https://instagram.com/tarek_wfa_" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center">
                            <FaInstagram />
                        </button>
                    </a>
                </div>
            </div>
            <ContactForm />

        </div>
    );
});

export default Connect;