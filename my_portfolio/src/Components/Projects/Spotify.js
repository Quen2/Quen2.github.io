import React from "react";
import Spotify2 from "../../Assets/screenSpotify2.png"
import Spotify3 from "../../Assets/screenSpotify3.png"
import react from "../../Assets/react.svg"

export default function Spotify ()
{
    return (
        <div className="border fade">
            <h2 className="text-center text-white font-Indie text-xl lg:text-2xl">My_spotify</h2>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl">Projet réalisé en 2 jours</p>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Framework utilisé : </p>
            <div className="flex justify-evenly">
                <img src={react} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-react"></img>
            </div>
            <p className="text-white text-center font-PlayFair text-xl lg:text-2xl my-2">Objectif : Apprendre l'utilisation de React, avec un rendu en Single Page, des appels de components ainsi que l'utilisation d'une API pour un projet</p>
            <div className="flex flex-col lg:flex-row">
                <img src={Spotify2} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenSpotifyProject2"></img>
                <img src={Spotify3} className="w-3/4 h-3/4 mx-auto lg:w-1/4 lg:h-1/4 my-2" alt="screenSpotifyProject2"></img>
            </div>
        </div>
    )
}