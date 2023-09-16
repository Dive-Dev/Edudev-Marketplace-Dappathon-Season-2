// import { useState } from "react";

// import { Web3Button } from '@web3modal/react';

// function NavLink({ to, children }) {
//   return (
//     <a href={to} className={`mx-4`}>
//       {children}
//     </a>
//   );
// }

// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
//         open ? "-translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out bg-gray filter drop-shadow-md `}
//     >
//       <div className="flex items-center justify-center filter drop-shadow-md bg-gray h-20">
//         {/* logo container */}
//         <a className="styles.logo text-xl font-semibold" href="/">
//           OS.Dev
//         </a>
//       </div>
//       <div className="flex flex-col ml-4">
//         <a
//           className="text-xl font-medium my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           About
//         </a>
//         <a
//           className="text-xl font-medium my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Market Place
//         </a>
//         {/* <a
//           className="text-xl font-normal my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Resources
//         </a>
//         <a
//           className="text-xl font-normal my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Blog
//         </a>
//         <a
//           className="text-xl font-normal my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Communities
//         </a> */}
//         <a
//           className="text-xl font-normal my-4"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             LOGIN
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="flex justify-between sticky Navbar top-0 z-10 filter drop-shadow-2xl bg-white px-4 py-4 h-20 items-center">
//       <MobileNav open={open} setOpen={setOpen} />
//       <div className="flex items-center">
//         <a className="text-4xl tracking-widest font-semibold" href="/">
//           {" "}
//           <h2>
//             <span className="text-blue-800">EDU.d</span><span className="text-white">App</span>
//           </h2>
//         </a>
//       </div>

//       <div className="hidden md:flex text-9010FF text-1xl nav-item font-semibold font-serif justify-end items-center ">
//         <NavLink to="/">HOME</NavLink>
//         <NavLink to="#About">ABOUT US</NavLink>
//         <NavLink to="#card">MARKET PLACE</NavLink>
       
//       </div>

//       <div className="flex justify-end items-center">
//       <Web3Button balance="show" icon="hide" label="Connect Wallet" />

//         <div
//           className="z-50 flex relative w-8 ml-5 h-6 flex-col justify-between items-center md:hidden"
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           {/* hamburger button */}
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "rotate-45 translate-y-3.5" : ""
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
//               open ? "w-0" : "w-full"
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "-rotate-45 -translate-y-3.5" : ""
//             }`}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }









import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= -1) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Market",
        },
      
    ]
    return (
        <>
            <div className = {navBar ? 'navbar active' : 'navbar'}>
                <h1 className = "text-3xl  ml-2 text-white font-semibold max-sm:text-xl max-sm:ml-0 max-sm:mr-3"><h2>
            <span className="text-blue-800">EDU.d</span><span className="text-white">App</span>
          </h2></h1>

                <ul className = "hidden md:flex text-white">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 text-2xl  text-[#9010FF] cursor-pointer font-medium md:hover:scale-125 duration-300 capitalize">
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                
                <Web3Button balance="show" icon="hide" label="Connect Wallet" /> 

                <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-white md:hidden">
                    {
                        nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
                    }
                </div>

                {nav && (
                    <ul className = "flex flex-col justify-center items-center text-white scroll-smooth  absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b] max-sm:px-1">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer scroll-smooth py-6 text-2xl capitalize">
                            <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{link}</Link>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar