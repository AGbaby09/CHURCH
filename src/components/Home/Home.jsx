import "./Home.css"
import {useState, useRef} from "react"
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    const images = [
        {},{},{},{},
    ]

    const [slider, setSlider] = useState(0)

    setInterval(() => {
        if(slider < 300){
            setSlider(slider + 100)
        }else{
            setSlider(0)
        }
    }, 5000);

    return(
        <>
        <section ref={ref} id="Home" className="full">
            <motion.div className="scrolling" style={{ scaleX }}/>
            <div className="carosels full" style={{transform: `translateX(-${slider}%)`}}>
                {/* <div className="carosel full"></div>
                <div className="carosel full"></div>
                <div className="carosel full"></div>
                <div className="carosel full"></div> */}
            </div>
            <div className="home-back full center">
                <motion.h1 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}>BENJAMIN FORDJOUR</motion.h1>
                <p>MINISTRIES</p>
            </div>
            <About />
            <div className="bamp full"></div>
            <Other />
        </section>
        
        </>
    )
}

export default Home;


const About = () => {
    const viewRef = useRef(null)
    const isInView = useInView(viewRef, {once: true})

    const aboutContainerRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target: aboutContainerRef, 
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1])

    const v1 = {
        hidden: {
            opacity: 0,
            // y: -50,
        },
        visible: {
            opacity: 1, 
            // y: 0,
        }
    }

    return(
        <motion.section id="About" className="">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "100% 0px -35% 0px"}}
            className="topSide">
                <h1>About Us</h1>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y:0}}
                viewport={{margin: "100% 0px -50% 0px"}}
            className="bottomSide">
                <div className="stat"></div>
                <div className="top spBtn">
                    <div className="left center">
                        <div className="tabs">

                        </div>
                    </div>
                    <div className="right">
                        <h3 className="al-c">ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolor accusamus unde? Quisquam repellendus consequatur minus mollitia assumenda harum blanditiis quasi debitis, qui doloribus earum nihil, deserunt consequuntur impedit. Quia corporis similique sit dolor, nobis rem voluptates autem cupiditate reiciendis natus ea eaque officiis accusamus laudantium blanditiis quas praesentium in nostrum sed beatae illo laboriosam repudiandae minus temporibus! Reiciendis incidunt optio eius facilis suscipit non assumenda totam officiis dolorem. Ipsa animi eum incidunt eos, itaque quas adipisci, quidem voluptates rem eligendi tempora perferendis est tenetur nesciunt veritatis aspernatur officiis corporis, doloremque consequatur. Aut consequatur saepe hic recusandae ullam ut, tempora accusamus at laudantium! Eligendi alias optio dolorem quaerat non quia vero provident sint quibusdam aliquid. Ab non aliquid eos quia accusantium sapiente, quas quod, aspernatur labore explicabo temporibus totam architecto vitae quae veritatis repudiandae dicta nemo enim corrupti similique nostrum dolor. Deleniti numquam accusamus eligendi, tempora nobis odit deserunt eos soluta facere totam quibusdam neque, illum sit officia animi architecto quisquam sint tempore. Iste minima error dolore ex at quasi nihil dolor vitae atque libero quo, delectus porro expedita nulla quibusdam cumque corporis velit. Fugiat, sequi earum porro velit commodi eos ut neque officia doloribus quibusdam cupiditate deserunt ratione provident.</p>
                    </div>
                </div>
                <div className="bottom"></div>
            </motion.div>
        </motion.section>
    )
}

const Other = () => {

    return(
        <section id="Other" className="full center">
            <div className="wrapper">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{margin: "100% 0px -20% 0px"}}
                className="Marquee">
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{margin: "100% 0px -25% 0px"}}
                className="Marquee">
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{margin: "100% 0px -30% 0px"}}
                className="Marquee">
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                    <div className="MarqueeGroup">
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                        <div className="tab"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
