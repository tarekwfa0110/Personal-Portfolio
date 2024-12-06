import { FaGithub, FaInstagram, FaLinkedinIn, FaX } from "react-icons/fa6"

function Connect() {
    return (
        <div className="text-white flex justify-between">

            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-7xl font-bold">LET'S CONNECT</h1>
                <p>
                    Say hello at <a href="mailto:tarekmohamedwfa@gmail.com" className="underline">tarekmohamedwfa@gmail.com</a>
                    <br />
                    For more info, here's my <a href="https://www.linkedin.com/in/tarek-wfa/" className="underline" target="_blank">Resume</a>
                </p>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/tarek-wfa/" target="_blank"><button className="text-[#D3E97A] bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center"><FaLinkedinIn /></button></a>
                    <a href="https://github.com/tarekwfa0110" target="_blank"><button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center"><FaGithub /></button></a>
                    <a href="https://x.com/TarekWfa/" target="_blank"><button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center"><FaX /></button></a>
                    <a href="https://instagram.com/tarek_wfa_" target="_blank"><button className="text-[#D3E97A] bg-[#222222] p-2 rounded-full w-10 h-10 flex justify-center items-center"><FaInstagram /></button></a>
                </div>
            </div>

            <form action="" className="flex flex-col gap-4 w-1/2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" className=" bg-[#222222] rounded-md py-1" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" className=" rounded-md py-1 bg-[#222222]" />
                <label htmlFor="">Subject</label>
                <input type="text" placeholder="Subject" className=" rounded-md py-1 bg-[#222222]" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols={30} rows={5} placeholder="Message" className=" rounded-md py-1 bg-[#222222]"></textarea>
                <button className="bg-[#D3E97A] text-[#222222] font-semibold p-3 rounded-md">Send</button>
            </form>

        </div>
    )
}
export default Connect