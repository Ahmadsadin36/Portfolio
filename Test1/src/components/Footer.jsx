import React from 'react'
import { socials } from '../constants'

const Footer = () => {
  return (
    <footer className=' w-full p-10 flex flex-row shadow-xl shadow-black bg-slate-100'>
        <div className=' w-1/2 flex justify-center items-center flex-col'>
            <p className=' body-1 text-black'>© {new Date().getFullYear()}. All rights reserved</p>
            <p className=' body-2 text-green-400'>Developed by Ahmad Sadin</p>
        </div>
        <div className=' w-1/2 flex flex-col justify-center items-center'>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-14 h-14 bg-white shadow-2xl  rounded-full transition-all hover:border-2 hover:border-green-400 hover:shadow-2xl shadow-black"
            >
              <img src={item.iconUrl} width={25} height={25} alt={item.title} />
            </a>
          ))}
        </ul>
        </div>
    </footer>
    
  )
}

export default Footer