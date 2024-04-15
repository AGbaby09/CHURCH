import NewNavbar from "../NewNavbar/NewNavbar";
import "./NewHome.css"
import img from "../..//assets/one.jpg"
import { useEffect, useState, useRef } from "react";
import Carousel from "../Carousel";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Tilt } from 'react-tilt'
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Footer from "../Footer";


const NewHome = () => {

    
    // const sermonsContainerRef = useRef(null)
    // const {scrollYProgress} = useScroll({
    //     target: sermonsContainerRef,
    //     offset: ["start start", "end end"]
    // })
    // const background = useTransform(scrollYProgress, [0, 0.5, 1], ["#fff", "#aaa", "#111"])
    
    
    return(
        <motion.section id="NewHome" className="center full">
            <NewNavbar blur={false} />
            <Carousel />
            <Desc />
            <Sermons />
            <Join />
            <Logos />
            <Footer />
        </motion.section>
    )
}


export default NewHome;

const Desc = () => {
    const container = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type:"tween", 
                delayChildren: 0,
                ease: "easeInOut", // Added ease
                duration: 0.25, // Added duration
                staggerChildren:0.2,  
            }
        },
        exit :{
            opacity: 0,    
        }
    };

    const item = {
        hidden: { x: 10, opacity: 0 },
        visible: {
            x: 0,
            opacity:1
        },
        transition: {duration:0.3 },  
        
    };

    return(
        <motion.article whileInView="visible" viewport={{margin: "100% 0px -30% 0px"}} variants={container} initial="hidden" exit={"exit"} className="Desc al-c">
            <motion.div variants={item} className="tab"></motion.div>
            <motion.div variants={item} className="tab"></motion.div>
            <motion.div variants={item} className="tab"></motion.div>
            <motion.div variants={item} className="tab"></motion.div>
        </motion.article>
    )
}

const Sermons = () => {

    const sermons = [
        {},{},{},{},{},
        {},{},{},{},{},
    ]

    const container = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type:"tween", 
                delayChildren: 0,
                ease: "easeInOut", // Added ease
                duration: 1.5, // Added duration
                staggerChildren:0.5,  
            }
        },
        exit :{
            opacity: 0,    
        }
    };
    const container1 = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                type:"tween", 
                delayChildren: 0,
                staggerChildren:0.5,  
            }
        },
    };

    const item = {
        hidden: { x: 10, opacity: 0 },
        visible: {
            x: 0,
            opacity:1
        }, 
        
    };
    const item1 = {
        hidden: { y: 10 },
        visible: {
            y: 0,
        },
        transition: {duration:0.5 },  
        
    };
    

    return(
        <motion.article initial={{opacity: 0, y: 25}} viewport={{margin: "100% 0px -50% 0px"}} whileInView={{opacity: 1, y: 0}} className="Sermons">
            <h1 className="center">
                <i className="bx bx-tv"></i>
                Latest Sermons and 
                <ion-icon name="mic-outline"></ion-icon>
                Podcasts
            </h1>
            <div className="videos spBtn">
                <div className="left center">
                    <video src=""></video>
                </div>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{margin: "100% 0px -35% 0px"}} className="right scrollable">
                    {sermons && sermons.map((sermon)=>(
                        <motion.div variants={item} className="tab spBtn">
                            <div className="vid center">
                                <div className="img center">
                                    <button className="">
                                        <ion-icon name="play-sharp"></ion-icon>
                                    </button>
                                </div>
                            </div>
                            <div className="details">
                                <h4>Vide Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolore.</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div variants={container1} className="podcasts" initial="hidden" viewport={{margin: "100% 0px -35% 0px"}} whileInView="visible">
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
                modules={[Navigation, Pagination]}
                className="full"
            >
                {
                    sermons && sermons.map((sermon)=>(
                        <SwiperSlide onClick={()=>{}} className="audio">
                                <Tilt className="full tiltcard">

                                </Tilt>
                        </SwiperSlide>
                    ))
                }

                {/* <div className="sliderController center">
                    <button className="swiperButton-prev slideB center">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>
                    <div className="swiperPagination slideP spEven" style={{color: "white"}}>
                        
                    </div>
                    <button className="swiperButton-next slideB center">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div> */}
            </Swiper>
            </motion.div>
        </motion.article>
    )
}


const Join = () => {

    const container = {
        hidden: { 
            y:"-100%", 
            opacity: 0,
            transition:{
                duration: 1.5,
            }
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                type:"tween", 
                delayChildren: 1,
                ease: "easeInOut", // Added ease
                duration: 1.5, // Added duration
                staggerChildren: 1,  
            }
        },
        exit :{
            opacity: 0,    
        }
    };

    const item = {
        hidden: { x: 10, opacity: 0 },
        visible: {
            x: 0,
            opacity:1
        },
        transition: {duration:0.3 },  
        
    };

    return(
        <motion.section id="Join" className="full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "80% 0px -25% 0px"}} variants={container} exit={"hidden"} className="flat center">
                <h1>Join our Ministries and Have an Impact Today!</h1>
                <button>Click to Join</button>
            </motion.div>
        </motion.section>
    )
}

const Logos = () => {

    return(
        <div id="Logoos">

        </div>
    )
}