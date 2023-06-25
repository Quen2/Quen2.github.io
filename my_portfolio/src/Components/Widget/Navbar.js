import React, {useState} from "react";
import MobileNavbar from "./MobileNavbar";
import {Link} from "react-scroll"

export default function Navbar ()
{

    const [state, setState] = useState(null)

    function handleClick(e) 
    {
        e.target.className = "text-center fade"
        if(state)
        {
            setState(null)
        }
        else
        {
            setState(true)
        }
    }

    return (
        <div className="bg-stone-400 text-white flex justify-around text-lg xl:text-2xl font-Indie absolute w-full">
            <div className="hidden md:block border p-2 rounded-3xl overflow-hidden navBtn">
                <Link to="aboutMe" smooth={true} duration={500}>
                    <p className="w-full h-full" content="A propos de moi">
                        A propos de Moi 
                    </p>
                </Link>
            </div>
            <div className="hidden md:block border p-2 rounded-3xl overflow-hidden navBtn">
                <Link to="projects" smooth={true} duration={500}>
                    <p className="w-full h-full" content="Mes Projets">
                        Mes Projets 
                    </p>
                </Link>
            </div>
            <div className="hidden md:block border p-2 rounded-3xl overflow-hidden navBtn">
                <Link to="contact" smooth={true} duration={500}>
                    <p className="w-full h-full" content="Me Contacter">
                        Me Contacter 
                    </p>
                </Link>
            </div>
            <div className="md:hidden">
                <p onClick={handleClick} className="text-center">
                    {state ? 'X' : 'O'}
                </p>
            {state 
            ?
                <div className="text-white bg-stone-600">
                    <MobileNavbar />
                </div>
            :
                <div></div>
            }
            </div>
        </div>
    )
}