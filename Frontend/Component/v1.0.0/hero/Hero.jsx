import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroIcon from "../../../public/About/In2.png";





// function Hero() {
//   return (
//     <div className="flex  items-center  flex-col md:flex-row justify-between p-5 m-10">
//       <div className="pt-20  pl-20">
//         <div className="font-Poppins pt-8 pb-5 text-[#9010FF] text-3xl font-semibold">A decentralized application</div>
//         <div className=" MyDiv1 font-Poppins text-[#FF5959] font-extrabold text-6xl whitespace-normal leading-[1.2]">
        
        // education, empowering<br />
        // creators, learners, and <br />
        // rewarding reviewers.
        // </div>
//         <div className="pt-5">
//           <button className="text-center font-Poppins font-semibold text-[#FFFFFF] bg-[#9010FF] px-10 py-4 rounded"><Link legacyBehavior href={"/Market"} className = "text-white font-extrabold">Learn more!</Link></button>
//         </div>
//       </div>
//       <div className="flex justify-center md:justify-end">
//         <Image src={heroIcon} height={456} width={642} alt="" />
//       </div>
//     </div>
//   );
// }

// export default Hero;


// import React from "react";
// import Image from "next/image";

// import heroIcon from "../../../public/About/In2.png";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:px-5 md:mx-5">
      <div className="md:pt-20 md:pl-20 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="font-Poppins md:pt-8 md:pb-5 text-[#9010FF] text-3xl font-semibold text-center md:text-left m-8 md:m-0">A decentralized application</div>
          <div className="font-Poppins text-[#FF5959] font-extrabold text-5xl whitespace-normal leading-[1.2] text-center md:text-left">
          education, empowering<br />
        creators, learners, and <br />
        rewarding reviewers.
        </div>
        
          <div className="pt-5 flex justify-center items-center md:justify-start">
            <button className="text-center font-Poppins font-semibold text-[#FFFFFF] bg-[#9010FF] px-10 py-4 mt-8 rounded"><Link legacyBehavior href={"/Market"} className = "text-white font-extrabold">Learn more!</Link></button>
          </div>
        </div>
      </div>

      <div className="md:mt-24 md:pl-0 pl-5 mt-8">
        <Image src={heroIcon} height={400} width={600} alt="" />
      </div>
    </div>
  );
}

export default Hero;