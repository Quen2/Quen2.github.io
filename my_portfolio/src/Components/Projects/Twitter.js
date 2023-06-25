import React from "react";
import Twitter2 from "../../Assets/screenTwitter2.png"
import Twitter3 from "../../Assets/screenTwitter3.png"
import tailwind from "../../Assets/tailwindcss.svg"
import html from "../../Assets/html5.svg"
import css from "../../Assets/css.svg"
import php from "../../Assets/php.svg"

export default function Twitter ()
{
    return (
        <div className="border fade">
            <h2 className="text-center text-white font-Indie text-xl lg:text-2xl">My_twitter</h2>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl">Projet réalisé en 1 mois (chevauché par un projet puissance 4 de 2 semaines)</p>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Langages utilisés : </p>
            <div className="flex justify-evenly">
                <img src={html} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-HTML"></img>
                <img src={css} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-CSS"></img>
                <img src={php} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-PHP"></img>
                <img src={tailwind} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-tailwind"></img>
            </div>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Objectif : Premier gros projet à 4, s'organiser de façon efficace, garder un GitFlow ordonné tout en apprenant l'utiliastion de Tailwind</p>
            <div className="flex flex-col lg:flex-row">
                <img src={Twitter2} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenTwitterProject2"></img>
                <img src={Twitter3} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenTwitterProject2"></img>
            </div>
        </div>
    )
}