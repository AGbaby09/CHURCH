import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    return(
        <nav id="Navbar" className="spBtn">
            <div id="logo" className="center">
                DFM
            </div>

            <ul id="links" className="spEven">
                <li className="center">
                    <NavLink className={"center"} to={"/events"}>Events</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/gallery"}>Gallery</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/ministries"}>Ministries</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/donate"}>Donate</NavLink>
                </li>
                <li className="center">
                    <NavLink className={"center"} to={"/contact"}>Contact Us</NavLink>
                </li>
            </ul>

            <div id="socials" className="center">
                <a className="center" href=""><i class='bx bxl-facebook' ></i></a>
                <a className="center" href=""><i class='bx bxl-whatsapp' ></i></a>
                <a className="center" href=""><i class='bx bxl-snapchat' ></i></a>
            </div>
        </nav>
    )
}

export default Navbar;