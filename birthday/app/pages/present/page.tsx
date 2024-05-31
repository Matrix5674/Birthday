'use client'

import React from 'react'
import Theme from '../../Components/Theme'
import Link from 'next/link'
import Image from 'next/image'
import Prezzie1 from '../../Assets/present.jpg'
import Prezzie2 from '../../Assets/Present2.png'
import Bella1 from '../../Assets/Bella1.jpg'
import Bella2 from '../../Assets/Bella2.jpg'
import Bella3 from '../../Assets/Bella3.jpg'
import Bella4 from '../../Assets/Bella4.jpg'

const Present = () => {
  return (
    <main className="flex flex-col"data-theme={Theme}>
      <Link href="/">
      <button className="backButton ml-5 mt-5">
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">Back</span>
      </button>
      </Link>
      <article className= "flex flex-col w-full justify-center items-center bg-slate-100 pt-6 pb-6 mt-6">
          <p className=' text-6xl text-primary font-bold underline underline-offset-auto'>Happy Birthday!</p>
          <p className=" text-neutral italic w-3/5 mt-4"> 
          Happy Birthday!
          Ik we kinda just met this year but I like doing things like this for people I care about on their first birthdays with me. 
          I know I talk about CS sometimes and you prolly don't understand much of it but I wanted 
          to make something for you and this is the best way I could think of doing it 😃. 
          Anyway, I hope everything goes great for you today. Go somewhere, eat cake or smth, or read, have fun shortie.
          </p>
          <Link href="/pages/book-gallery">
            <button className="homeButton mt-8">Stuff^2</button>
          </Link>
          
      </article>
      
    </main>
    

  )
}

export default Present
