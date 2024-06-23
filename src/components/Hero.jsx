import React, { useEffect, useState } from 'react'
import { heroVideo ,smallHeroVideo} from '../utils'
import gsap from 'gsap'
import{useGSAP} from '@gsap/react'
function Hero() {

   const [videosrc,setVideoSrc] = useState(window.innerWidth<760? smallHeroVideo:heroVideo)
  
  const handleVideoSrcset = ()=>{
    if(window.innerWidth<760){

        setVideoSrc(smallHeroVideo)

    }else{
        setVideoSrc(heroVideo)
    }
    }
    useEffect(()=>{
         window.addEventListener('resize',handleVideoSrcset);
         return ()=>{
            window.removeEventListener('resize',handleVideoSrcset)
         }
    })
  
   useGSAP(()=>{
gsap.to('#hero',{opacity:1,delay:1.5})
gsap.fromTo('#cta' ,{opacity:0,delay:0.5,paddingLeft:0,paddingRight:0},{opacity:1,y:-50 ,delay:0.5,paddingLeft:200,paddingRight:200})
    },[])
  return (
   <section className='w-full nav-height
    bg-black'>

    <div className=' h-5/6 flex-center flex-col '>
    <p  id="hero" className='hero-title'>iphone 16 pro</p>
    <div className='md:w-10/12 w-9/12 '><video className=' pointer-events-none' autoPlay muted playsInline={true}  key={videosrc}> <source type='video/mp4' src={videosrc}/></video></div>
    </div>
    <div id='cta' className='flex flex-col item-center opacity-0 translate-y-20'>
    <a href='#hightlight' className='btn'>BUY </a>
    <p>From 4000/month 0r 70000</p>
    </div>
   </section>
  )
}

export default Hero