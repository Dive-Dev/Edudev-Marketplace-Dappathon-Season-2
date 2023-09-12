import styled from 'styled-components';
import Image from 'next/image';

import Navbar from "../Component/v1.0.0/Navbar/Navbar";
import Hero from "../Component/v1.0.0/hero/Hero";
import About from "../Component/v1.0.0/about/About";
import Problem from "../Component/v1.0.0/problemsolved/Problem";
import Head from 'next/head';
import HappyClient from "../Component/v1.0.0/happyClient/HappyClient";
import Explore from "../Component/v1.0.0/Explore/Explore";

import Card from "../Component/v1.0.0/Cards/Cards"

export default function Home(){
 
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/> 
        <Explore/>
        <Problem/>
       < Card/>
        <HappyClient/>  
    </>
  )
}
