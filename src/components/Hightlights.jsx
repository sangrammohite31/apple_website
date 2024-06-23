import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './videoCarousel'
function Hightlights() {
    useGSAP(()=>{
        gsap.to('#title',{opacity:1,y:0})
        gsap.to(".link",{opacity:1,y:0 ,duration:1,stagger:0.25})
       
    },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding  bg-zinc'>

        <div className='screen-max-width'>
            <div className='mb-12 w-full items-end justify-between md:flex'>
                <h1 id='title' className='section-heading'>
   Get the Hightlights
                </h1>
                <div className='gap-2 flex-wrap flex pr-40  items-end ' > <p className='link '>Watch the flim<img src={rightImg}/></p>
                <p className='link ml-2' >Watch The Envet<img src={watchImg} /></p></div>
            
            </div>

        </div>


        <VideoCarousel/>
    </section>
  )
}

export default Hightlights