import React from 'react';

interface NavProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  servicesRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Nav: React.FC<NavProps> = ({ scrollToSection, aboutRef, servicesRef, contactRef }) => {
  return (
    <div className="flex justify-between items-center text-[#C7C7C7]">
      <h1 className="text-3xl">TAREK WFA</h1>
      <nav>
        <ul className="flex justify-between items-center gap-4">
          <li
            className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md"
            onClick={() => scrollToSection(servicesRef)}
          >
            Work
          </li>
          <li
            className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:bg-[#C7C7C7] hover:text-black p-3 rounded-md"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
