import React from 'react'
import { check } from '../assets'

const ContactMe = () => {
  return (
    <section className=' container  md:w-9/12 md:mr-auto mt-15 mb-15 md:mt-0 flex justify-center items-center flex-col flex-wrap p-10 bg-slate-100' id='contact'>
        <h1 className=' text-center h1 w-full h-full'>Contact me</h1>
        <div className=' p-20 bg-slate-200'>
            <ul className=' flex flex-col justify-center items-center p-10 bg-slate-300'>
                <li className=' flex flex-col items-center justify-center m-2'>
                    <img src= {check} alt="" />
                    <h2 className=' h6'>Email</h2>
                    <a className=' body-1 transition hover:text-green-50 hover:translate-y-1' href="mailto:sadinn.ahmad@gmail.com">sadinn.ahmad@gmail.com</a>
                </li>
                <li className=' flex flex-col items-center justify-center m-2'>
                    <img src={check} alt="" />
                    <h2 className=' h6'>Linkedin</h2>
                    <a className=' body-1 transition hover:text-green-50 hover:translate-y-1'  href="https://www.linkedin.com/in/ahmad-sadin-94b781179/">linkedin.com/in/ahmadsadin33</a>
                </li>
                <li className=' flex flex-col items-center justify-center m-2'>
                    <img src={check} alt="" />
                    <h2 className=' h6'>Github</h2>
                    <a className=' body-1 transition hover:text-green-50 hover:translate-y-1' href="https://github.com/Ahmadsadin36">Ahmadsadin36</a>
                </li>


            </ul>
        </div>
    </section>
  )
}

export default ContactMe