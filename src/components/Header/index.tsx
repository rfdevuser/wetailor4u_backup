"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBox from '../Assests/SearchBox';



const NavBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleNavLinkClick = () => {
    // Close the mobile menu when a nav link is clicked
    setNavbarOpen(false);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const toggleAboutSubMenu = () => {
    setAboutOpen(!aboutOpen);
  };

  const handleSidebarItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const usePathName = usePathname();

  return (
    <nav>
      <div className={` relative ${sticky ? 'sticky top-0 z-50' : ''}`}>
        {/* Top Section: Logo, Login, and Cart Buttons */}
        <div className='bg-gradient-to-br from-[#FACBEA] to-[#FFE4D6]'>
          
        <div className="flex justify-between items-center py-2">
          <div className="text-white text-xl font-bold flex items-center mx-auto">
            <Image
              src='/images/logo/logo-4u.png'
              alt='wetailor4u_logo'
              width={80}
              height={60}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white bg-[#e2e2e2] px-4 py-1 rounded-full hover:bg-[#fda4af]">
              <Image
                src='/images/icons/user.png'
                alt='cart_logo'
                width={30}
                height={30}
                loading='lazy'
              />
            </button>
            <button className="text-white bg-[#e2e2e2] px-2 py-1 rounded-full hover:bg-[#fda4af]">
              <Image
                src='/images/icons/add-to-cart.png'
                alt='cart_logo'
                width={30}
                height={30}
                loading='lazy'
              />
            </button>
          </div>
        </div>
        </div>
        {/* Search Box */}

        <div className='w-full border-t border-white' ></div>
        <div className='bg-transparent'>
        <div className='w-full flex justify-center text-black bg-transparent shadow-xl mt-1 mb-1'>
          <div className='lg:w-1/2 md:w-full sm:w-full'>
            <SearchBox />
          </div>
        </div>
        </div>
        {/* Bottom Section: Menu Items */}
        {/* Add your menu items here */}
      </div>
     
    </nav>
  );
};

export default NavBar;
