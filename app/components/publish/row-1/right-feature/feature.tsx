'use client'
import React,{ useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Feature = () => {

  const handleAnimateConnect = () =>{
    gsap.registerPlugin(ScrollTrigger)
    if((typeof window !== 'undefined')){
      if(document !== 'undefined'){
        const path_1 = document.querySelector('.publish-feature-connect-left path')!
        const path_2 = document.querySelector('.publish-feature-connect-right path')! 
        const path_1_dash = path_1.getTotalLength()
        const path_2_dash = path_2.getTotalLength()
        path_1.style.strokeDasharray = path_1_dash
        path_2.style.strokeDasharray = path_2_dash
        path_1.style.strokeDashoffset = path_1_dash
        path_2.style.strokeDashoffset = path_2_dash
        gsap.fromTo(path_1,{strokeDashoffset:path_1_dash},{ strokeDashoffset:0,duration:20,scrollTrigger:{
          trigger:'.publish-feature',
          scrub:10,
          start:'-=200px',
          end:'-=0px',
          markers:true
        }})
        gsap.fromTo(path_2,{strokeDashoffset:path_2_dash},{ strokeDashoffset:0,duration:20,scrollTrigger:{
          trigger:'.publish-feature',
          scrub:10,
          start:'-=200px',
          end:'-=0px',
        }})
      }
    }
  }

  const handleAnimateMainPath = () =>{
    gsap.registerPlugin(ScrollTrigger)
    if((typeof window !== 'undefined')){
      if(document !== 'undefined'){
        const path_1 = document.querySelector('.publish-feature-main-path path')!
        const path_1_dash = path_1.getTotalLength()
        path_1.style.strokeDasharray = path_1_dash
        path_1.style.strokeDashoffset = path_1_dash
        gsap.fromTo(path_1,{strokeDashoffset:path_1_dash},{ strokeDashoffset:0,duration:20,scrollTrigger:{
          trigger:'.publish-feature',
          scrub:10,
          start:'-=200px',
          end:'-=0px',
        }})
      }
    }
  }

  const handleAnimateBoxes = () =>{
    gsap.fromTo('.publish-feature-box',{ opacity:0 },{ opacity:1,
      stagger:{
        amount:2,
        grid:[1,3],
        from:'start'
      },
      scrollTrigger:{
        trigger:'.publish-feature',
        scrub:10,
        start:'-=200px',
        end:'-=0px',
      }})
  }

  useEffect(()=>{
    handleAnimateConnect()
    handleAnimateMainPath()
    handleAnimateBoxes()
  },[])

  return (
    <div className='publish-feature relative top-0 md:px-12 lg:px-0 xl:-mt-11 rounded-lg overflow-hidden left-0 xl:w-100 lg:ml-24  bg-neutral-950/50 h-[430px] xl:h-[435px]'>
        
      <div className='publish-feature-connect relative top-0 left-0'>
        <svg className='publish-feature-connect-left absolute left-0 top-0' width="160" height="69" viewBox="0 0 160 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.978027 0.0791016V59.4451C0.978027 63.9675 4.6441 67.6335 9.16643 67.6335H124.524M13.7586 0.0791016V50.1628C13.7586 54.6852 17.4246 58.3512 21.947 58.3512H124.524M27.9592 0.0791016V42.4275C27.9592 46.9499 31.6253 50.616 36.1476 50.616H124.524M37.1896 0.0791016V34.1767C37.1896 38.6991 40.8557 42.3651 45.378 42.3651H129.115C133.637 42.3651 137.304 46.0937 137.304 50.616M47.8401 0.0791016V26.9571C47.8401 31.4794 51.5061 35.1455 56.0285 35.1455H136.216C140.738 35.1455 144.404 38.8116 144.404 43.3339V50.616M58.4905 0.0791016V20.2532C58.4905 24.7756 62.1566 28.4416 66.6789 28.4416H143.316C147.838 28.4416 151.504 32.1077 151.504 36.63V50.616M69.851 0.0791016V13.5494C69.851 18.0717 73.5171 21.7378 78.0394 21.7378H150.416C154.938 21.7378 158.605 25.4038 158.605 29.9262V49.069" stroke="url(#paint0_linear_2_741)" strokeOpacity="0.25"/>
          <defs>
          <linearGradient id="paint0_linear_2_741" x1="0.978028" y1="54.1227" x2="15.1097" y2="102.567" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#262626"/>
          </linearGradient>
          </defs>
        </svg>
        <svg className='publish-feature-connect-right absolute right-0 top-0' width="115" height="68" viewBox="0 0 115 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M114.337 0.0791016V58.9333C114.337 63.4557 110.67 67.1218 106.148 67.1218H25.2878M105.125 0.0791016V49.7214C105.125 54.2437 101.458 57.9098 96.9363 57.9098H25.2878M94.8892 0.0791016V42.0447C94.8892 46.5671 91.2228 50.2331 86.7008 50.2331H25.2878M88.2361 0.0791016V33.8563C88.2361 38.3787 84.5698 42.0447 80.0477 42.0447H24.2642C19.7422 42.0447 16.0758 45.7108 16.0758 50.2331M80.5595 0.0791016V26.6915C80.5595 31.2138 76.8931 34.8799 72.3711 34.8799H19.1464C14.6244 34.8799 10.958 38.5459 10.958 43.0683V50.2331M72.8829 0.0791016V20.0384C72.8829 24.5607 69.2165 28.2268 64.6945 28.2268H14.0287C9.50665 28.2268 5.84029 31.8928 5.84029 36.4152V50.2331M64.6945 0.0791016V13.3853C64.6945 17.9076 61.0281 21.5737 56.506 21.5737H8.91094C4.38889 21.5737 0.722534 25.2397 0.722534 29.7621V48.6978" stroke="url(#paint0_linear_2_742)" strokeOpacity="0.25"/>
          <defs>
          <linearGradient id="paint0_linear_2_742" x1="114.337" y1="53.7132" x2="96.2935" y2="98.6349" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#262626"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <svg className='publish-feature-main-path absolute top-12 left-24' width="184" height="373" viewBox="0 0 184 373" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M97.7869 0.239258V28.3869C97.7869 32.909 94.1205 36.5754 89.5985 36.5754H51.2153C46.693 36.5754 43.0269 40.2417 43.0269 44.7638V83.6588C43.0269 88.1808 46.693 91.8472 51.2153 91.8472H174.553C179.075 91.8472 182.742 95.5135 182.742 100.036V173.22C182.742 177.742 179.075 181.408 174.553 181.408H8.73797C4.21561 181.408 0.549561 185.074 0.549561 189.596V269.433V321.123C0.549561 325.645 4.21561 329.311 8.73797 329.311H85.5043C90.0263 329.311 93.6927 325.645 93.6927 321.123V251.521C93.6927 246.999 97.359 243.333 101.881 243.333H174.553C179.075 243.333 182.742 246.999 182.742 251.521V372.3" stroke="url(#paint0_linear_2_743)"/>
        <defs>
        <linearGradient id="paint0_linear_2_743" x1="49.68" y1="39.646" x2="155.618" y2="334.941" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8E8E8E"/>
        <stop offset="1" stopColor="#141414"/>
        </linearGradient>
        </defs>
      </svg>
      <div className="publish-feature-connect flex bg-neutral-900 rounded-lg border-[1px] border-gray-800 relative z-10 top-8 left-32 p-2 w-fit">
        <Image className='mr-3' src="/assets/publish-items/feature/connect-logo.png" alt="logo" width={30} height={30} />
        <h3 className="text-lg">Connect</h3>
      </div>
      <div className="publish-feature-connect flex bg-neutral-900 rounded-lg border-[1px] border-gray-800 relative z-10 top-20 left-5 p-2 w-fit">
        <Image className='mr-3' src="/assets/publish-items/feature/wordpress-logo.png" alt="logo" width={30} height={30} />
        <h3 className="text-lg font-bold">Wordpress</h3>
      </div>  
      <svg className='publish-feature-box absolute top-1/4 left-2/3' width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.7443 1.48975H8.42541C4.18572 1.48975 0.748779 4.9267 0.748779 9.16639V66.4853C0.748779 70.725 4.18572 74.1619 8.42541 74.1619H65.7443C69.9839 74.1619 73.4209 70.725 73.4209 66.4853V9.16639C73.4209 4.9267 69.9839 1.48975 65.7443 1.48975Z" stroke="url(#paint0_linear_2_751)" strokeOpacity="0.05"/>
        <defs>
        <linearGradient id="paint0_linear_2_751" x1="37.0848" y1="0.97797" x2="37.0848" y2="74.6737" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        </defs>
      </svg>

      <svg className='publish-feature-box absolute top-1/2 left-5' width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.7443 1.48975H8.42541C4.18572 1.48975 0.748779 4.9267 0.748779 9.16639V66.4853C0.748779 70.725 4.18572 74.1619 8.42541 74.1619H65.7443C69.9839 74.1619 73.4209 70.725 73.4209 66.4853V9.16639C73.4209 4.9267 69.9839 1.48975 65.7443 1.48975Z" stroke="url(#paint0_linear_2_751)" strokeOpacity="0.05"/>
        <defs>
        <linearGradient id="paint0_linear_2_751" x1="37.0848" y1="0.97797" x2="37.0848" y2="74.6737" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <div className="publish-feature-logo flex bg-neutral-900 rounded-lg border-[1px] border-gray-800 relative z-10 top-[110px] left-32 p-2 w-fit">
        <Image className='mr-3' src="/assets/publish-items/feature/webflow-logo.png" alt="logo" width={30} height={30} />
        <h3 className="text-lg font-bold">Webflow</h3>
      </div>
      <div className="publish-feature-logo flex bg-neutral-900 rounded-lg border-[1px] border-gray-800 relative z-10 top-[200px] left-5 p-2 w-fit">
        <Image className='mr-3' src="/assets/publish-items/feature/shopify-logo.png" alt="logo" width={30} height={30} />
        <h3 className="text-lg font-bold">Shopify</h3>
      </div>
      <svg className='publish-feature-box' width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.7443 1.48975H8.42541C4.18572 1.48975 0.748779 4.9267 0.748779 9.16639V66.4853C0.748779 70.725 4.18572 74.1619 8.42541 74.1619H65.7443C69.9839 74.1619 73.4209 70.725 73.4209 66.4853V9.16639C73.4209 4.9267 69.9839 1.48975 65.7443 1.48975Z" stroke="url(#paint0_linear_2_751)" strokeOpacity="0.05"/>
        <defs>
        <linearGradient id="paint0_linear_2_751" x1="37.0848" y1="0.97797" x2="37.0848" y2="74.6737" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <div className="publish-feature-logo flex bg-neutral-900 rounded-lg border-[1px] border-gray-800 relative z-10 top-[80px] left-[230px] p-2 w-fit">
        <h3 className="text-lg font-bold">__Zapier</h3>
      </div>




    </div>
  )
}

export default Feature
