import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVATAR1,
    name: 'Panagiotis Mathaiou',
    review: 'Very good professional Web Developer, he can discuss everything and always can find a solution! I recommend Rafael to others!'
  },
  {
    avatar: AVATAR1,
    name: 'Panagiotis Mathaiou',
    review: 'Very good professional Web Developer, he can discuss everything and always can find a solution! I recommend Rafael to others!'
  },
  {
    avatar: AVATAR1,
    name: 'Panagiotis Mathaiou',
    review: 'Very good professional Web Developer, he can discuss everything and always can find a solution! I recommend Rafael to others!'
  },
]




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
 
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials