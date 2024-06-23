import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants/index'
function Navbar() {
  return (
    <header className='w-full py-5 sm:py-10 px-5 flex justify-between item-center'>

      <nav className='flex w-full screen-max-width'>
        <img src={appleImg}/>
        <div className='flex flex-1 justify-center max-sm:hidden '>
          {navLists.map((nav)=>{
           return <div key={nav} className=' px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          })}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg}/><img src={bagImg}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar