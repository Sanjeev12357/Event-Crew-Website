import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "./App.css"
const Textanim = () => {
    useGSAP(()=>{
       
       window.addEventListener("wheel",function(dets){
            if(dets.deltaY>0){
                gsap.to(".marque",{
                    transform:'translateX(-200%)',
                 
                    duration:3,
                    repeat:-1,
                    ease:'none',
                })
            }else{
                gsap.to(".marque",{
                    transform:'translateX(0%)',
                  
                    duration:3,
                    repeat:-1,
                    ease:'none',
                })

            }
       })

       var h1=document.querySelector("h1")
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

        gsap.from("h1 .a",{
                y:80,
                opacity:0,
                duration:0.8,
                delay:0.5,
                stagger:0.15,
        })

        gsap.from("h1 .b",{
                y:80,
                opacity:0,
                duration:0.8,
                delay:0.5,
                stagger:-0.15,
        
        })
      
    })
  return (
    <div >
        
        <div className='mt-[120px]'>
            <div className='move overflow-hidden text-[#151515] flex py-[1vw] px-0 bg-[#D8FF04] '>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1vw] md:px-[1.5vw] '>
                <h1 className='sm:text-[50px] md:text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1vw] md:px-[1.5vw] '>
                <h1 className='sm:text-[50px] md:text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1vw] md:px-[1.5vw] '>
                <h1 className='sm:text-[50px] md:text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1vw] md:px-[1.5vw] '>
                <h1 className='sm:text-[50px] md:text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1vw] md:px-[1.5vw] '>
                <h1 className='sm:text-[50px] md:text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
            </div>
        </div>
        <div className='page3 h-[100vh] w-[100%]'>
       
        </div>
    </div>
  )
}

export default Textanim