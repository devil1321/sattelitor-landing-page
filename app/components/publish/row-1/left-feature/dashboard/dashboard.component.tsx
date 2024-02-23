'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger,DrawSVGPlugin } from 'gsap/all'

const Dashboard = () => {

  const handleAnimateHeader = () =>{
    gsap.fromTo('.publish-dashboard-header-circle',{ opacity:0 },{ duration:5, opacity:1,scrollTrigger:{
        trigger:'.publish-dashboard',
        start:'-=300px', 
        end:'-=250px',
    }})
    gsap.fromTo('.publish-dashboard-header-menu',{ opacity:0 },{ duration:5, opacity:1,scrollTrigger:{
        trigger:'.publish-dashboard',
        start:'-=300px', 
        end:'-=250px'
    }})
  }
  const handleAnimateIntro = () =>{
    const tl = gsap.timeline()
    tl.fromTo('.publish-dashboard-intro-title',{ attr:{ width:0 } },{ duration:5,attr:{ width:108 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'
    }})
    .fromTo('.publish-dashboard-intro-paragraph-1',{ attr:{ width:0 } },{ duration:5,attr:{ width:79 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'
    }})
    .fromTo('.publish-dashboard-intro-paragraph-2',{ attr:{ width:0 } },{ duration:5,attr:{ width:79 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'
    }})
    .fromTo('.publish-dashboard-intro-btn',{ attr: { opacity:0 } },{ duration:2,attr: { opacity:1 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'
    }})
  }
  const handleAnimateItems = () =>{
    const tl = gsap.timeline()
    tl.fromTo('.publish-dashboard-item-image',{ attr:{ width:0,height:0 } },{ duration:5,attr:{ width:44,height:31 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'    
    }})
    tl.fromTo('.publish-dashboard-item-title',{ attr:{ width:0 } },{ duration:5,attr:{ width:72 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'  
    }})
    tl.fromTo('.publish-dashboard-item-paragraph-1',{ attr:{ width:0 } },{ duration:5,attr:{ width:53 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'
    }})
    tl.fromTo('.publish-dashboard-item-paragraph-2',{ attr:{ width:0 } },{ duration:5,attr:{ width:53 },scrollTrigger:{
        trigger:'.publish-dashboard',
        scrub:3,
        start:'-=300px', 
        end:'-=250px'    
    }})
  }

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin)
    handleAnimateHeader()
    handleAnimateIntro()
    handleAnimateItems()
  },[])

  return (
    <div className='publish-dashboard w-100 -translate-x-6 xl:w-[200px] relative top-0 left-1/2 md:-translate-x-1/2'>
        <svg className='publish-dashboard-background absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' width="306" height="200" viewBox="0 0 306 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M300.288 0.84375H5.77367C2.90749 0.84375 0.583984 3.16725 0.583984 6.03344V194.543C0.583984 197.409 2.90749 199.732 5.77367 199.732H300.288C303.154 199.732 305.478 197.409 305.478 194.543V6.03344C305.478 3.16725 303.154 0.84375 300.288 0.84375Z" fill="url(#paint0_radial_2_921)"/>
            <defs>
            <radialGradient id="paint0_radial_2_921" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.583984 0.84375) rotate(52.3591) scale(250.684 384.298)">
            <stop stopColor="#232323"/>
            <stop offset="0.53125" stopColor="#121212"/>
            <stop offset="1" stopColor="#1A1A1A"/>
            </radialGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-header-background absolute -top-[90px] left-1/2 -translate-x-1/2' width="284" height="27" viewBox="0 0 284 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M272.983 0.911133H11.0586C5.3262 0.911133 0.679199 5.55815 0.679199 11.2905V15.7713C0.679199 21.5037 5.3262 26.1507 11.0586 26.1507H272.983C278.716 26.1507 283.363 21.5037 283.363 15.7713V11.2905C283.363 5.55815 278.716 0.911133 272.983 0.911133Z" fill="#121212"/>
        </svg>
        <svg className='publish-dashboard-header-circle absolute -top-[85px] -left-24 md:left-16 lg:left-24 xl:-left-8' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8901 8.03581C14.8901 4.13278 11.726 0.96875 7.82286 0.96875C3.91972 0.96875 0.755615 4.13278 0.755615 8.03581C0.755615 11.9388 3.91972 15.1029 7.82286 15.1029C11.726 15.1029 14.8901 11.9388 14.8901 8.03581Z" fill="#D9D9D9" fillOpacity="0.05"/>
        </svg>
        <svg className='publish-dashboard-header-menu absolute -top-[85px] -right-24 md:right-16 lg:right-24 xl:-right-8' width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.0082 0.96875H2.04718C1.33063 0.96875 0.749756 1.54963 0.749756 2.26617V13.8054C0.749756 14.522 1.33063 15.1029 2.04718 15.1029H58.0082C58.7247 15.1029 59.3056 14.522 59.3056 13.8054V2.26617C59.3056 1.54963 58.7247 0.96875 58.0082 0.96875Z" fill="url(#paint0_linear_2_925)" fillOpacity="0.1"/>
            <defs>
            <linearGradient id="paint0_linear_2_925" x1="30.0273" y1="0.96875" x2="30.0273" y2="15.103" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#BEBEBE"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='publish-dashboard-intro-title absolute left-1/2 -top-12 -translate-x-1/2' width="108" height="7" viewBox="0 0 108 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M104.443 0.0639648H3.48438C1.81165 0.0639648 0.455627 1.41998 0.455627 3.09271C0.455627 4.76545 1.81165 6.12146 3.48438 6.12146H104.443C106.115 6.12146 107.471 4.76545 107.471 3.09271C107.471 1.41998 106.115 0.0639648 104.443 0.0639648Z" fill="#D9D9D9" fillOpacity="0.05"/>
        </svg>
        <svg className='publish-dashboard-intro-paragraph-1 absolute left-1/2 -top-9 -translate-x-1/2' width="79" height="5" viewBox="0 0 79 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.3084 0.197754H2.60888C1.49373 0.197754 0.589722 1.10177 0.589722 2.21692C0.589722 3.33207 1.49373 4.23609 2.60888 4.23609H76.3084C77.4236 4.23609 78.3276 3.33207 78.3276 2.21692C78.3276 1.10177 77.4236 0.197754 76.3084 0.197754Z" fill="#D9D9D9" fillOpacity="0.05"/>
        </svg>
        <svg className='publish-dashboard-intro-paragraph-2 absolute left-1/2 -top-7 -translate-x-1/2' width="79" height="5" viewBox="0 0 79 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.3084 0.197754H2.60888C1.49373 0.197754 0.589722 1.10177 0.589722 2.21692C0.589722 3.33207 1.49373 4.23609 2.60888 4.23609H76.3084C77.4236 4.23609 78.3276 3.33207 78.3276 2.21692C78.3276 1.10177 77.4236 0.197754 76.3084 0.197754Z" fill="#D9D9D9" fillOpacity="0.05"/>
        </svg>
        <svg className='publish-dashboard-intro-btn absolute left-1/2 -top-4 -translate-x-1/2' width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.1737 0.361816H7.75202C3.84898 0.361816 0.684937 3.52585 0.684937 7.42888C0.684937 11.3319 3.84898 14.4959 7.75202 14.4959H52.1737C56.0768 14.4959 59.2408 11.3319 59.2408 7.42888C59.2408 3.52585 56.0768 0.361816 52.1737 0.361816Z" fill="url(#paint0_linear_2_926)" fillOpacity="0.2"/>
            <defs>
            <linearGradient id="paint0_linear_2_926" x1="29.9638" y1="0.361816" x2="29.9638" y2="14.4959" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#BEBEBE"/>
            </linearGradient>
            </defs>
        </svg>

        <div className="publish-dashboard-item relative top-0 left-1/2 -translate-x-20 xl:-translate-x-1/2">
            <svg className='publish-dashboard-item-image absolute top-2 left-0' width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.0999 0.754395H2.8775C1.4444 0.754395 0.282654 1.91615 0.282654 3.34924V27.4375C0.282654 28.8706 1.4444 30.0323 2.8775 30.0323H41.0999C42.533 30.0323 43.6948 28.8706 43.6948 27.4375V3.34924C43.6948 1.91615 42.533 0.754395 41.0999 0.754395Z" fill="#D9D9D9" fillOpacity="0.05"/>
            </svg>
            <svg className='publish-dashboard-item-title absolute left-12 top-3' width="72" height="5" viewBox="0 0 72 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.4331 0.802734H2.80066C1.6855 0.802734 0.781494 1.70675 0.781494 2.8219C0.781494 3.93706 1.6855 4.84107 2.80066 4.84107H69.4331C70.5483 4.84107 71.4523 3.93706 71.4523 2.8219C71.4523 1.70675 70.5483 0.802734 69.4331 0.802734Z" fill="#D9D9D9" fillOpacity="0.05"/>
            </svg>
            <svg className='publish-dashboard-item-paragraph-1 absolute left-12 top-5' width="53" height="4" viewBox="0 0 53 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.7558 0.964844H2.29587C1.4595 0.964844 0.781494 1.64286 0.781494 2.47922C0.781494 3.31559 1.4595 3.9936 2.29587 3.9936H50.7558C51.5922 3.9936 52.2702 3.31559 52.2702 2.47922C52.2702 1.64286 51.5922 0.964844 50.7558 0.964844Z" fill="#D9D9D9" fillOpacity="0.03"/>
            </svg>
            <svg className='publish-dashboard-item-paragraph-2 absolute left-12 top-7' width="53" height="4" viewBox="0 0 53 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.7558 0.964844H2.29587C1.4595 0.964844 0.781494 1.64286 0.781494 2.47922C0.781494 3.31559 1.4595 3.9936 2.29587 3.9936H50.7558C51.5922 3.9936 52.2702 3.31559 52.2702 2.47922C52.2702 1.64286 51.5922 0.964844 50.7558 0.964844Z" fill="#D9D9D9" fillOpacity="0.03"/>
            </svg>
        </div>
        <div className="publish-dashboard-item relative top-10 left-1/2 -translate-x-20 xl:-translate-x-1/2">
            <svg className='publish-dashboard-item-image absolute top-2 left-0' width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.0999 0.754395H2.8775C1.4444 0.754395 0.282654 1.91615 0.282654 3.34924V27.4375C0.282654 28.8706 1.4444 30.0323 2.8775 30.0323H41.0999C42.533 30.0323 43.6948 28.8706 43.6948 27.4375V3.34924C43.6948 1.91615 42.533 0.754395 41.0999 0.754395Z" fill="#D9D9D9" fillOpacity="0.05"/>
            </svg>
            <svg className='publish-dashboard-item-title absolute left-12 top-3' width="72" height="5" viewBox="0 0 72 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.4331 0.802734H2.80066C1.6855 0.802734 0.781494 1.70675 0.781494 2.8219C0.781494 3.93706 1.6855 4.84107 2.80066 4.84107H69.4331C70.5483 4.84107 71.4523 3.93706 71.4523 2.8219C71.4523 1.70675 70.5483 0.802734 69.4331 0.802734Z" fill="#D9D9D9" fillOpacity="0.05"/>
            </svg>
            <svg className='publish-dashboard-item-paragraph-1 absolute left-12 top-5' width="53" height="4" viewBox="0 0 53 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.7558 0.964844H2.29587C1.4595 0.964844 0.781494 1.64286 0.781494 2.47922C0.781494 3.31559 1.4595 3.9936 2.29587 3.9936H50.7558C51.5922 3.9936 52.2702 3.31559 52.2702 2.47922C52.2702 1.64286 51.5922 0.964844 50.7558 0.964844Z" fill="#D9D9D9" fillOpacity="0.03"/>
            </svg>
            <svg className='publish-dashboard-item-paragraph-2 absolute left-12 top-7' width="53" height="4" viewBox="0 0 53 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.7558 0.964844H2.29587C1.4595 0.964844 0.781494 1.64286 0.781494 2.47922C0.781494 3.31559 1.4595 3.9936 2.29587 3.9936H50.7558C51.5922 3.9936 52.2702 3.31559 52.2702 2.47922C52.2702 1.64286 51.5922 0.964844 50.7558 0.964844Z" fill="#D9D9D9" fillOpacity="0.03"/>
            </svg>
        </div>
        
    </div>
  )
}

export default Dashboard
