// Open-Source page
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import Link from 'next/link';
// import Explore1 from "/About/Explore.png";
import { Box } from '@mui/material';


function Explore() {


  return (
    <>
    <div className="relative">
      <div className="flex lg:flex-row mt-5 sm:mt-0 box-border mx-w-screen justify-between items-center">
        <div className=" justify-between p-10 m-10  lg:w-[45%] space-y-5 sm:space-y-10">
          <h1 className="xl:text-5xl font-thin lg:text-4xl text-3xl my-4">
            <span className="font-semibold  text-5xl text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white text-5xl ">Web3 -startup Programs</span>
          </h1>
          <Link legacyBehavior href={"/Market"}>
            <button className=" bg-[#9010FF] text-[#FFFFFF] text-5xl mx-2 py-4 px-6 btn-green">Explore</button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-4/5 relative md:p-10">
          <img
            className="relative z-0 sm:block hidden"
            src="/About/Explore2.png"
            height={556} width={742}
            
            alt="H"
          />
          <img
            src="/About/Explore.png"
            className="scale-110 relative z-10 sm:hidden"
            alt="Ye"
          />

          <div className="green-gradient absolute z-0 lg:bottom-52 sm:bottom-24 bottom-16 lg:right-96"></div>
        </div>
      </div>
      <img
        className="lg:block absolute -left--5 xl:top-[19rem] top-[18.2rem] hidden w-80 xl:w-96"
        draggable="false"
        src="/About/hero_line.png"
        alt=""
      />
      <img
        className="absolute -left-1 md:w-72 sm:w-64 w-52 sm:top-[14.5rem] top-[13.6rem] lg:hidden"
        src="/About/Frame 3.svg"
        alt=""
      />
      
    </div>
    </>
  );
}

export default Explore;