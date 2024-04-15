
import "./Gallery.css"
import one from "../../assets/pray.jpg"
import { useRef, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import {motion} from "framer-motion"

import img1 from "../../assets/choir.webp"
import img2 from "../../assets/one.jpg"
import img3 from "../../assets/pray.jpg"
import img4 from "../../assets/new.jpeg"
import img5 from "../../assets/two.jpg"
import img6 from "../../assets/port.jpg"
import Footer from "../Footer"

const Gallery = () => {

    return(
        <section id="Gallery" className="full">
            <Header />
            <Carousel />
            <div className="beginner">
                <h1 className="al-c">Invasions</h1>
                <Hidden />
                <Hidden />
                <Hidden />
                <Hidden />
            </div>
            <div className="beginner">
                <h1 className="al-c end">External Ministrations</h1>
                <Hidden />
                <Hidden />
                <Hidden />
                <Hidden />
            </div>
            <Display />
            <Footer />
        </section>
    )
}

export default Gallery


const Header = () => {

    return(
        <header className="full">
            <div className="row spBtn">
                <div className="group al-c slideLeft">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="group al-c slideLeft">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
            <div className="row spBtn">
                <div className="group al-c slideRight">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="group al-c slideRight">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
            <div className="row center">
                <p>OUR GALLERY</p>
            </div>
            <div className="row spBtn">
                <div className="group al-c slideLeft">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="group al-c slideLeft">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
            <div className="row spBtn">
                <div className="group al-c slideRight">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="group al-c slideRight">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </header>
    )
}

const Hidden = () => {
    const scrollToRef = useRef(null);

    const [open, setOpen] = useState(false)

    // Function to handle the scroll event
    const scrollToElement = () => {
        // Scroll to the referenced element
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return( 
        <article>
            <div onClick={()=>{scrollToElement();setOpen(!open)}} ref={scrollToRef} className="top spBtn">
                <h3 className="spBtn">
                    Tab Title
                </h3>
                    <ion-icon name="caret-down-outline"></ion-icon>
            </div>
            {open && <div className={`shows ${open ? "open" : "close"}`}>

            </div>}
        </article>
    )
}

const Carousel = () => {
    let i = 0;

    return(
        <section id="Carousel" className="">
            <div className="topNote note">
                <h3>All of our videos and images</h3>
                <p>Welcome to our gallery</p>
            </div>
            <div id="slider">
                {/* Add your image or video here */}
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
                <span style={{transform: `rotateY(calc(${i++}*45deg)) translateZ(350px)`}}>
                    <img src={one} alt="" />
                </span>
            </div>
            <div className="footNote note">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit perspiciatis nobis, odit saepe ipsa facere ullam maiores autem sapiente voluptatibus qui perferendis nesciunt laboriosam repellat libero sunt labore vero ratione optio asperiores corporis voluptate molestiae! Illum natus exercitationem, deserunt vero corrupti numquam aliquid. Repudiandae voluptates blanditiis voluptas doloribus culpa!</p>
            </div>
        </section>
    )
}

const Display = () => {

    const slides =[
        {image: img1},{image: img2},{image: img3},{image: img4},{image: img5},{image: img6},{image: img3},
    ]

    return(
        <div id="Display">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={true}
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
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                className="swiperContainer al-c"
            >
                {
                    slides && slides.map((slide)=>(
                        <SwiperSlide onClick={()=>{}} className="slide">
                            <motion.img whileTap={{scale: 0.95}} src={slide.image} alt="" />
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
        </div>
    )
}