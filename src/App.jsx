import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./App.css"
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

gsap.registerPlugin();
const App = () => {
  const href=useRef(null);
  const crsr=useRef(null);
  var t2=gsap.timeline();
  useGSAP(()=>{
   
   
    function loadinganime (){
      var tl=gsap.timeline();
    var h5time=href.current;
    
    
    tl.from(".line h1",{
      y:180,
      stagger:0.4,
      duration:0.6,
      delay:0.5,
      
    })
    tl.from("#line1-part1",{
      opacity:0,
      onStart:()=>{
        
        var grow=0;
        setInterval(function(){
          if(grow<100){
            grow++;
            h5time.innerHTML=grow;
          }else{
            grow=100;
          }
        },20)
      }
    })

    tl.to(".line h2",{
      animationName:"anime",
      opacity:1,
    })

    tl.to("#loader",{
      opacity:0,
      duration:0.2,
      delay:2
    })
    tl.to("#loader",{
      display:"none",
    })
    tl.from("#page1",{
      opacity:0,
      y:2000,
      duration:0.4,
      ease:"power4.out",
      
    })
   
    }
    loadinganime();

    document.addEventListener("mousemove",function(dets){
      gsap.to(crsr.current,{
        left:dets.x,
        top:dets.y,
      })
    })

   

t2.to("#full",{
  right:0,
  duration:0.6,
})

t2.from("#full h4",{
  x:150,
  duration:0.5,
  stagger:0.1,
  opacity:0,
 
})

t2.from("#full .icon",{
  opacity:0,
})

t2.pause();
   
  })
  return (
    <>
    <div ref={crsr} id="crsr"></div>
   <div id="loader" className='loader py-[25vh] px-[10vw] h-[100%] w-[100%] fixed z-999 bg-[#0B0B0B]'>
      <div className="line ">
        <div id="line1-part1">
          <h5 ref={href}>00</h5>
          <h6>- 100 {" "} </h6>
        </div>
        <h1 className='text-[6.8vw] mx-[20px] font-semibold uppercase font'> Event</h1>
      </div>
      <div className="line ">
      <h1 className='text-[6.8vw] font-semibold uppercase'>Crew Experience</h1>
    </div>
    <div className="line ">
    <h1 className='text-[6.8vw] font-semibold uppercase pr-2'>is loading right</h1>
    <h2>NOW</h2>

  </div>
    </div>
  
    <div id="main">
      <div id="page1" >
        <div id="nav" className='flex items-center justify-between py-[2.3vw] px-[4.5vw]'>
          <div className="text-3xl logo ">Event Crew</div>
          <div id="nav" className='flex items-center text-white justify-between '>

              
            <BiMenu  onClick={()=>{
                t2.play();
            }} className='text-4xl cursor-pointer font-bold'/>
          </div>
          <div id="full" className=' h-[100%]  text-[#ffffffac] px-[30px] py-[100px] w-[40%] absolute bg-[#151515] top-0 right-[-40%] backdrop-blur-xl'>
          <h4 className='text-6xl font-bold mt-[50px] mb-[40px]'>Work</h4>
          <h4 className='text-6xl font-bold mb-[40px]'>About</h4>
          <h4 className='text-6xl font-bold mb-[40px]'>Services</h4>
          <h4 className='text-6xl font-bold mb-[40px]'>Contact</h4>
          <h4 className='text-6xl font-bold mb-[40px]'>About</h4>
    
          <CgClose onClick={()=>{t2.reverse()}} className='icon cursor-pointer absolute top-[5%] text-3xl font-bold text-black  rounded-full right-[10%] bg-white'/>
        </div>
        </div>
        <div className="hero">
          <h1>We Design</h1>
        </div>
        <div className="hero">
          <h1>Unique</h1>
        </div>
        <div className="hero">
          <h1>Web/Graphic</h1>
        </div>
        <div className="hero">
          <h1>Experience</h1>
        </div>

      </div>
      <div id="page2"></div>
      <div id="page3"></div>
    </div>
    </>
  )
}

export default App