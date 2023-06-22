import React from "react";
import logoComp from "../../Assets/carousel1.svg";


export default function Carousel ()
{
    return (
        <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
            <div className="border rounded-xl h-full bgCar">
                <img src={logoComp} alt="carouselImg" className="w-full h-full filt"></img>
            </div>
            <div className="absolute bottom-0 rounded-xl bg-stone-600 opacity-60 w-full">
                <h2>Mes projets</h2>
            </div>
        </div>
    )
}