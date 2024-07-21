import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./App.css"
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Svg from './Svg'
import Textanim from './Textanim'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();
const App = () => {
  var first=useRef(null);
  const href=useRef(null);
  const crsr=useRef(null);
  const page2Ref = useRef(null);
  var t2=gsap.timeline();
  useGSAP(()=>{
   
    var tl=gsap.timeline();
    function loadinganime (){
     
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

    function logoanime(){
      var h1=document.querySelector(".navbar h2")
      var h1text=h1.textContent;
       var splittedText=h1text.split("");
      var halfvalue=Math.floor(splittedText.length/2)
      var clutter=""; 
      splittedText.forEach(function(elem,idx){
          if(idx<halfvalue){
               clutter+=`<span class="a">${elem}</span>`
          }else{
               clutter+=`<span class='b'>${elem}</span>`
          }
       })

       h1.innerHTML=clutter;

       tl.from("h2 .a",{
               y:80,
               opacity:0,
               duration:0.5,
               delay:0.3,
               stagger:0.15,
       })

       tl.from("h2 .b",{
               y:80,
               opacity:0,
               duration:0.5,
               stagger:-0.15,
       
       })
     
  
      tl.from("#page1 .navbar .menu",{
        x:100,
        opacity:0,
      })
      tl.from("#page1 .svg",{
        x:-100,
        opacity:0,
      })
      tl.from("#page1 .hero h1",{
        y:100,
        stagger:0.4,
        opacity:0,
      })



      tl.from("#page1 .textanime",{
        opacity:0,
      })
    }
    logoanime();

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
   
    <div ref={crsr} id="crsr" className="w-6 h-6 rounded-full bg-cyan-400 fixed pointer-events-none z-50 mix-blend-difference"></div>
    <div id="loader" className='loader py-[10vh] sm:py-[25vh] px-[5vw] sm:px-[10vw] h-[100%] w-[100%] fixed z-[999] bg-gradient-to-br from-black via-purple-900 to-indigo-900'>
    <div className="line mb-4">
      <div id="line1-part1" className="text-cyan-300 flex items-center justify-center text-3xl sm:text-4xl mb-2">
        <h5 ref={href} className="mr-2">00</h5>
        <h6>- 100 </h6>
      </div>
      <h1 className='text-[10vw] sm:text-[6.8vw] mx-[10px] sm:mx-[20px] font-semibold uppercase font text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'> Event</h1>
    </div>
    <div className="line mb-4">
      <h1 className='text-[10vw] sm:text-[6.8vw] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Crew Experience</h1>
    </div>
    <div className="line">
      <h1 className='text-[10vw] sm:text-[6.8vw] font-semibold uppercase pr-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>is loading right</h1>
      <h2 className="text-cyan-300 text-5xl sm:text-6xl mt-2">NOW</h2>
    </div>
  </div>
    
    <div id="main" className="bg-gradient-to-br from-black via-purple-900 to-indigo-900 h-[100vh] overflow-x-hidden text-white">
      <div id="page1" className='pb-[100px] h-[80vh]  md:h-[100vh]   w-[100vw] bg-[#151515] md:pb-10'>
        <div id="nav" className='flex navbar items-center justify-between py-[2.3vw] px-[4.5vw]'>
        <div className='page1 flex items-center text-[40px] text-cyan-300 justify-center'>
        <h2 className='overflow-hidden'>
        EventCrew
        </h2>
    
    </div>
          <div id="nav" className='flex menu items-center text-white justify-between'>
            <BiMenu onClick={()=>{t2.play();}} className='text-4xl cursor-pointer font-bold text-cyan-300'/>
          </div>
          
          <div id="full" className='h-[100%] text-[#ffffffac] px-[30px] py-[100px] w-[60%] md:w-[40%] absolute z-[99] bg-[#151515ba] top-0 right-[-60%] md:right-[-40%] backdrop-blur-xl'>
          <h4 className='md:text-5xl text-2xl font-bold mt-[50px] mb-[40px] text-cyan-300'>Work</h4>
          <h4 className='md:text-5xl text-2xl font-bold mt-[50px] mb-[40px] text-cyan-300'>About</h4>
          <h4 className='md:text-5xl text-2xl font-bold mt-[50px] mb-[40px] text-cyan-300'>Contact</h4>
          <h4 className='md:text-5xl text-2xl font-bold mt-[50px] mb-[40px] text-cyan-300'>Services</h4>
          <CgClose onClick={()=>{t2.reverse()}} className='icon cursor-pointer absolute top-[5%] text-3xl font-bold text-black rounded-full right-[10%] bg-cyan-300'/>
        </div>
        </div>
        <div className='svg absolute top-10  left-10'>
            <Svg/>
          </div>
       
        <div className="hero mt-10 ">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We Volunteer</h1>
        </div>
        <div className="hero">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Coordinate</h1>
        </div>
        <div className="hero">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">All/Clubs</h1>
        </div>
        <div className="hero">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Experience</h1>
        </div>

        <div className='textanime '> 
        <Textanim/>
        </div>
    
      </div>
     
      <div id="page2" >
     
      <div className='text-white'>
    hii
      </div>
     
      </div>
      
      <div id="page3"></div>
    </div>
    </>
  )
}

export default App