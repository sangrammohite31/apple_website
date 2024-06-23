import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { Modeview } from './Modeview'
import { useState } from 'react'
function Model() {
    const [size, setSize] = useState('small');
    const [Model, setModel] = useState({
        title:"iphone 15  pro"
    })
    useGSAP(()=>{
        gsap.to(".neww",{y:0,fontSize:30,opacity:1,stagger:{amount:1.25}})
    },[])
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading neww ' >Take a closer look</h1>
           <div className='flex flex-1 m-5 w-full h-[72vh] md:h-[90vh] overflow-hidden'>
            <Modeview/>


           </div>
        </div>
    </section>
  )
}

export default Model