import React, {useState} from "react";
import MobileNavbar from "./MobileNavbar";

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
                <a href="#aboutMe">
                    <p className="w-full h-full" content="A propos de moi">
                        A propos de Moi 
                    </p>
                </a>
            </div>
            <div className="hidden md:block border p-2 rounded-3xl overflow-hidden navBtn">
                <a href="#projects">
                    <p className="w-full h-full" content="Mes Projets">
                        Mes Projets 
                    </p>
                </a>
            </div>
            <div className="hidden md:block border p-2 rounded-3xl overflow-hidden navBtn">
                <a href="#contact">
                    <p className="w-full h-full" content="Me Contacter">
                        Me Contacter 
                    </p>
                </a>
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