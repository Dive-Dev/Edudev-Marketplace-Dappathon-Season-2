
import Image from 'next/image';

import Navbar from "../Component/v1.0.0/Navbar/Navbar";
import Hero from "../Component/v1.0.0/hero/Hero";
import About from "../Component/v1.0.0/about/About";
import Problem from "../Component/v1.0.0/problemsolved/Problem";

import HappyClient from "../Component/v1.0.0/happyClient/HappyClient";
import Explore from "../Component/v1.0.0/Explore/Explore";

import Card from "../Component/v1.0.0/Cards/Cards"

// import Upload from "../Component/SpheronSdk/Spheron"
import Market from "./Market"

export default function Home(){
 
  return (
    <div className='overflow-x-hidden'>  
        <Navbar/>
        <Hero/>
        <About/> 
        <Explore/>
        <Problem/>
       < Card/>
        <HappyClient/> 

    </div>
  )
}
