'use client'

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  return (
    <div>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <nav className="navbar">
          <ul>
            <li className="active"></li>
            <li><Link href="#">Recipes</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Menu</Link></li>
             <Link href="/">
              <Image src="/logo.png" width={100} height={100} alt="logo" className=" max-h-full p-5" /> 
            </Link>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
