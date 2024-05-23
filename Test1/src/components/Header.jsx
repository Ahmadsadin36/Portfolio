//// header of portfolio
import { navigation } from '../constants'
import { useState } from 'react'
import React from 'react'
import {useLocation} from 'react-router-dom'
import {disablePageScroll, enablePageScroll} from 'scroll-lock'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = useLocation()
//if home clicked the scrool to top
  if (pathname.hash === '#home') {
    window.scrollTo(0, 0)
  }
  // const handleClick = () => {
  //   setIsOpen(!isOpen)
  //   if (isOpen) {
  //     enablePageScroll()
  //   } else {
  //     disablePageScroll()
  //   }
  // } // function to handle click event // to open and close the navigation bar // to enable and disable the page scroll
  return (
    <header className=" w-full p-5  fixed top-0 left-0 z-50 shadow-md shadow-green-300 bg-white">
        <nav className=' flex items-center justify-center' >
          {navigation.map((Item) => (
            <a 
            key={Item.id}
            href = {Item.url}
            onClick={""}
            className={` h7 rounded-full transition-colors hover:bg-green-300 hover:text-white hover:-translate-y-2 p-2 ${Item.url === pathname.hash ? 'text-green-400' : 'text-black'}`}
            >
              {Item.title}
            </a>

          ))}
          
        </nav>

    </header>
  )
}

export default Header