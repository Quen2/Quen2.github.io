import React from "react";
import Quizz2 from "../../Assets/screenQuizz2.png"
import Quizz3 from "../../Assets/screenQuizz3.png"
import symfony from "../../Assets/symfony.svg"
import tailwind from "../../Assets/tailwindcss.svg"


export default function Quizz ()
{
    return (
        <div className="border fade">
            <h2 className="text-center text-white font-Indie text-xl lg:text-2xl">My_quizz</h2>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl">Projet réalisé en 2 semaines</p>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Frameworks utilisés </p>
            <div className="flex justify-evenly">
                <img src={symfony} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-symfony"></img>
                <img src={tailwind} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-tailwind"></img>
            </div>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">But : Apprendre l'utilisation de Symfony, par groupe de 3, le but était de voir comment gérer un framework en groupe,en se basant sur un site déjà existant : quizz.fr</p>
            <div className="flex flex-col lg:flex-row">
                <img src={Quizz2} className="w-full h-full mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenQuizzProject2"></img>
                <img src={Quizz3} className="w-full h-full mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenQuizzProject2"></img>
            </div>
        </div>
    )
}