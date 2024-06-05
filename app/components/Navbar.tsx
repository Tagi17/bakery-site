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
      <div className="navbar">
        <Link href="/recipe" className="">Recipes</Link>
        <Link href="/about" className="">About</Link>
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="logo"  />
          </Link>
        <Link href="/menu" className="">Menu</Link>
        <Link href="/contact" className="">Contact Us</Link>
      </div>
    </div>
  )
}
