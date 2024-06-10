'use client'

import "../globals.css";

import React, { useEffect, useRef, useState } from "react";

import Image from 'next/image'
import Link from 'next/link';
import logo from "../logo.png"
import styles from './Navbar.module.css';
import { useRouter } from "next/navigation"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollTop = scrollableRef.current ? scrollableRef.current.scrollTop : 0;
      setScrolled(scrollTop > window.innerHeight / 2);
    };

    const element = scrollableRef.current;

    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  if (!mounted) {
    return null;
  }
    
  return (
    <div className="bg-[#fff7e7]">
      <div className="navbar max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
        </Link>
        
        {/* Hamburger button for mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
        
        {/* Links for desktop and mobile */}
        <div className={`absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-[#fff7e7] p-5 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex z-50`}>
          <Link href="/recipe"><div className="block mt-4 md:mt-0 md:inline-block md:mr-4">Recipes</div></Link>
          <Link href="/about"><div className="block mt-4 md:mt-0 md:inline-block md:mr-4">About</div></Link>
          <Link href="/menu"><div className="block mt-4 md:mt-0 md:inline-block md:mr-4">Menu</div></Link>
          <Link href="/contact"><div className="block mt-4 md:mt-0 md:inline-block">Contact Us</div></Link>
        </div>
      </div>
    </div>
  )
}
