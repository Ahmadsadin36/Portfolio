import React from 'react'
import { abouts } from '../constants'
import { abouts2 } from '../constants'

const About = () => {
  return (
    <section className=' container mr-auto p-2 border-black mt-24' id='about'>
      <h2 className=' h1 text-center '>About me</h2>
      <div className=' flex flex-wrap flex-col items-center justify-center md:justify-center md:items-start md:flex-row gap-5 mt-5'>
        <h1 className=' h4 block w-full text-center text-slate-600'>Educational background</h1>
        {abouts.map((about) => {
          return (
            <>
            <div key={about.id} className='flex flex-col items-center justify-center p-4  bg-slate-500 rounded-3xl text-white md:w-1/3 border-green-300 border-2'>
              <div className=' bg-slate-600 rounded-md shadow-lg shadow-black flex flex-col items-center justify-center p-2'>
              <h3 className=' h5 text-center mb-2'>{about.subtitle}</h3>
              <h4 className=' body-2'>{about.subsubtitle}</h4>
              <h5 className=' body-2'>{about.fieldOfStudy}</h5>
              <span className=' text-xs font-extralight mb-2'>{about.duration}</span>
              <h3 className=' h6 text-green-300 inline p-2 rounded-full shadow-2xl shadow-slate-100 m-2'>Thesis</h3>
              <h6 className=' text-center body-2'>{about.thesis}</h6>
              <h3 className=' h6 text-green-300 inline p-2 rounded-full shadow-2xl shadow-slate-100 m-2'>Grades</h3>
              <h6 className=' body-2'>{about.thesisGrade}</h6>
              <h6 className=' body-2'>{about.internshipGrade}</h6>
              <h3 className=' h6 text-green-300 inline p-2 rounded-full shadow-2xl shadow-slate-100 mt-10 mb-2'>Thesis Description</h3>
              <p className=' text-center body-2'>{about.thesisContent}</p>
              </div>
            </div>
            </>
          )
        })}
        <h1 className=' h4 block w-full text-center text-slate-600'>Work Experience </h1>
        {abouts2.map((about) => {
          return (
            <>
            <div key={about.id} className='flex flex-col items-center justify-center bg-green-300 p-4 rounded-3xl text-white border-2 border-slate-500 md:w-2/5'>
              <div className=' bg-slate-600 rounded-md p-2 flex flex-col items-center justify-center shadow-lg shadow-black'>
              <h3 className=' h5 text-center'>{about.subtitle}</h3>
              <h4 className=' h6 '>{about.subsubtitle}</h4>
              <span className=' text-xs font-extralight'>{about.duration}</span>
              <h3 className=' h6 text-slate-600 inline p-2 rounded-full shadow-2xl shadow-slate-100 m-1 bg-green-300 mt-10 mb-'>Job Description</h3>
              <p className='text-center body-2'>{about.jobDescription}</p>
              </div>
            </div>
            </>
          )
        })}

      </div>


    </section>
  )
}

export default About