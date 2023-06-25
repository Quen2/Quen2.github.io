import React from "react";
import Carousel from "./Carousel";
import linkedin from "../../Assets/linkedin.svg"
import github from "../../Assets/github.svg"
import gmail from "../../Assets/gmail.svg"
import Cv from "../../Assets/QuentinCv.pdf"
import { Link } from "react-scroll";

export default function Catchphrase ()
{

    return (
        <div className="catch">
            <div className="border w-3/4 lg:w-1/2 mx-auto p-4 rounded-3xl bg-stone-400 text-stone-800 mb-12">
                <p className="w-fit m-auto text-xl lg:text-3xl font-PlayFair text-center">Bienvenue</p>
                <p className="w-fit m-auto text-xl lg:text-2xl font-PlayFair mt-2 text-center">Sur le portfolio de Quentin Guidez</p>
                <p className="w-fit m-auto text-base lg:text-xl font-PlayFair mt-2 text-center">Etudiant à Epitech, je suis à la recherche d'une alternance dans le développement web</p>
                <p className="w-fit m-auto text-xl lg:text-2xl font-PlayFair mt-4 px-4 py-2 text-white rounded-3xl bg-stone-600">
                    <a href={Cv} download onClick={() => window.open(Cv, '_blank')}>
                        Télécharger mon Cv
                    </a>
                </p>
                <p className="w-fit m-auto text-base lg:text-xl font-PlayFair mt-5 text-center mb-2">Mes réseaux</p>
                <div className="flex justify-center gap-8">
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
            <div className="bg-stone-600">
                <Carousel />
            </div>
        </div>
    )
}