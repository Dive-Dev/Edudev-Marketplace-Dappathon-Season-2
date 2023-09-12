import React from 'react'
import Image from "next/image";
import Link from "next/link";
import basic from "./images/basic.jpg"
import inter from "./images/inter.jpeg"
import adv from "./images/adv.jpg"

const Card = () => {

//   const navigation = [
//   { name: 'Beginner', href: '/beginner', current: false },
 
// ];

// function classNames(string[]) {
//   return classes.filter(Boolean).join(' ');
// }

  return (
    <>
      <div  className = "w-full py-5 overflow-x-hidden">
        <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center border-gray-500">
          <div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">Click and Learn</p>
            <p className = "text-xl font-bold text-center mb-5 text-white">Choose from the variety of Courses with new additions published every month.</p>
          </div>

          <div className = "grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div className = "shadow-black shadow-xl rounded-lg border-4 border-green-500">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = {basic} height="250" width="400" className = "w-full rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-sm text-justify font-bold mx-auto p-3 text-white">For those with little to no prior knowledge, Basic Courses acts as an introduction in any particular domain. These classes address fundamental skills with the goal of giving students the background knowledge required to confidently use technology. </p>
                </div>
                    
                <div className = "flex justify-between px-3 items-center">
                  <button className = "px-4 py-2 mb-3 text-xl rounded-md bg-green-500 text-white font-bold">
                    <Link legacyBehavior href={"/Market"}  className = "text-white font-extrabold">Basic Courses</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className = "shadow-black shadow-xl rounded-lg border-4 border-green-500">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = {inter} height="250" width="400" className = "w-full rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-sm text-justify font-bold mx-auto p-3 text-white">For those with basic knowledge of the domain, Intermediate Courses are good to go with. These classes address concepts with the goal of giving students further knowledge of the skill required to implement the technology in an efficient manner.</p>
                </div>
                    
                <div className = "flex">
                  <button className = "px-4 py-2 mb-3 ml-3 text-xl rounded-md bg-green-500 text-white font-bold">
                    <Link legacyBehavior href={"/Courses/Intermediate/IntermediateCourses"} target = "_blank" className = "text-white font-extrabold">Intermediate Courses</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className = "shadow-black shadow-xl rounded-lg border-4 border-green-500">
              <div className='overflow-hidden rounded-t-lg'>
                <Image src = {adv} height="250" width="400" className = "w-full rounded-t-md duration-200 hover:scale-110 hover:overflow-hidden" />
              </div>

              <div className = "bg-gradient-to-b from-black to-gray-800 text-center">
                <div>
                  <p className = "text-sm text-justify font-bold mx-auto p-3 text-white">For those who want to further enhance their knowledge and competence in a particular field should enrol in Advanced Courses. These programmes offer specialised skills for numerous industries and cater to a variety of interests and career goals. </p>
                </div>
                    
                <div className = "flex">
                  <button className = "px-4 py-2 mb-3 ml-3 text-xl rounded-md bg-green-500 text-white font-bold">
                    <Link legacyBehavior href={"/Courses/Advance/AdvanceCourses"} target = "_blank" className = "text-white font-extrabold">Advance Courses</Link>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex sm:justify-end px-32 justify-start sm:h-40 h-28 ml-8 sm:ml-0 sm:mr-40">
        <img src="/line1.png" alt="line3 " />
      </div>
    </>
  )
}

export default Card
