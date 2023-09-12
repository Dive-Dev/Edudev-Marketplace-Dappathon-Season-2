

import Hero from "./v1.0.0/hero/Hero";
import About from "./v1.0.0/about/About";
import Problem from "./v1.0.0/problemsolved/Problem";
import Footer from "./v1.0.0/footer/footer";

import HappyClient from "./v1.0.0/happyClient/HappyClient";
import Explore from "./v1.0.0/Explore/Explore";
import Card from "../Component/v1.0.0/Cards/Cards"


export default function Layout({ children }) {
  

  return (
    <>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        {/* Below commented component only works if Navbar is imported in _app.js || To be done so once ever component listed below is complete */}
        {/* <Navbar handleLogout={handleLogout}/> */} 

        {children}


        <Footer/>
    
    </>
  )
}
