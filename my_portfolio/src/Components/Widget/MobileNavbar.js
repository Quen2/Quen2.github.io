import React from "react";
import {Link} from "react-scroll"


export default function MobileNavbar ()
{

    return (
        <div className="flex flex-col pop">
            <div className="w-screen text-center border overflow-hidden navBtn">
                <Link to="aboutMe" smooth={true} duration={500}>
                    <p className="w-full h-full" content="A propos de moi">
                        A propos de Moi 
                    </p>
                </Link>
            </div>
            <div className="border text-center overflow-hidden navBtn">
                <Link to="projects" smooth={true} duration={500}>
                    <p className="w-full h-full" content="Mes Projets">
                        Mes Projets 
                    </p>
                </Link>
            </div>
            <div className="border text-center overflow-hidden navBtn">
                <Link to="contact" smooth={true} duration={500}>
                    <p className="w-full h-full" content="Me Contacter">
                        Me Contacter 
                    </p>
                </Link>
            </div>
        </div>
    )   
}