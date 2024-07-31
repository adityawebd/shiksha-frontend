import { React, useEffect } from "react";
import './topcollection.css'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import TopCollectionCard from './TopCollectionCard';

import image1 from '../../assets/images/uni/alahabd-uni.png'
import image2 from '../../assets/images/uni/bits.png'
import image3 from '../../assets/images/uni/jnu.png'
import image4 from '../../assets/images/uni/Untitled design (45).png'
import image5 from '../../assets/images/uni/bhu.png'
import image6 from '../../assets/images/uni/vit.png'
import image7 from '../../assets/images/uni/tifr.png'
import image8 from '../../assets/images/uni/amity.png'
import image9 from '../../assets/images/uni/jdvpr.png'
import image10 from '../../assets/images/uni/srm.png'
import image11 from '../../assets/images/uni/au.png'
import image12 from '../../assets/images/uni/symbosis.png'
import image13 from '../../assets/images/uni/mu.png'
import image14 from '../../assets/images/uni/op.png'
import image15 from '../../assets/images/uni/pu.png'
import image16 from '../../assets/images/uni/kiit.png'
import image17 from '../../assets/images/uni/cu.png'
import image18 from '../../assets/images/uni/ask-u.png'
import image19 from '../../assets/images/uni/pukhhrr-.png'
import image20 from '../../assets/images/uni/shiv-nadar.png'
import image21 from '../../assets/images/uni/uhyd.png'
import image22 from '../../assets/images/uni/christ-u.png'
import image23 from '../../assets/images/uni/muslim-uni.png'
import image24 from '../../assets/images/uni/thapr.png'
import image25 from '../../assets/images/uni/jamia.png'
import image26 from '../../assets/images/uni/lpu.png'
import image27 from '../../assets/images/uni/ict.png'
import image28 from '../../assets/images/uni/nmmiss.png'
import image29 from '../../assets/images/uni/du.png'
import image30 from '../../assets/images/uni/sasta.png'




const TopCollection = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const data1 = [
        {
            id: 1,
            college_name: "University of Allahabad",
            noofcoolleges: "323",
            image:image1
        },
        {
            id: 2,
            college_name: "Birla Institute of Technology and Science (BITS)",
            noofcoolleges: "323",
            image:image2
        },
        {
            id: 3,
            college_name: "Jawaharlal Nehru University (JNU), Delhi",
            noofcoolleges: "323",
            image:image3
        },
        {
            id: 4,
            college_name: "Manipal Academy of Higher Education",
            noofcoolleges: "323",
            image:image4
        },
        {
            id: 5,
            college_name: "Banaras Hindu University (BHU)",
            noofcoolleges: "323",
            image:image5
        },
        {
            id: 6,
            college_name: "Vellore Institute of Technology (VIT)",
            noofcoolleges: "323",
            image:image6
        },
        {
            id: 7,
            college_name: "Tata Institute of Fundamental Research (TIFR)",
            noofcoolleges: "323",
            image:image7
        },
        {
            id: 8,
            college_name: "Amity University, Noida",
            noofcoolleges: "323",
            image:image8
        },
        {
            id: 9,
            college_name: "Jadavpur University, Kolkata",
            noofcoolleges: "323",
            image:image9
        },
        {
            id: 10,
            college_name: "SRM Institute of Science and Technology, Chennai",
            noofcoolleges: "323",
            image:image10
        },
        {
            id: 11,
            college_name: "Anna University, Chennai",
            noofcoolleges: "323",
            image:image11
        },
        {
            id: 12,
            college_name: "Symbiosis International University, Pune",
            noofcoolleges: "323",
            image:image12
        },
        {
            id: 13,
            college_name: "University of Mumbai",
            noofcoolleges: "323",
            image:image13
        },
        {
            id: 14,
            college_name: "OP Jindal Global University, Sonipat",
            noofcoolleges: "323",
            image:image14
        },
        {
            id: 15,
            college_name: "Panjab University, Chandigarh",
            noofcoolleges: "323",
            image:image15
        },
    ]

    const data2 = [
        {
            id: 16,
            college_name: "Kalinga Institute of Industrial Technology (KIIT)",
            noofcoolleges: "323",
            image:image16
        },
        {
            id: 17,
            college_name: "University of Calcutta",
            noofcoolleges: "323",
            image:image17
        },
        {
            id: 18,
            college_name: "Ashoka University, Sonipat",
            noofcoolleges: "323",
            image:image18
        },
        {
            id: 19,
            college_name: "Savitribai Phule Pune University",
            noofcoolleges: "323",
            image:image19
        },
        {
            id: 20,
            college_name: "Shiv Nadar University, Greater Noida",
            noofcoolleges: "323",
            image:image20
        },
        {
            id: 21,
            college_name: "University of Hyderabad",
            noofcoolleges: "323",
            image:image21
        },
        {
            id: 22,
            college_name: "Christ University, Bangalore",
            noofcoolleges: "323",
            image:image22
        },
        {
            id: 23,
            college_name: "Aligarh Muslim University",
            noofcoolleges: "323",
            image:image23
        },
        {
            id: 24,
            college_name: "Thapar Institute of Engineering and Technology",
            noofcoolleges: "323",
            image:image24
        },
        {
            id: 25,
            college_name: "Jamia Millia Islamia, Delhi",
            noofcoolleges: "323",
            image:image25
        },
        {
            id: 26,
            college_name: "Lovely Professional University, Jalandhar",
            noofcoolleges: "323",
            image:image26
        },
        {
            id: 27,
            college_name: "Institute of Chemical Technology, Mumbai",
            noofcoolleges: "323",
            image:image27
        },
        {
            id: 28,
            college_name: "NMIMS University, Mumbai",
            noofcoolleges: "323",
            image:image28
        },
        {
            id: 29,
            college_name: "University of Delhi",
            noofcoolleges: "323",
            image:image29
        },
        {
            id: 30,
            college_name: "SASTRA University, Thanjavur",
            noofcoolleges: "323",
            image:image30
        },
    ]

    return (
        <section className="topcollection pb-5">
            <div className="topcollection_wrapper topcollection_outanimate container">
                <h2 data-aos="fade-up" className='mb-4'>Top Collection</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2.4,
                        },
                        780: {
                            slidesPerView: 3.8,
                        },
                        1300: {
                            slidesPerView: 4.6,
                        },
                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    {data1.map((value, index) => (
                        <SwiperSlide key={index}>
                            <TopCollectionCard
                                college_name={value.college_name}
                                noofcoolleges={value.noofcoolleges}
                                image={value.image}
                            />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <TopCollectionCard college_name="Indian Institute of Science (IISc), Bangalore" noofcoolleges="5516" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Birla Institute of Technology and Science (BITS)" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Jawaharlal Nehru University (JNU), Delhi" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Manipal Academy of Higher Education" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Banaras Hindu University (BHU)" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Vellore Institute of Technology (VIT)" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Tata Institute of Fundamental Research (TIFR)" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Amity University, Noida" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Jadavpur University, Kolkata" noofcoolleges="5516" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="SRM Institute of Science and Technology, Chennai" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Anna University, Chennai" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Symbiosis International University, Pune" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="University of Mumbai" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="OP Jindal Global University, Sonipat" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Panjab University, Chandigarh" noofcoolleges="2303" />
                    </SwiperSlide> */}
                </Swiper>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2.4,
                        },
                        780: {
                            slidesPerView: 3.8,
                        },
                        1300: {
                            slidesPerView: 4.6,
                        },

                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    {data2.map((value, index) => (
                        <SwiperSlide key={index}>
                            <TopCollectionCard
                                college_name={value.college_name}
                                noofcoolleges={value.noofcoolleges}
                                image={value.image}
                            />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <TopCollectionCard college_name="Kalinga Institute of Industrial Technology (KIIT)" noofcoolleges="5516" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="University of Calcutta" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Ashoka University, Sonipat" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Savitribai Phule Pune University" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Shiv Nadar University, Greater Noida" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="University of Hyderabad" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Christ University, Bangalore" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Aligarh Muslim University" noofcoolleges="2303" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TopCollectionCard college_name="Thapar Institute of Engineering and Technology" noofcoolleges="5516" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Jamia Millia Islamia, Delhi" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Lovely Professional University, Jalandhar" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="Institute of Chemical Technology, Mumbai" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="NMIMS University, Mumbai" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="University of Delhi" noofcoolleges="2303" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCollectionCard college_name="SASTRA University, Thanjavur" noofcoolleges="2303" />
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </section>
    )
}

export default TopCollection
