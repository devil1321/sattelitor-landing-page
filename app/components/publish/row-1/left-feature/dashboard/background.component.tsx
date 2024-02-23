'use client'
import React,{ useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger,MotionPathPlugin } from 'gsap/all'

const Background:React.FC<{children:React.ReactNode}> = ({children}) => {

  const [isSet,setIsSet] = useState<boolean>(false)
  const [tl,setTl] = useState<any>(null)

  const handleInitAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(MotionPathPlugin)
    setTl(gsap.timeline())
    setIsSet(true)
  }

  const handleAnimateCircles = () =>{
    const circles = document.querySelectorAll('.publish-dashboard-background-circles path') 
    gsap.fromTo(circles,{ opacity:0 },{ opacity:1,duration:0.5,stagger:{
        amount:2,
        grid:[4,4],
        from:'start'
    },
    scrollTrigger:{
            trigger:'.publish-dashboard-background',
        }
    })
  }

  const handleAnimatePaths = () =>{
    tl.fromTo('.publish-dashboard-background-circle-path',{ opacity:0 },{ opacity:1,duration:2,scrollTrigger:{
        trigger:'.publish-dashboard-background',
        scrub:6
    }})
    tl.fromTo('.publish-dashboard-background-rounded-path-3',{ opacity:0 },{ opacity:1,duration:2,scrollTrigger:{
        trigger:'.publish-dashboard-background',
        scrub:6
    }})
    tl.fromTo('.publish-dashboard-background-rounded-path-2',{ opacity:0 },{ opacity:1,duration:2,scrollTrigger:{
        trigger:'.publish-dashboard-background',
        scrub:6
    }})
    tl.fromTo('.publish-dashboard-background-rounded-path-1',{ opacity:0 },{ opacity:1,duration:2,scrollTrigger:{
        trigger:'.publish-dashboard-background',
        scrub:6
    }})
  }

  const handleMotionPaths = () =>{
    gsap.to('.publish-dashboard-background-line-1',{
        duration:5,
        repeat:-1,
        ease:'linear',
        motionPath: {
            path: "#path-1",
            align: "#path-1",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0,
            end: 1
          },
    })
    gsap.to('.publish-dashboard-background-line-2',{
        duration:5,
        repeat:-1,
        ease:'linear',
        motionPath: {
            path: "#path-2",
            align: "#path-2",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0.25,
            end: 1.25
          },
    })
    gsap.to('.publish-dashboard-background-line-3',{
        duration:5,
        repeat:-1,
        ease:'linear',
        motionPath: {
            path: "#path-3",
            align: "#path-3",
            alignOrigin: [0.5, 0.5],
            autoRotate: 180,
            start: 0.50,
            end: 1.50
          },
    })
    gsap.to('.publish-dashboard-background-line-4',{
        duration:5,
        repeat:-1,
        ease:'linear',
        morphSVG:'#path-4',
        motionPath: {
            path: "#path-4",
            align: "#path-4",
            alignOrigin: [0.5, 0.5],
            autoRotate: 180,
            start: -0.75,
            end: -1.75
          },
    })
  }
  
  useEffect(()=>{
      handleInitAnimate()
    },[])
    
  useEffect(()=>{
    if(isSet){
        handleAnimateCircles()
        handleAnimatePaths()    
        handleMotionPaths()
    }
  },[isSet])
  return (
    <div className="publish-dashboard-background my-12 relative top-0 left-0 translate-y-20">
      <svg className='publish-dashboard-background-circles absolute left-0 -top-[150px] md:left-10' width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M77.1898 11.2389C80.1212 11.2389 82.4976 8.86255 82.4976 5.9312C82.4976 2.99986 80.1212 0.623535 77.1898 0.623535C74.2584 0.623535 71.882 2.99986 71.882 5.9312C71.882 8.86255 74.2584 11.2389 77.1898 11.2389Z" fill="#7B7B7B"/>
                <path d="M77.1898 34.9469C80.1212 34.9469 82.4976 32.5706 82.4976 29.6392C82.4976 26.7079 80.1212 24.3315 77.1898 24.3315C74.2584 24.3315 71.882 26.7079 71.882 29.6392C71.882 32.5706 74.2584 34.9469 77.1898 34.9469Z" fill="#757575"/>
                <path d="M77.1898 58.6539C80.1212 58.6539 82.4976 56.2776 82.4976 53.3462C82.4976 50.4149 80.1212 48.0386 77.1898 48.0386C74.2584 48.0386 71.882 50.4149 71.882 53.3462C71.882 56.2776 74.2584 58.6539 77.1898 58.6539Z" fill="#797979"/>
                <path d="M77.1898 82.3614C80.1212 82.3614 82.4976 79.9851 82.4976 77.0538C82.4976 74.1224 80.1212 71.7461 77.1898 71.7461C74.2584 71.7461 71.882 74.1224 71.882 77.0538C71.882 79.9851 74.2584 82.3614 77.1898 82.3614Z" fill="#646464"/>
                <path d="M53.482 11.2389C56.4135 11.2389 58.7898 8.86255 58.7898 5.9312C58.7898 2.99986 56.4135 0.623535 53.482 0.623535C50.5506 0.623535 48.1742 2.99986 48.1742 5.9312C48.1742 8.86255 50.5506 11.2389 53.482 11.2389Z" fill="#ABABAB"/>
                <path d="M53.482 34.9469C56.4135 34.9469 58.7898 32.5706 58.7898 29.6392C58.7898 26.7079 56.4135 24.3315 53.482 24.3315C50.5506 24.3315 48.1742 26.7079 48.1742 29.6392C48.1742 32.5706 50.5506 34.9469 53.482 34.9469Z" fill="#AEAEAE"/>
                <path d="M53.482 58.6539C56.4135 58.6539 58.7898 56.2776 58.7898 53.3462C58.7898 50.4149 56.4135 48.0386 53.482 48.0386C50.5506 48.0386 48.1742 50.4149 48.1742 53.3462C48.1742 56.2776 50.5506 58.6539 53.482 58.6539Z" fill="#525252"/>
                <path d="M53.482 82.3614C56.4135 82.3614 58.7898 79.9851 58.7898 77.0538C58.7898 74.1224 56.4135 71.7461 53.482 71.7461C50.5506 71.7461 48.1742 74.1224 48.1742 77.0538C48.1742 79.9851 50.5506 82.3614 53.482 82.3614Z" fill="#C8C8C8"/>
                <path d="M29.7747 11.2389C32.7061 11.2389 35.0825 8.86255 35.0825 5.9312C35.0825 2.99986 32.7061 0.623535 29.7747 0.623535C26.8432 0.623535 24.4669 2.99986 24.4669 5.9312C24.4669 8.86255 26.8432 11.2389 29.7747 11.2389Z" fill="#D7D7D7"/>
                <path d="M29.7747 34.9469C32.7061 34.9469 35.0825 32.5706 35.0825 29.6392C35.0825 26.7079 32.7061 24.3315 29.7747 24.3315C26.8432 24.3315 24.4669 26.7079 24.4669 29.6392C24.4669 32.5706 26.8432 34.9469 29.7747 34.9469Z" fill="#B6B6B6"/>
                <path d="M29.7747 58.6539C32.7061 58.6539 35.0825 56.2776 35.0825 53.3462C35.0825 50.4149 32.7061 48.0386 29.7747 48.0386C26.8432 48.0386 24.4669 50.4149 24.4669 53.3462C24.4669 56.2776 26.8432 58.6539 29.7747 58.6539Z" fill="#6B6B6B"/>
                <path d="M29.7747 82.3614C32.7061 82.3614 35.0825 79.9851 35.0825 77.0538C35.0825 74.1224 32.7061 71.7461 29.7747 71.7461C26.8432 71.7461 24.4669 74.1224 24.4669 77.0538C24.4669 79.9851 26.8432 82.3614 29.7747 82.3614Z" fill="#646464"/>
                <path d="M6.06727 11.2389C8.99869 11.2389 11.3751 8.86255 11.3751 5.9312C11.3751 2.99986 8.99869 0.623535 6.06727 0.623535C3.13584 0.623535 0.75946 2.99986 0.75946 5.9312C0.75946 8.86255 3.13584 11.2389 6.06727 11.2389Z" fill="#C7C7C7"/>
                <path d="M6.06727 34.9469C8.99869 34.9469 11.3751 32.5706 11.3751 29.6392C11.3751 26.7079 8.99869 24.3315 6.06727 24.3315C3.13584 24.3315 0.75946 26.7079 0.75946 29.6392C0.75946 32.5706 3.13584 34.9469 6.06727 34.9469Z" fill="#D1D1D1"/>
                <path d="M6.06727 58.6539C8.99869 58.6539 11.3751 56.2776 11.3751 53.3462C11.3751 50.4149 8.99869 48.0386 6.06727 48.0386C3.13584 48.0386 0.75946 50.4149 0.75946 53.3462C0.75946 56.2776 3.13584 58.6539 6.06727 58.6539Z" fill="#979797"/>
                <path d="M6.06727 82.3614C8.99869 82.3614 11.3751 79.9851 11.3751 77.0538C11.3751 74.1224 8.99869 71.7461 6.06727 71.7461C3.13584 71.7461 0.75946 74.1224 0.75946 77.0538C0.75946 79.9851 3.13584 82.3614 6.06727 82.3614Z" fill="#5A5A5A"/>
            </g>
        </svg>
        <svg className='publish-dashboard-background-rounded-path-1 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' width="619" height="208" viewBox="0 0 619 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path-1" d="M605.681 1.38086H13.0834C6.30462 1.38086 0.809296 6.87619 0.809296 13.655V194.537C0.809296 201.316 6.30462 206.811 13.0834 206.811H605.681C612.46 206.811 617.955 201.316 617.955 194.537V13.655C617.955 6.87619 612.46 1.38086 605.681 1.38086Z" stroke="white" strokeOpacity="0.05" strokeWidth="0.995833"/>
        </svg>
        <svg className='publish-dashboard-background-rounded-path-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' width="557" height="234" viewBox="0 0 557 234" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path-2" d="M543.759 1.46094H13.0054C6.22659 1.46094 0.731262 6.95627 0.731262 13.7351V220.458C0.731262 227.236 6.22659 232.732 13.0054 232.732H543.759C550.537 232.732 556.033 227.236 556.033 220.458V13.7351C556.033 6.95627 550.537 1.46094 543.759 1.46094Z" stroke="white" strokeOpacity="0.05" strokeWidth="0.995833"/>
        </svg>
        <svg className='publish-dashboard-background-rounded-path-3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' width="495" height="259" viewBox="0 0 495 259" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path-3" d="M481.836 0.540527H12.9271C6.14828 0.540527 0.652954 6.03586 0.652954 12.8147V245.378C0.652954 252.157 6.14828 257.652 12.9271 257.652H481.836C488.615 257.652 494.11 252.157 494.11 245.378V12.8147C494.11 6.03586 488.615 0.540527 481.836 0.540527Z" stroke="white" strokeOpacity="0.05" strokeWidth="0.995833"/>
        </svg>
        <svg className='publish-dashboard-background-circle-path absolute top-1/2 left-1/2 -translate-x-1/2' width="619" height="134" viewBox="0 0 619 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path-4" d="M618 67.0002C618 76.0431 609.461 84.6883 593.898 92.5835C578.333 100.479 555.776 107.606 527.85 113.597C472.002 125.58 394.804 133 309.5 133C224.196 133 146.998 125.58 91.1503 113.597C63.2246 107.606 40.6679 100.479 25.1022 92.5835C9.53905 84.6883 1 76.0431 1 67.0002C1 57.9567 9.53905 49.3114 25.1022 41.4167C40.6679 33.5205 63.2246 26.3943 91.1503 20.4025C146.998 8.41948 224.196 1 309.5 1C394.804 1 472.002 8.41948 527.85 20.4025C555.776 26.3943 578.333 33.5205 593.898 41.4167C609.461 49.3114 618 57.9567 618 67.0002Z" stroke="white" strokeOpacity="0.05" strokeWidth="0.995833"/>
        </svg>
        <svg className='publish-dashboard-background-parabola-path-1 absolute top-0 left-5' width="20" height="91" viewBox="0 0 20 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4086 0.984375C5.13657 15.6881 -14.8443 54.049 19.4086 89.8579" stroke="url(#paint0_linear_2_972)" strokeLinecap='round'/>
            <defs>
            <linearGradient id="paint0_linear_2_972" x1="20.0573" y1="1.63309" x2="48.7279" y2="46.4636" gradientUnits="userSpaceOnUse">
            <stop offset="0.0677083" stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-background-parabola-path-2 absolute -top-5 right-7' width="21" height="91" viewBox="0 0 21 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.17554 0.887349C0.927728 0.628384 0.51773 0.6193 0.258239 0.866978C4.46066e-05 1.11466 -0.00905661 1.52528 0.238758 1.78412L1.17554 0.887349ZM1.17293 90.6607C8.38161 83.233 17.0227 69.85 19.5449 53.7879C22.0724 37.6895 18.446 18.9418 1.17554 0.887349L0.238758 1.78412C17.2212 19.5386 20.7295 37.8764 18.263 53.5856C15.7901 69.3324 7.30344 82.4805 0.241371 89.7577L1.17293 90.6607Z" fill="url(#paint0_linear_2_964)"/>
            <defs>
            <linearGradient id="paint0_linear_2_964" x1="0.0584203" y1="89.5605" x2="-28.6117" y2="44.7299" gradientUnits="userSpaceOnUse">
            <stop offset="0.0677083" stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-background-line-1 absolute top-0 left-0' width="110" height="3" viewBox="0 0 110 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.26303 0.976991C0.904756 0.976991 0.614319 1.26743 0.614319 1.6257C0.614319 1.98398 0.904756 2.27441 1.26303 2.27441L108.949 2.27441C109.307 2.27441 109.598 1.98398 109.598 1.6257C109.598 1.26743 109.307 0.976991 108.949 0.976991L1.26303 0.976991Z" fill="url(#paint0_linear_2_911)"/>
            <defs>
            <linearGradient id="paint0_linear_2_911" x1="121.069" y1="1.6257" x2="0.614319" y2="1.6257" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#555555" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>

        <svg className='publish-dashboard-background-line-2 absolute top-0 left-0' width="48" height="10" viewBox="0 0 48 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_908)">
            <path d="M5.10086 0.00286996C4.74259 0.00286996 4.45215 0.293308 4.45215 0.651581C4.45215 1.00985 4.74259 1.30029 5.10086 1.30029L42.7261 1.30029C43.0843 1.30029 43.3748 1.00985 43.3748 0.651581C43.3748 0.293308 43.0843 0.00286996 42.7261 0.00286996L5.10086 0.00286996Z" fill="url(#paint0_linear_2_908)" shapeRendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_d_2_908" x="0.452148" y="0.00292969" width="46.9226" height="9.29736" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_908"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_908" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2_908" x1="47.4719" y1="0.651582" x2="4.45215" y2="0.651582" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#555555" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-background-line-3 absolute top-0 left-0' width="88" height="3" viewBox="0 0 88 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M86.9323 2.21588C87.2906 2.21588 87.5811 1.92544 87.5811 1.56717C87.5811 1.2089 87.2906 0.918457 86.9323 0.918457L1.30255 0.918457C0.944283 0.918457 0.653839 1.2089 0.653839 1.56717C0.653839 1.92544 0.944283 2.21588 1.30255 2.21588L86.9323 2.21588Z" fill="url(#paint0_linear_2_914)"/>
            <defs>
            <linearGradient id="paint0_linear_2_914" x1="-8.49687" y1="1.56717" x2="87.5811" y2="1.56717" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#555555" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-background-line-4 absolute top-0 left-0' width="37" height="3" viewBox="0 0 37 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.0126 2.24176C36.3709 2.24176 36.6613 1.95132 36.6613 1.59305C36.6613 1.23477 36.3709 0.944336 36.0126 0.944336L0.982235 0.944336C0.623962 0.944336 0.333527 1.23477 0.333527 1.59305C0.333527 1.95132 0.623962 2.24176 0.982235 2.24176L36.0126 2.24176Z" fill="url(#paint0_linear_2_917)"/>
            <defs>
            <linearGradient id="paint0_linear_2_917" x1="-3.48997" y1="1.59305" x2="36.6613" y2="1.59305" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#555555" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        {children}
    </div>
  )
}

export default Background
