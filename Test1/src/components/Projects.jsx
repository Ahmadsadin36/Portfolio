import React from 'react'
import Button from './Button'
import Tagline from './Tagline'
import { check2, loading1 } from '../assets'
import { roadmap } from '../constants'

const Projects = () => {
  return (
    <>
<div className="container md:pb-10" id='projects'>
<h1 className=' h1 block w-full text-center p-10'>Projects</h1>

<div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
  {roadmap.map((item) => {
    const status = item.status === "done" ? "Done" : "In progress";

    return (
      <div
        className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
          item.colorful ? " bg-green-300 border-2" : " bg-slate-600"
        }`}
        key={item.id}
      >
        <div className="relative p-8 bg-slate-600 rounded-[2.4375rem] overflow-hidden xl:p-15">

          <div className="relative z-1">
            <div className="flex items-center justify-between max-w-[27rem] md:mb-20 border-b-2 border-green-300 pb-1">
              <Tagline>{item.date}</Tagline>

              <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                <img
                  className=""
                  src={item.status === "done" ? check2 : loading1}
                  width={16}
                  height={16}
                  alt={status}
                />
                <div className="tagline">{status}</div>
              </div>
            </div>

            <div className=" flex justify-center items-start mt-5 mb-5">
              <img
                className=" w-2/3  shadow-lg shadow-black rounded-3xl"
                src={item.imageUrl}
                width={628}
                height={426}
                alt={item.title}
              />
            </div>
            <h4 className="h5 mb-4 text-white">{item.title}</h4>
            <p className="body-2 text-green-300">{item.text}</p>
          </div>
        </div>
      </div>
    );
  })}

</div>
</div>
    
    
    
    
    
    </>
  )
}

export default Projects