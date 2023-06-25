import React from "react";
import { Link } from "react-scroll";
import mail from "../../Assets/mail.svg"
import map from "../../Assets/map.svg"
import phone from "../../Assets/phone.svg"
import linkedin from "../../Assets/linkedin.svg"
import github from "../../Assets/github.svg"
import gmail from "../../Assets/gmail.svg"

export default function Footer ()
{
    return (
        <div className="bg-white flex flex-col lg:flex-row lg:w-3/4 mx-auto justify-evenly lg:justify-between p-10 gap-8">
            <div className="flex flex-col bg-stone-400 p-5 rounded-3xl text-white font-PlayFair text-xl text-center">
                <p>A la recherche de mon alternance, je me tiens à votre entière disposition</p>
                <div className="flex lg:flex-col lg:mx-auto justify-center gap-8 my-5">
                    <a href="https://www.linkedin.com/in/quentin-guidez-659295241/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} className="w-10 h-10 hover:scale-125 cursor-pointer" alt="logo-linkedin"></img>
                    </a>
                    <a href="https://github.com/Quen2" target="_blank" rel="noopener noreferrer">
                        <img src={github} className="w-10 h-10 hover:scale-125 cursor-pointer" alt="logo-github"></img>
                    </a>
                    <Link to="contactForm" smooth={true} duration={500}>
                        <img src={gmail} className="w-10 h-10 hover:scale-125 cursor-pointer" alt="logo-gmail"></img>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col bg-stone-400 p-5 gap-8 rounded-3xl text-center">
                <p className="text-white font-Indie text-3xl">Quentin Guidez</p>
                <div className="flex gap-2">
                    <img src={map} className="w-6 h-6" alt="logo-map"></img>
                    <div className="flex flex-col text-white font-PlayFair text-xl">
                        <p>23 Rue des Piats</p>
                        <p>59200, Tourcoing </p>
                    </div>
                </div>
                <div className="flex gap-2 text-white font-PlayFair text-xl">
                    <img src={phone} className="w-6 h-6" alt="logo-phone"></img>
                    <p>(+33)7.78.46.75.08</p>
                </div>
                <div className="flex gap-2 text-white font-PlayFair text-xl">
                    <img src={mail} className="w-6 h-6" alt="logo-mail"></img>
                    <p>Voltzex@gmail.com</p>
                </div>
            </div>
        </div>
    )
}