import "./globals.css";

import Image from "next/image";
import { Navbar } from "./components/Navbar";
import styles from "./components/Navbar.module.css";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#ff9898] h-screen flex items-center justify-center relative">
        <h1 className="text-white text-4xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Special Mothers Day Offer
        </h1>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/promo.png"
          alt="Promo Image"
          width={500}
          height={500}
          className="relative z-10"
        />
        <h2 className="text-white text-3xl absolute z-20 text-center">
          2 BOXES OF 6 LARGE CANELÉS PURCHASED = THE 3RD FREE
        </h2>
      </div>
      <div className="bg-[#FFFDD0] h-screen flex items-center justify-center">
        <h1 className="text-black text-4xl">Woo</h1>
      </div>
    </div>
  );
};
export default Home;
