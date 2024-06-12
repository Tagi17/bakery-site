"use client";

import "../globals.css";

import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav className="max-w-6xl mx-auto px-4 py-6 items-center justify-between w-full">
        {/* Hamburger button for mobile, positioned left */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Website name centered */}
        <Link href="/">
          <div className="text-6xl font-bold cursor-pointer mx-auto flex-1 justify-center text-center tracking-widest">
            Celestius
          </div>
        </Link>

        {/* Invisible placeholder to balance the flex layout on mobile */}
        {/* <div className="md:hidden w-6 h-6"></div> */}

        {/* Invisible placeholder to balance the flex layout on mobile */}
        <div className="md:hidden w-6 h-6"></div>
        {/* Links for desktop and mobile */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center justify-center text-center absolute inset-0 md:relative md:flex md:flex-row md:space-x-4 shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-50`}
        >
          <Link href="/recipe">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Recipes
            </div>
          </Link>
          <Link href="/about">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              About
            </div>
          </Link>
          <Link href="/menu">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Menu
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Contact Us
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
