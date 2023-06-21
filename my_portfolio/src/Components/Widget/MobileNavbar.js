import React from "react";

export default function MobileNavbar ()
{

    return (
        <div className="flex flex-col pop">
            <div className="p-2 w-screen text-center border overflow-hidden navBtn">
                <a href="#aboutMe">
                    <p className="w-full h-full" content="A propos de moi">
                        A propos de Moi 
                    </p>
                </a>
            </div>
            <div className="p-2 border text-center overflow-hidden navBtn">
                <a href="#projects">
                    <p className="w-full h-full" content="Mes Projets">
                        Mes Projets 
                    </p>
                </a>
            </div>
            <div className="p-2 border text-center overflow-hidden navBtn">
                <a href="#contact">
                    <p className="w-full h-full" content="Me Contacter">
                        Me Contacter 
                    </p>
                </a>
            </div>
        </div>
    )   
}