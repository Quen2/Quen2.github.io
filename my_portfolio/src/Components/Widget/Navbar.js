import React from "react";

export default function Navbar ()
{
    return (
        <div className="bg-stone-400 text-white flex justify-around text-lg xl:text-2xl font-Indie sticky">
            <div className="border p-2">
                <a href="#aboutMe"> 
                    À propos de moi
                </a>
            </div>
            <div className="border p-2">
                <a href="#projects">
                    Mes projets
                </a>
            </div>
            <div className="border p-2">
                <a href="#contact">
                    Me contacter
                </a>
            </div>
        </div>
    )
}