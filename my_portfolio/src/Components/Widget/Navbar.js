import React from "react";

export default function Navbar ()
{
    return (
        <div className="bg-stone-400 text-white flex justify-around text-lg xl:text-2xl font-Indie">
            <a href="#aboutMe">
                : À propos de moi 
            </a>
            <a href="#projects">
                : Mes projets
            </a>
            <a href="#contact">
                : Me contacter
            </a>
        </div>
    )
}