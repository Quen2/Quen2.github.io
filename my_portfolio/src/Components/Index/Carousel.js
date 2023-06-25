import React from "react";
import logoComp from "../../Assets/carousel1.svg";
import logoMe from "../../Assets/carousel2.svg"
import logoContact from "../../Assets/mail-line.svg"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselHome ()
{
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoMe} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <div className="absolute bottom-0 rounded-xl bg-stone-600 opacity-60 w-full">
                    <h2>A propos de moi</h2>
                </div>
            </div>
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoComp} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <div className="absolute bottom-0 rounded-xl bg-stone-600 opacity-60 w-full">
                    <h2>Mes projets</h2>
                </div>
            </div>
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoContact} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <div className="absolute bottom-0 rounded-xl bg-stone-600 opacity-60 w-full">
                    <h2>Me contacter</h2>
                </div>
            </div>
        </Carousel>
    )
}