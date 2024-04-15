import { useState } from "react"
import "./Events.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import {motion} from "framer-motion"
import Footer from "../Footer"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"

import img1 from "../../assets/choir.webp"
import img2 from "../../assets/one.jpg"
import img3 from "../../assets/pray.jpg"
import img4 from "../../assets/new.jpeg"

const Events = () => {
    const [isPop, setISPop]= useState(true)
    const [backgroundIMG, setBackgroundIMG] = useState(img1)
    const slides =[
        {image: img1},{image: img2},{image: img3},{image: img4},
    ]

    return(
    <>
        {isPop && <div id="eventPopup" className="center">
            <div className="event">
                <button onClick={()=>{setISPop(false)}} className="close center"><i className="bx bx-x"></i></button>
            </div>
        </div>}
        <section id="Events" className="full" style={{backgroundImage: `url(${backgroundIMG})`}}>
            {/* <img src={backgroundIMG} alt="" className="evBg" /> */}
            <div className="full center eventer">
                <div className="Slider">
                    <h1 className="al-c">Upcoming Events</h1>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={false}
                        slidesPerView={"auto"}
                        coverflowEffect={
                            {
                                rotate:0, 
                                stretch: 0, 
                                depth: 100, 
                                modifier: 2.5,
                            }
                        }
                        pagination={{el:".swiperPagination", clickable:true}}
                        navigation={{
                            nextEl:".swiperButton-next",
                            prevEl:".swiperButton-prev",
                            clickable:true
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="swiperContainer al-c"
                    >
                        {
                            slides && slides.map((slide)=>(
                                <SwiperSlide onClick={()=>{setBackgroundIMG(slide.image)}} className="slide">
                                    <motion.img whileTap={{scale: 0.95}} src={slide.image} alt="" />
                                </SwiperSlide>
                            ))
                        }

                        <div className="sliderController center">
                            <button className="swiperButton-prev slideB center">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </button>
                            <div className="swiperPagination slideP spEven" style={{color: "white"}}>
                                
                            </div>
                            <button className="swiperButton-next slideB center">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="eventsList">
                <h1 className="heading center">
                    2024 LINE UP
                </h1>
                {/* <ion-icon style={{color: "red", fontSize: "50vh", position: "absolute", left: "50%", top: "50%"}} name="heart"></ion-icon> */}
                <div className="lineUp">
                    <div className="event">
                        <div className="img">
                            <img src={img1} alt="" className="full" />
                        </div>
                        <div className="info">

                        </div>
                    </div>
                    <div className="event">
                        <div className="img">
                            <img src={img1} alt="" className="full" />
                        </div>
                        <div className="info">

                        </div>
                    </div>
                    <div className="event">
                        <div className="img">
                            <img src={img1} alt="" className="full" />
                        </div>
                        <div className="info">

                        </div>
                    </div>
                    <div className="event">
                        <div className="img">
                            <img src={img1} alt="" className="full" />
                        </div>
                        <div className="info">

                        </div>
                    </div>
                    <div className="event">
                        <div className="img">
                            <img src={img1} alt="" className="full" />
                        </div>
                        <div className="info">

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="full"></div> */}
            <Footer />
        </section>
    </>
    )
}

export default Events