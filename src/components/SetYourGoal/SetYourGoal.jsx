import { React, useState, useEffect } from 'react'
import './setyourgoal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS

import SliderCard from './SliderCard';
import SliderBG from '../../assets/images/engineering.webp'


const SetYourGoal = () => {

  // const [shouldNotSwipe, setShouldNotSwipe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device width is less than or equal to 768px (tablet size)
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  // Listen to window resize events to update the isMobile state
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const params = {
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  // const [data , setData]=useState()

  const data=[
    {
      id:"1",
      heading: "Engineering",
      degree_name_1: "BE/B.tech",
      specialization: "Diploma in Engineering",
      degree_name_2: "ME/M.TECH"
    },
    {
      id:"2",
      heading: "Management",
      degree_name_1: "MBA/PGDM",
      specialization: "BBA/BMS",
      degree_name_2: "EXECUTIVE MBA"
    },
    {
      id:"3",
      heading: "Commerce",
      degree_name_1: "B.com",
      specialization: "M.com"
    },
    {
      id:"4",
      heading: "Arts",
      degree_name_1: "BA",
      specialization: "MA",
      degree_name_2: "BFA",
      degree_name_3: "BSW"
    },
    {
      id:"5",
      heading: "Medical",
      degree_name_1: "MBBS",
      specialization: "PG Medical"
    },
    {
      id:"6",
      heading: "Design",
      degree_name_1: "B.des"
    },
    {
      id:"7",
      heading: "Science",
      degree_name_1: "B.sc",
      specialization: "M.sc"
    },
    {
      id:"8",
      heading: "Pharmacy",
      degree_name_1: "B.pharma",
      specialization: "M.pharma"
    },
    {
      id:"9",
      heading: "Paramedical",
      degree_name_1: "B.sc(Nursing)",
      specialization: "M.sc(Nursing)"
    },
    {
      id:"10",
      heading: "Computer Application",
      degree_name_1: "BCA",
      specialization: "MCA"
    },
    {
      id:"11",
      heading: "Education",
      degree_name_1: "B.ED",
      specialization: "M.ED",
      degree_name_2: "B.P.ED"
    },
    {
      id:"12",
      heading: "Agriculture",
      degree_name_1: "B.sc (ag)",
      specialization: "M.sc (Ag)"
    },
    {
      id:"13",
      heading: "Animation",
      degree_name_1: "Bachelor in Animation",
      specialization: "Diploma in Animation",
      degree_name_2: "Certification in Animation"
    },
    {
      id:"14",
      heading: "Architecture",
      degree_name_1: "B.Arch",
      specialization: "M.Arch"
    },
    {
      id:"15",
      heading: "Hotel Management",
      degree_name_1: "BHM"
    },
    {
      id:"16",
      heading: "Law",
      degree_name_1: "LLB",
      specialization: "LLM"
    },
    {
      id:"17",
      heading: "Dental",
      degree_name_1: "BDS",
      specialization: "MDS"
    },
    {
      id:"18",
      heading: "Veterinary Sciences",
      degree_name_1: "Veterinary Sciences"
    },
    {
      id:"19",
      heading: "Mass Communications",
      degree_name_1: "BMM",
      specialization: "MMC"
    },
    {
      id:"20",
      heading: "Aviation",
      degree_name_1: "B.Aviation"
    },
    {
      id:"21",
      heading: "Vocational Courses",
      degree_name_1: "Vocational Courses"
    }
  ]
  



  return (
    <section className="setgoalsection pb-5">
      <div className="setgoalsection_wrapper container pt-5">
        <h2 data-aos="fade-up" className='mb-4'>Select Your Goal</h2>

        
        <Swiper {...params}>

        {data.map((value, index) => (
        <SwiperSlide key={index}>
          <SliderCard
            heading={value.heading}
            sliderbg={SliderBG} // Assuming SliderBG is defined somewhere
            degree_name_1={value.degree_name_1}
            specialization={value.specialization}
            degree_name_2={value.degree_name_2}
            // no_of_colleges={value.degree_name_3} 
          />
        </SwiperSlide>
      ))}
          
{/*           
          <SwiperSlide>
            <SliderCard
              heading="MBBS"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Law"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Fashion Designing"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Engineering"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="MBBS"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            /> 
          </SwiperSlide> */}

          <div className="swiper-button-prev"></div> {/* Previous button */}
          <div className="swiper-button-next"></div> {/* Next button */}
        </Swiper>
      </div>
    </section>
  )
}

export default SetYourGoal
