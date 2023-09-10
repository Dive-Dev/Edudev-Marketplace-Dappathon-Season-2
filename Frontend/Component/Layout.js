
import Navbar from "./v1.0.0/Navbar/Navbar";
import Hero from "./v1.0.0/hero/Hero";
import About from "./v1.0.0/about/About";
import Problem from "./v1.0.0/problemsolved/Problem";
import Footer from "./v1.0.0/footer/footer";

import HappyClient from "./v1.0.0/happyClient/HappyClient";
import Explore from "./v1.0.0/Explore/Explore";

import Info from "./v1.0.0/Info/info";


export default function Layout({ children }) {

  console.log(children);
  return (
    <>
    <div>
      <div >
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </div>
        {/* Below commented component only works if Navbar is imported in _app.js || To be done so once ever component listed below is complete */}
        {/* <Navbar handleLogout={handleLogout}/> */} 
        <Navbar />

        <Hero/>   
        <About/> 
        <Explore/>
        <Problem/>
        <HappyClient/>


        <Footer/>
      </div>
    </>
  )
}
