import React, { useState, useEffect } from 'react';
import './international.css'
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

import IMG1 from './assets/images/1_1.jpg'
import IMG2 from './assets/images/1_2.jpg'
import IMG3 from './assets/images/1_3.jpg'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReactImageMagnify from 'react-image-magnify';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

//import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';



const International = () => {
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
    const [activeTab, setActiveTab] = useState('London');

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }

    const circularProgress = document.querySelectorAll(".circular-progress");

    Array.from(circularProgress).forEach((progressBar) => {
        const progressValue = progressBar.querySelector(".percentage");
        const innerCircle = progressBar.querySelector(".inner-circle");
        let startValue = 0,
            endValue = Number(progressBar.getAttribute("data-percentage")),
            speed = 50,
            progressColor = progressBar.getAttribute("data-progress-color");

        const progress = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progressValue.style.color = `${progressColor}`;

            innerCircle.style.backgroundColor = `${progressBar.getAttribute(
                "data-inner-circle-color"
            )}`;

            progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
            if (startValue === endValue) {
                clearInterval(progress);
            }
        }, speed);
    });


    const openCity = (cityName) => {
        setActiveTab(cityName);
    };

    useEffect(() => {
        // Set the default active tab
        setActiveTab('img1');
    }, []);

    const renderTabContent = (imageSrc) => (
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Product Image',
                    isFluidWidth: true,
                    src: imageSrc,
                },
                largeImage: {
                    src: imageSrc,
                    width: 1200,
                    height: 1800,
                },
                enlargedImageContainerClassName: 'enlarged-image',
            }}
        />
    );

    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <section className="profuctsection">
            <div className="profuctsection_wrapper">
                <div className="product_image">
                    <div className="product_image_container">
                        <div className="tab">
                            <button
                                className={`tablinks ${activeTab === 'img1' ? 'active' : ''}`}
                                onMouseEnter={() => openCity('img1')}
                            >
                                <img src={IMG1} alt="" />
                            </button>
                            <button
                                className={`tablinks ${activeTab === 'img2' ? 'active' : ''}`}
                                onMouseEnter={() => openCity('img2')}
                            >
                                <img src={IMG2} alt="" />
                            </button>
                            <button
                                className={`tablinks ${activeTab === 'img3' ? 'active' : ''}`}
                                onMouseEnter={() => openCity('img3')}
                            >
                                <img src={IMG3} alt="" />
                            </button>
                        </div>

                        <div id="img1" className={`tabcontent ${activeTab === 'img1' ? 'active' : ''}`}>
                            {activeTab === 'img1' && renderTabContent(IMG1)}
                        </div>

                        <div id="img2" className={`tabcontent ${activeTab === 'img2' ? 'active' : ''}`}>
                            {activeTab === 'img2' && renderTabContent(IMG2)}
                        </div>

                        <div id="img3" className={`tabcontent ${activeTab === 'img3' ? 'active' : ''}`}>
                            {activeTab === 'img3' && renderTabContent(IMG3)}
                        </div>
                    </div>
                </div>
                <div className="product_about">
                    <h4>Orange with touch</h4>
                    <div className="price">€ 45.00</div>
                    <div className="rating">
                        <div className="stars">
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                        </div>
                        <div className="rating_number">4.9 <span>(Total 210 reviews)</span></div>
                    </div>
                    <div className="product_content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut, nulla non a veritatis saepe blanditiis consequuntur labore, nostrum adipisci officiis nemo fugiat aliquid aperiam dolor eaque eveniet suscipit dolorum!</p>
                    </div>
                    <div className="product_points">
                        <span><FaCheck /> Moistureise</span>
                        <span><FaCheck /> Vegan</span>
                        <span><FaCheck /> Organic</span>
                        <span><FaCheck /> Immune Sysytem</span>
                    </div>
                    <div className="add_card_div">
                        <div className="inc_dec">
                            <button className='minus' onClick={decrement}><FiMinus /></button>
                            <span className='number'>{count}</span>
                            <button className='plus' onClick={increment}><LuPlus /></button>
                        </div>
                        <div className="add_to_cart">
                            <a href=""><span><SlHandbag /> &nbsp; Add to Cart</span></a>
                        </div>
                    </div>
                    <div className="add_whshlist" onClick={toggleLike}>
                        <span className={`heart-icon ${liked ? 'liked' : ''}`}>
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </span>
                        {liked ? 'Added ' : 'Add to Wishlist'}
                    </div>

                    <div className="product_variations">
                        <h3>Variations</h3>
                        <Swiper
                            spaceBetween={1}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 5,
                                },
                                1100: {
                                    slidesPerView: 9,
                                },
                            }}
                            // navigation={true}
                            //  modules={[Autoplay, Pagination, Navigation]}
                            modules={[Autoplay]}
                            className="mySwiper  mb-4 w-full"
                        >
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>   
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>   
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>

            <div className="tab_section">
                <div className="tab_section_wrapper">
                    <Tabs
                        defaultActiveKey="General Information"
                        id="uncontrolled-tab-example"
                        className="mb-3 tabs"
                    >
                        <Tab eventKey="General Information" className='tab' title="General Information">
                            1
                        </Tab>
                        <Tab eventKey="Additional Information" className='tab' title="Additional Information">
                            2
                        </Tab>
                        <Tab eventKey="Reviews" className='tab' title="Reviews">
                            <div className="reviews_section">
                                <div className="customer_reviews">
                                    <h2>Customer Reviews</h2>
                                    <div className="rating">
                                        <div className="stars">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </div>
                                        <div className="rating_number">4.9 <span>(Total 210 reviews)</span></div>
                                    </div>
                                    <div className="percentage_divs">
                                        <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="80" data-progress-color="crimson" data-bg-color="black">
                                            <div class="inner-circle"></div>
                                            <p class="percentage">0%</p>
                                        </div>
                                        <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="80" data-progress-color="crimson" data-bg-color="black">
                                            <div class="inner-circle"></div>
                                            <p class="percentage">0%</p>
                                        </div>
                                        <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="80" data-progress-color="crimson" data-bg-color="black">
                                            <div class="inner-circle"></div>
                                            <p class="percentage">0%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="top_reviews">
                                    <h2>Top Reviews</h2>
                                    <div className="alumini_div">
                                        <img src="" alt="" />
                                        <div className="alumini_body">
                                            <h4>Mita</h4>
                                            <p>3 weeks ago</p>
                                            <span className="verified"><MdVerified /> Verified Purchase</span>
                                            <div className="rating">
                                                <div className="stars">
                                                    <span><FaStar /></span>
                                                    <span><FaStar /></span>
                                                    <span><FaStar /></span>
                                                    <span><FaStar /></span>
                                                    <span><FaStar /></span>
                                                </div>
                                            </div>
                                            <p className="tagline">The smell is gorgeous!</p>
                                            <div className="thumbs">
                                                <span><FaRegThumbsUp /></span>
                                                <span><FaRegThumbsDown /></span>
                                                <span><MdVerified /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>

            <div className="product_suggestions">
                        <h3>Suggestions</h3>
                        <Swiper
                            spaceBetween={1}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 5,
                                },
                                1100: {
                                    slidesPerView: 9,
                                },
                            }}
                            // navigation={true}
                            //  modules={[Autoplay, Pagination, Navigation]}
                            modules={[Autoplay]}
                            className="mySwiper  mb-4 w-full"
                        >
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={IMG2} alt="" />
                            </SwiperSlide>   
                            <SwiperSlide>
                                <img src={IMG3} alt="" />
                            </SwiperSlide>   
                            <SwiperSlide>
                                <img src={IMG1} alt="" />
                            </SwiperSlide>
                        </Swiper>
            </div>
        </section>
    )
}

export default International
