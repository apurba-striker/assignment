import styles from "../style";
import { discount, robot } from "../assets";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Drone.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          SETUP ON THE GO. ANYWHERE. ANYTIME.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src="https://www.karmandrones.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpratham_cover.4940e871.png&w=3840&q=75" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      
      </div>
    </section>
  );
};

export default Hero;
