import React from "react";
import logoComp from "../../Assets/carousel1.svg";
import logoMe from "../../Assets/carousel2.svg"
import logoContact from "../../Assets/mail-line.svg"
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselHome ()
{
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true} transitionTime={500} interval={2000} swipeable={true} emulateTouch={true} axis="vertical">
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoMe} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <Link to="aboutMe" smooth={true} duration={500}>
                    <p className="legend">
                        A propos de Moi 
                    </p>
                </Link>
            </div>
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoComp} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <Link to="projects" smooth={true} duration={500}>
                    <p className="legend">
                        Mes projets 
                    </p>
                </Link>
            </div>
            <div className="text-center w-3/4 lg:w-1/2 h-[45vh] mx-auto bg-stone-400 border relative rounded-xl opa">
                <div className="border rounded-xl h-full bgCar">
                    <img src={logoContact} alt="carouselImg" className="w-full h-full filt"></img>
                </div>
                <Link to="contact" smooth={true} duration={500}>
                    <p className="legend">
                        Me contacter 
                    </p>
                </Link>
            </div>
        </Carousel>
    )
}