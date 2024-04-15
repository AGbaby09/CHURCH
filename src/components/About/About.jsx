import "./About.css"
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import {useState, useRef} from "react"
import profile from "../../assets/port.jpg"
import choir from "../../assets/choir.webp"
import Footer from "../Footer";

const About = () => {
    

    
    const [scrollValue, setScrollValue] = useState(0)
    
    

    return(
        <>
        
        <section id="About" className="">
            <div className="space">
                <div className="board">

                </div>
                {/* <img src={""} alt="" className="full" /> */}
                {/* <img src={choir} alt="" className="full" /> */}
                <h1 className="text">ABOUT <br /> <span className="shift">US</span></h1>
            </div>
            <div className="Bio">
                <div className="profile">
                    <div className="img center">
                        <div className="info center">
                            <h5>Pastor Benjamin Fordjour</h5>
                        </div>
                        <img src={""} alt="" />
                        {/* profile */}
                    </div>
                </div>
                <div className="graphy">
                    <h2 className="center">PROPHET BENJAMIN <br /> FORDJOUR</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum distinctio sunt corporis, totam commodi optio dolores nisi perferendis, deleniti similique delectus, aperiam ratione qui id! Voluptatibus, ea. Velit tenetur aliquam accusamus natus. Quo in delectus reprehenderit aperiam numquam deserunt soluta est odio tempore ab accusantium quod itaque, vitae ea.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum distinctio sunt corporis, totam commodi optio dolores nisi perferendis, deleniti similique delectus, aperiam ratione qui id! Voluptatibus, ea. Velit tenetur aliquam accusamus natus. Quo in delectus reprehenderit aperiam numquam deserunt soluta est odio tempore ab accusantium quod itaque, vitae ea.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum distinctio sunt corporis, totam commodi optio dolores nisi perferendis, deleniti similique delectus, aperiam ratione qui id! Voluptatibus, ea. Velit tenetur aliquam accusamus natus. Quo in delectus reprehenderit aperiam numquam deserunt soluta est odio tempore ab accusantium quod itaque, vitae ea.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum distinctio sunt corporis, totam commodi optio dolores nisi perferendis, deleniti similique delectus, aperiam ratione qui id! Voluptatibus, ea. Velit tenetur aliquam accusamus natus. Quo in delectus reprehenderit aperiam numquam deserunt soluta est odio tempore ab accusantium quod itaque, vitae ea.</p>
                </div>
            </div>
            <div id="Company" className="">
                <div className="top">
                    <div className="tab tab1">
                        <div className="tile"></div>
                        <div className="tile"></div>
                    </div>
                    <div className="tab tab2">
                        <div className="tile"></div>
                        <div className="tile"></div> 
                        <div className="tile"></div>
                    </div>
                    <div className="tab tab3">
                        <div className="tile"></div>
                        <div className="tile"></div>
                    </div>
                </div>
                <div className="mid">
                    <div className="left">
                        <h1>BENJAMIN FORDJOUR MINISTRIES</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum sapiente nemo quod et suscipit eveniet aspernatur minus cum ducimus quasi nam placeat laudantium praesentium, rerum minima fugit labore numquam aliquam a adipisci molestias inventore! Ducimus, modi recusandae molestiae rem adipisci sed ad eius expedita. Vitae recusandae iste quos velit!</p>
                    </div>
                    <div className="right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nobis obcaecati. Quisquam incidunt praesentium eum id adipisci aspernatur nihil nam cupiditate blanditiis iusto eveniet suscipit, pariatur, distinctio officiis possimus quam ullam atque expedita est natus ipsam? Sequi doloribus fuga distinctio mollitia rerum molestiae alias reprehenderit necessitatibus quae, quaerat neque commodi.</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nobis obcaecati. Quisquam incidunt praesentium eum id adipisci aspernatur nihil nam cupiditate blanditiis iusto eveniet suscipit, pariatur, distinctio officiis possimus quam ullam atque expedita est natus ipsam? Sequi doloribus fuga distinctio mollitia rerum molestiae alias reprehenderit necessitatibus quae, quaerat neque commodi.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default About;