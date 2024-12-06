function Nav() {
  return (
    <div className="flex justify-between items-center text-[#C7C7C7]">
        <h1 className="text-3xl">TAREK WFA</h1>
        <nav>
            <ul className="flex justify-between items-center gap-4">
                <li className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md">Work</li>
                <li className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md">About</li>
                <li className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md">Contact</li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav