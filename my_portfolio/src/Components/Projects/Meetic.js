import React from "react";
import Meetic2 from "../../Assets/screenMeetic2.png"
import Meetic3 from "../../Assets/screenMeetic3.png"

import html from "../../Assets/html5.svg"
import css from "../../Assets/css.svg"
import js from "../../Assets/js.svg"
import php from "../../Assets/php.svg"

export default function Meetic ()
{
    return (
        <div className="border fade">
            <h2 className="text-center text-white font-Indie text-xl lg:text-2xl">My_meetic</h2>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl">Projet réalisé en 2 semaines</p>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Langages utilisés : </p>
            <div className="flex justify-evenly">
                <img src={html} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-HTML"></img>
                <img src={css} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-CSS"></img>
                <img src={js} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-JS"></img>
                <img src={php} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-PHP"></img>
            </div>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">But : Apprendre la structure MVC (Model View Controller) et l'utiliser sur un projet concret</p>
            <div className="flex flex-col lg:flex-row">
                <img src={Meetic2} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenMeeticProject2"></img>
                <img src={Meetic3} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenMeeticProject2"></img>
            </div>
        </div>
    )
}