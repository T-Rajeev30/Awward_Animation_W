import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus' , 'Valut' , 'Prologue' , 'About' , 'Contact']
const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioELementRef = useRef(null);
  const [isAudioPlaying , setIsAudioPlaying] = useState(false);
  const [isIndicatorActive , setisIndicatorActive] = useState(false)
  
  const toggleAudioIndicator = () =>{
    setIsAudioPlaying ((prev) => !prev) ;
    setisIndicatorActive((prev) => !prev)
  }
  useEffect(() => {

    if (isAudioPlaying) {
      audioELementRef.current.play();
    }else{
      audioELementRef.current.pause();
    }
  }, [isAudioPlaying])
  


  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6' >
      <header className='absolute top-1/2 w-full -translate-y-1/2  '>
        <nav className=' flex size-full items-center justify-between p-4 ' >
          <div className=' flex  items-center gap-7 '>
            <img src="/Img/logo.png" alt="Logo " className='w-10' />
            <Button 
             id="product-button "
             title="Products"
             rightIcon={<TiLocationArrow/>}
             containerClass="bg-blue-50  md:flex hidden  items-center justify-center gap-1"
            />
          </div>
          <div className='flex h-full items-center ' >
            <div className='hidden md:block'>
              {navItems.map((item) =>(
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn" >
                  {item}
                </a>
              ))}

            </div>
            <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5 ' >
              <audio ref={audioELementRef} className='hidden' src='/Audio/loop.mp3' loop />
              {[1, 2, 3, 4].map((bar, index) => (
  <div
    className={`indicator-line ${isIndicatorActive ? 'audio' : ''}`}
    key={index}
    style={{ animationDelay: `${bar * 0.1}s` }}
  />
))}

              
            </button>


          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar