import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Svg = () => {
  const stringRef = useRef(null);

  useGSAP(() => {
    var finalPath = "M 10 100 Q 400 100 790 100";
    var string = stringRef.current;

    const handleMouseMove = (event) => {
      const rect = string.getBoundingClientRect();
      const y = event.clientY - rect.top; // Calculate y relative to the element

      var path = `M 10 100 Q ${event.clientX} ${y} 790 100`;
      gsap.to("svg .path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
      });
    };

    function handleMouseLeave  () {
      gsap.to("svg .path", {
        attr: { d: "M 10 100 Q 400 100 790 100" },
        duration: 1.5,
        ease: "elastic.out(1,0.3)"
      });
    };

    if (string) {
      string.addEventListener('mousemove', handleMouseMove);
      string.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (string) {
        string.removeEventListener('mousemove', handleMouseMove);
        string.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="string-container w-[100%] h-[200px]" ref={stringRef}>
      <svg width="800" height="200">
        <path className="path" d="M 10 100 Q 400 100 790 100" stroke="white" fill="transparent" />
      </svg>
    </div>
  );
};

export default Svg;
