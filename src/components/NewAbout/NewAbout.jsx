import "./NewAbout.css"
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView, useViewportScroll } from "framer-motion";


const NewAbout = () => {
    const aboutContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: aboutContainerRef,
        offset: ["start start", "end start"],
    })
    const ty = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(()=>{
        console.log("y:", ty, "and scrollY:", scrollYProgress)
    }, [ty, scrollYProgress])
    
    const container = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type:"tween", 
                delayChildren: 2,
                ease: "easeInOut", // Added ease
                duration: 1, // Added duration
                staggerChildren:0.2,  
            }
        }
    }
    const container1 = {
        hidden: {
            background: "#fff0",
            transition: {
                type:"tween", 
                delayChildren: 0,
                ease: "easeInOut", // Added ease
                duration: 1, // Added duration
                staggerChildren:0.2,  
            }
        },
        visible: {
            background: "#fff",
            transition: {
                type:"tween", 
                delayChildren: 0,
                ease: "easeInOut", // Added ease
                duration: 1, // Added duration
                staggerChildren:0.2,  
            }
        }
    }

    return(
        <motion.section id="NewAbout" className="full" >
            <motion.div  ref={aboutContainerRef} className="aboutTop center">
                <motion.h1  whileInView="visible" viewport={{margin: "100% 0px -20% 0px"}} variants={container} initial="hidden" className="aboutTitle">ABOUT US</motion.h1>
                
            </motion.div>
            <motion.div className="hanger">
 
            </motion.div>
            <motion.div variants={container1} initial="hidden" whileInView={"visible"} viewport={{margin: "100% 0px -50% 0px"}} className="aboutPage">
                <div className="one">
                    <div className="icon">
                        <lord-icon
                            src="https://cdn.lordicon.com/rmkahxvq.json"
                            trigger="loop"
                            delay="395"
                            colors="primary:#ffffff"
                        >
                        </lord-icon>
                    </div>
                    <div className="right center">
                        <div className="clip">

                        </div>
                    </div>
                </div>
                <div className="two"></div>
            </motion.div>
        </motion.section>
    )
}
export default NewAbout; 