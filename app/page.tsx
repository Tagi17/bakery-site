import "./globals.css";

import Image from "next/legacy/image";
import Link from "next/link";
import crunchnw from "./crunchnw.png";
import mousse from "./mousse.png";
import styles from "./components/Navbar.module.css";

const Home = () => {
  return (
    <div>
      <div className="bg-[#fcf6e8] h-auto md:h-custom-height flex flex-col md:flex-row items-center justify-center relative p-4">
        <h1 className="text-black text-5xl text-center mb-4 md:mb-0 md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          Taste the Exceptional — Indulge in Our Unique Handcrafted Pastries!
        </h1>
        <div className="flex justify-center">
          <Image
            src={crunchnw}
            alt="cookie"
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>
      {/* <div className="bg-[#fcf6e8] relative flex items-center justify-center">
        <Image
          src={mousse}
          alt="food"
          width={400}
          height={400}
          className="relative z-10"
        />
        <h2 className="text-black text-3xl absolute z-20 text-center">
          BUY NOW
        </h2>
      </div> */}
      <div className="">
        <div className="max-w-7xl mx-auto px-5 flex flex-col items-center">
          <div className="text-black text-5xl text-center ">
            Limited Edition Summer Cookies
          </div>
          <div className="text-black text-3xl text-center pt-5 pb-5">
            Enjoy These Seasonal Summer Time Flavors:
          </div>
          <div className="text-black text-4xl text-center pt-4 pb-5 mb-5">
            PassionFruit Vanilla, Almond Peach Crumble, Rose Raspberry, Coconut
            Guava
          </div>
          <Link href="/order" passHref>
            <button className="button-83 text-2xl pt-6">Buy Now</button>
          </Link>
        </div>
      </div>
      <div className="  h-screen flex flex-col items-center justify-center p-5 text-center">
        <div className="text-black text-4xl">Welcome to</div>
        <div className="text-black text-6xl p-5 text-center">
          Celestine Crunch
        </div>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-black text-4xl pt-5 pb-5 mb-5 text-center">
            Born from a profound passion for desserts, Celestine Crunch is
            dedicated to offering unique and eclectic flavor combinations. We
            strive to create delightful culinary experiences, inviting everyone
            to explore the joy of our creations.
          </div>
        </div>
        <Link href="/about" passHref>
          <button className="button-83 text-2xl pt-6">Our Story</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
