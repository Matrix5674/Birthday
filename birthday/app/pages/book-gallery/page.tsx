import React from 'react'

import Image from 'next/image'

import Bella1 from '../../Assets/Bella1.jpg'
import Bella2 from '../../Assets/Bella2.jpg'
import Bella3 from '../../Assets/Bella3.jpg'
import Bella4 from '../../Assets/Bella4.jpg'
import Bella5 from '../../Assets/Bella5.jpg'
import Bella6 from '../../Assets/Bella1.jpg'
import Bella7 from '../../Assets/Bella7.jpg'
import Bella8 from '../../Assets/Bella8.jpg'


const BookGallery = () => {
  return (
     <main className='bookBackground'>
        <div className='image-container'>
            <div className="image-wrapper image1">
               <Image
                  src={Bella1}
                  className=" opacity-85 hover:opacity-100"
                  width={100}
                  height={200}
                  alt="" 
                     />
                  </div>
            <div className="image-wrapper image2">
               <Image
                  src={Bella2}
                  className="rounded-l opacity-85 hover:opacity-100"
                  width={100}
                  height={200}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image3">
               <Image
                  src={Bella3}
                  className="rounded-l opacity-85 hover:opacity-100"
                  width={85}
                  height={170}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image4">
               <Image
                  src={Bella4}
                  className="rounded-l opacity-85 hover:opacity-100"
                  width={100}
                  height={200}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image5">
               <Image
                  src={Bella5}
                  className="rounded-l opacity-85 hover:opacity-100l"
                  width={100}
                  height={200}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image6">
               <Image
                  src={Bella6}
                  className="rounded-l opacity-85 hover:opacity-100"
                  width={150}
                  height={300}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image7">
               <Image
                  src={Bella7}
                  className="rounded-l opacity-85 hover:opacity-100l"
                  width={150}
                  height={300}
                  alt="" 
               />
            </div>
            <div className="image-wrapper image8">
               <Image
                  src={Bella8}
                  className="rounded-l opacity-85 hover:opacity-100"
                  width={100}
                  height={200}
                  alt="" 
               />
            </div>
         </div>
    </main>
  )
}

export default BookGallery
