import { useEffect, useState } from "react";

import half from "../assets/half.jpg"
import one from "../assets/one.jpg"
import newer from "../assets/new.jpeg"
import mirror from "../assets/mirror.jpg"

const Carousel = () => {

    
    const [slider, setSlider] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            if(slider > 200){
                setSlider(0)
            }
            else{
                setSlider(slider+100)
            }
        }, 3000);
    }, [slider])


    return (
        <div id="Banner" className="center full">
            <div style={{transform: `translateX(-${slider}%)`}} className="Carosels center full">
                <div className="Carosel center full">
                    {/* <img className="full" src={one} alt="" /> */}
                </div>
                <div className="Carosel center full">
                    {/* <img className="full" src={half} alt="" /> */}
                </div>
                <div className="Carosel center full">
                    {/* <img className="full" src={mirror} alt="" /> */}
                </div>
                <div className="Carosel center full">
                    {/* <img className="full" src={newer} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Carousel;