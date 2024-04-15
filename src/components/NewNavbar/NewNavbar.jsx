import { NavLink } from "react-router-dom";
import "./NewNavbar.css"
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";

const NewNavbar = ({blur}) => {
    const {scrollYProgress} = useScroll()

    const color = useTransform(scrollYProgress, [0, 1], ["#fff", "#111"])

    return(
        <motion.nav id="NewNavbar" className={`spBtn ${blur && "blurry"}`}>
            <motion.div id="logo" className="center">
                BFM
            </motion.div>

            <ul id="links" className="spEven">
                <li className="center">
                    <NavLink className={"center"} to={"/"}>Home</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/about"}>About Us</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/ministries"}>Ministries</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/"}>Foundation</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/events"}>Events</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/"}>Wisdom Nuggets</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/gallery"}>Gallery</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/contact"}>Contact Us</NavLink>
                </li>
                <li className="center donateBtn" >
                    <NavLink className={"center"} to={"/donate"}>Donate</NavLink>
                </li>
            </ul>

            {/* <div id="socials" className="center">
                <a className="center" href=""><i class='bx bxl-facebook' ></i></a>
                <a className="center" href=""><i class='bx bxl-whatsapp' ></i></a>
                <a className="center" href=""><i class='bx bxl-snapchat' ></i></a>
            </div> */}
        </motion.nav>
    )
}

export default NewNavbar;