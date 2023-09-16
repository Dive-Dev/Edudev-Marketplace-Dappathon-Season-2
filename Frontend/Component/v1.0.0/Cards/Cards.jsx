import React from 'react'
import Image from "next/image";
import Link from "next/link";
import basic from "./images/basic.jpg"
import inter from "./images/inter.jpeg"
import adv from "./images/adv.jpg"

const Card = () => {

  return (
    <>
      <div id="card" className = "w-full p-5 overflow-x-hidden">
        <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center border-gray-500">
          <div className = "pb-8">
            <p className = "text-4xl font-bold text-center mb-5 text-white">Create, Learn and Earn</p>
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
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-10'>
            <button className = "flex justify-center px-4 py-2 mx-auto text-xl hover:rotate-2 delay-100 transition ease-in-out   text-center border hover:bg-gray-100 hover:shadow-md border-gray-500  rounded-md bg-green-500 text-cyan font-bold">
              <Link legacyBehavior href={"/Market"} className = "text-white font-extrabold">Click - To get into World of Education Dapp</Link>
            </button>
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