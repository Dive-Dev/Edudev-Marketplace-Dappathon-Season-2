import React from 'react'

import data from "../../../Component/Data/Intermediate/data"

// The image folder is placed inside the public/courses ... Adviced to place all  the image folder there only

function Courses() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-8 px-5'>
        {data.map(card => (
          <div className="shadow-lg rounded-lg">
            <img className='rounded-t-lg' src={card.img} alt=""/>
            <div className="p-5">
              <h3 className='text-3xl font-bold text-slate-700 mb-3'>{card.title}</h3>
              <p className="text-lg font-normal text-gray-600 text-justify">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Courses
