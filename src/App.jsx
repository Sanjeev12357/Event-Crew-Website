import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./App.css"
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollSmoother} from 'scroll-smooth'
import Svg from './Svg'
import Lenis from 'lenis';
import Textanim from './Textanim'
import Intro from './Intro'
import Footer from './Footer1'




gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
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
               duration:0.2,
               delay:0.1,
               stagger:0.1,
       })

       tl.from("h2 .b",{
               y:80,
               opacity:0,
               duration:0.2,
               stagger:-0.1,
       
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
        stagger:0.2,
        opacity:0,
      })

      tl.from("#page1 .hero2 h1",{
        y:100,
        stagger:0.2,
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

function scrolltrigger(){
  var allH1=document.querySelectorAll("#page2 h1");
  allH1.forEach(function(elem){
    var h1Text=elem.textContent;
    var splitedText=h1Text.split("");
      var clutter="";
    splitedText.map(function(e){
    
      console.log(e);
      clutter+=`<span>${e === " " ? "&nbsp;" : e}</span>`;
    })
    //console.log(clutter);
    elem.innerHTML=clutter;
  })
  gsap.to("#page2 h1 span",{
    color:"#434B34",
    stagger:0.1,
    scrollTrigger:{
      trigger:"#page2 h1",
      scroller:"body",
     
      start:"top 60%",
      end:"top 0%",
      scrub:1,
      onEnter: () => {
        gsap.to("#page2", { backgroundColor: "#fff" }); // Change to your desired color
      },
      onLeaveBack: () => {
        gsap.to("#page2", { backgroundColor: "#151515" }); // Revert to the original color if needed
      }

    }
  })
}
scrolltrigger();


function footertrigger(){
  tl.from('.footer-content', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.footer-content',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.handles', {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.handles',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.footer-creator', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.footer-creator',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    },
  });
}





   
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <div ref={crsr} id="crsr" className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-cyan-400 fixed pointer-events-none z-50 mix-blend-difference"></div>
      <div id="loader" className='loader flex flex-col justify-center items-center h-screen w-full fixed z-[999] bg-gradient-to-br from-black via-purple-900 to-indigo-900'>
      <div className="line mb-2 md:mb-4">
        <div id="line1-part1" className="text-cyan-300 flex items-center justify-center text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2">
          <h5 ref={href} className="mr-2">00</h5>
          <h6>- 100 </h6>
        </div>
        <h1 className='text-[8vw] sm:text-[6vw] md:text-[6.8vw] mx-[5px] sm:mx-[10px] md:mx-[20px] font-semibold uppercase font text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Event</h1>
      </div>
      <div className="line mb-2 md:mb-4">
        <h1 className='text-[8vw] sm:text-[6vw] md:text-[6.8vw] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Crew Experience</h1>
      </div>
      <div className="line">
        <h1 className='text-[8vw] sm:text-[6vw] md:text-[6.8vw] font-semibold uppercase pr-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>is loading right</h1>
        <h2 className="text-cyan-300 text-3xl sm:text-4xl md:text-5xl mt-1 md:mt-2">NOW</h2>
      </div>
    </div>
    
    
      <div id="main" className=" min-h-screen overflow-x-hidden text-white">
        <div id="page1" className='pb-10 md:pb-[100px] min-h-screen w-full bg-[#151515]'>
          <div id="nav" className='flex navbar items-center justify-between py-4 md:py-[2.3vw] px-4 md:px-[4.5vw]'>
            <div className='page1 flex items-center text-2xl md:text-[40px] text-cyan-300 justify-center'>
              <h2 className='overflow-hidden'>
                EventCrew
              </h2>
            </div>
            <div id="nav" className='flex menu items-center text-white justify-between'>
              <BiMenu onClick={()=>{t2.play();}} className='text-3xl md:text-4xl cursor-pointer font-bold text-cyan-300'/>
            </div>
            <div id="full" className='h-full text-[#ffffffac] px-4 md:px-[30px] py-10 md:py-[100px] w-[80%] md:w-[60%] lg:w-[40%] absolute z-[99] bg-[#151515ba] top-0 right-[-80%] md:right-[-60%] lg:right-[-40%] backdrop-blur-xl'>
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-[30px] mb-[30px] text-cyan-300'>Work</h4>
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-[30px] mb-[30px] text-cyan-300'>About</h4>
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-[30px] mb-[30px] text-cyan-300'>Contact</h4>
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-[30px] mb-[30px] text-cyan-300'>Services</h4>
              <CgClose onClick={()=>{t2.reverse()}} className='icon cursor-pointer absolute top-[5%] text-2xl md:text-3xl font-bold text-black rounded-full right-[10%] bg-cyan-300'/>
            </div>
          </div>
          <div className='svg absolute top-[50px] mb-10 left-4 md:top-10 md:left-10'>
            <Svg/>
          </div>
       
          <div className="hero mt-[100px] md:mt-12 px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We Volunteer</h1>
          </div>
          <div className="hero px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Coordinate</h1>
          </div>
          <div className="hero px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">All/Clubs</h1>
          </div>
          <div className="hero mb-16 px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Experience</h1>
          </div>


          <div className="hero2 px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hackathons</h1>
          </div>
          <div className="hero2 px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Dancing</h1>
          </div>
          <div className="hero2 px-4">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Coding</h1>
          </div>
         
        </div>
     
        <div id="page2">
        <h1 ref={first} id="first"> This is the only club  </h1>
        <h1>that offers you to participate </h1>
        <h1>in any event across the university </h1>
        <h1> providing invaluable experience </h1>
        <h1> and the chance to shine in the various </h1>
        <h1>roles according to your interest</h1>
        <h1> and skills</h1>

        
        </div>
      
        <div id="page3">
       
        </div>

        
       <Intro/>
       <Footer/>
      
       
        
       
        
      </div>
    </>
  )
}

export default App