import { React, useState, useEffect } from 'react'
import './setyourgoal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS

import SliderCard from './SliderCard';
import SliderBG from '../../assets/images/engineering.webp'
import image1 from '../../assets/images/Goal/Untitled design (50).png'
import image2 from '../../assets/images/Goal/Untitled design (61).png'
import image3 from '../../assets/images/Goal/Untitled design (45).png'
import image4 from '../../assets/images/Goal/Untitled design (46).png'
import image5 from '../../assets/images/Goal/medical.png'
import image6 from '../../assets/images/Goal/Untitled design (47).png'
import image7 from '../../assets/images/Goal/Untitled design (48).png'
import image8 from '../../assets/images/Goal/Untitled design (49).png'
import image9 from '../../assets/images/Goal/goals-paramedical.png'
import image10 from '../../assets/images/Goal/Untitled design (51).png'
import image11 from '../../assets/images/Goal/edu.png'
import image12 from '../../assets/images/Goal/Untitled design (52).png'
import image13 from '../../assets/images/Goal/Untitled design (69).png'
import image14 from '../../assets/images/Goal/Untitled design (53).png'
import image15 from '../../assets/images/Goal/Untitled design (54).png'
import image16 from '../../assets/images/Goal/Untitled design (55).png'
import image17 from '../../assets/images/Goal/Untitled design (56).png'
import image18 from '../../assets/images/Goal/Untitled design (57).png'
import image19 from '../../assets/images/Goal/Untitled design (58).png'
import image20 from '../../assets/images/Goal/Untitled design (59).png'
import image21 from '../../assets/images/Goal/Untitled design (60).png'



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
    loopfillgroupwithblank: "true",
    // loopfillgroupwithblank={value.toString()}
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
      degree_name_2: "ME/M.TECH",
      image:image1
    },
    {
      id:"2",
      heading: "Management",
      degree_name_1: "MBA/PGDM",
      specialization: "BBA/BMS",
      degree_name_2: "EXECUTIVE MBA",
      image:image2
    },
    {
      id:"3",
      heading: "Commerce",
      degree_name_1: "B.com",
      specialization: "M.com",
      image:image3
    },
    {
      id:"4",
      heading: "Arts",
      degree_name_1: "BA",
      specialization: "MA",
      degree_name_2: "BFA",
      degree_name_3: "BSW",
      image:image4
    },
    {
      id:"5",
      heading: "Medical",
      degree_name_1: "MBBS",
      specialization: "PG Medical",
      image:image5
    },
    {
      id:"6",
      heading: "Design",
      degree_name_1: "B.des",
      image:image6
    },
    {
      id:"7",
      heading: "Science",
      degree_name_1: "B.sc",
      specialization: "M.sc",
      image:image7
    },
    {
      id:"8",
      heading: "Pharmacy",
      degree_name_1: "B.pharma",
      specialization: "M.pharma",
      image:image8
    },
    {
      id:"9",
      heading: "Paramedical",
      degree_name_1: "B.sc(Nursing)",
      specialization: "M.sc(Nursing)",
      image:image9
    },
    {
      id:"10",
      heading: "Computer Application",
      degree_name_1: "BCA",
      specialization: "MCA",
      image:image10
    },
    {
      id:"11",
      heading: "Education",
      degree_name_1: "B.ED",
      specialization: "M.ED",
      degree_name_2: "B.P.ED",
      image:image11
    },
    {
      id:"12",
      heading: "Agriculture",
      degree_name_1: "B.sc (ag)",
      specialization: "M.sc (Ag)",
      image:image12
    },
    {
      id:"13",
      heading: "Animation",
      degree_name_1: "Bachelor in Animation",
      specialization: "Diploma in Animation",
      degree_name_2: "Certification in Animation",
      image:image13
    },
    {
      id:"14",
      heading: "Architecture",
      degree_name_1: "B.Arch",
      specialization: "M.Arch",
      image:image14
    },
    {
      id:"15",
      heading: "Hotel Management",
      degree_name_1: "BHM",
      image:image15
    },
    {
      id:"16",
      heading: "Law",
      degree_name_1: "LLB",
      specialization: "LLM",
      image:image16
    },
    {
      id:"17",
      heading: "Dental",
      degree_name_1: "BDS",
      specialization: "MDS",
      image:image17
    },
    {
      id:"18",
      heading: "Veterinary Sciences",
      degree_name_1: "Veterinary Sciences",
      image:image18
    },
    {
      id:"19",
      heading: "Mass Communications",
      degree_name_1: "BMM",
      specialization: "MMC",
      image:image19
    },
    {
      id:"20",
      heading: "Aviation",
      degree_name_1: "B.Aviation",
      image:image20
    },
    {
      id:"21",
      heading: "Vocational Courses",
      degree_name_1: "Vocational Courses",
      image:image21
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
            sliderbg={value.image} // Assuming SliderBG is defined somewhere
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
