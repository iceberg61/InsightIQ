import React from "react";
import MobileBackground from "../assets/images/bg-intro-mobile.svg";
import Mockup from "../assets/images/image-mockups.png";
import DesktopBackground from "../assets/images/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden md:min-h-[90vh] lg:min-h-[100vh] flex items-center">
      {/* ========= TEXT + MOBILE ========= */}
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 relative z-20 w-full">
        
        {/* ===== TEXT ===== */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center md:min-h-[80vh]"> {/* ✅ centered vertically */}
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4 text-gray-600">
            Next generation digital banking
          </h1>
          <p className="text-gray-500 mb-6 max-w-md mx-auto md:mx-0">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-green-500 py-3 text-white rounded-full hover:opacity-80 hover:scale-105 transition-all duration-200 w-[70%] mx-auto md:w-auto md:mx-0 md:px-8">
            Request Invite
            </button>

        </div>

        {/* ===== MOBILE IMAGE ===== */}
        <div className="relative w-full min-h-[350px] mt-8 md:hidden">
          <img
            src={MobileBackground}
            alt="mobile background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img
            src={Mockup}
            alt="mockup"
            className="relative z-10 w-full mx-auto mt-[-4rem] max-w-[85%]"
          />
        </div>
      </div>

      {/* ========= DESKTOP IMAGES ========= */}
      <div className="hidden md:block absolute top-0 right-0 w-[60%] min-w-[600px] z-10 pointer-events-none">
        <img
          src={DesktopBackground}
          alt="desktop background"
          className="absolute top-[-12rem] right-[-10rem] w-[140%] object-contain"
        />
        <img
          src={Mockup}
          alt="mockup"
          className="absolute top-[-10rem] right-[-6rem] w-[75%] object-contain z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
