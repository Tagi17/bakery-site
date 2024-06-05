import "./globals.css";

import Image from "next/image";
import crunchnw from "./crunchnw.png"
import mousse from "./mousse.png";
import styles from "./components/Navbar.module.css";

const Home = () => {
  return (
    <div>
      <div className="bg-[#f4f4e8] h-custom-height flex items-center justify-center relative">
        <h1 className="text-black text-4xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Celestine Crunch
        </h1>
        <div>
          <Image src={crunchnw} alt="cookie" width={400} height={400} className=""/>
        </div>
      </div>
      <div className="bg-[#fcecf0] relative flex items-center justify-center">
        <Image
          src={mousse}
          alt="food"
          width={400}
          height={400}
          className="relative z-10"
        />
        <h2 className="text-black text-3xl absolute z-20 text-center">
          2 BOXES OF 6 LARGE CANELÉS PURCHASED = THE 3RD FREE
        </h2>
      </div>
      <div className="bg-[#fceeec] h-screen flex items-center justify-center">
        <h1 className="text-black text-4xl">Woo</h1>
      </div>
    </div>
  );
};
export default Home;
