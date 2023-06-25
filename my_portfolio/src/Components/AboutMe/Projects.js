import React, {useState} from "react";
import Meetic from "../Projects/Meetic";
import Twitter from "../Projects/Twitter";
import Spotify from "../Projects/Spotify";
import Quizz from "../Projects/Quizz";

export default function Projects ()
{

    const [state, setState] = useState('')

    return (
        <div className="bg-stone-600 pt-10">
            <h2 id="projects" className="text-white text-center text-3xl font-PlayFair p-2 border w-fit mx-auto rounded-3xl mb-10">Mes projets</h2>
            <div className="bg-stone-600 flex flex-col gap-8 p-10">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-1/4 border text-center text-lg lg:text-xl text-white rounded-3xl cursor-pointer flex justify-center" 
                    onClick={(event) => {
                        setState('meetic')
                    }}>
                        <h2 className="self-center">My_meetic</h2>
                    </div>
                    <div className="w-full lg:w-3/4">
                        {state === 'meetic' 
                        ?
                        <Meetic />
                        :
                        <div></div>
                        }
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-3/4">
                        {state === 'twitter' 
                        ?
                        <Twitter />
                        :
                        <div></div>
                        }
                    </div>
                    <div className="lg:w-1/4 border text-center text-lg lg:text-xl text-white rounded-3xl cursor-pointer flex justify-center"
                    onClick={(event) => {
                        setState('twitter')
                    }}>
                        <h1 className="self-center">My_twitter</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-1/4 border text-center text-lg lg:text-xl text-white rounded-3xl cursor-pointer flex justify-center"
                    onClick={(event) => {
                        setState('spotify')
                    }}>
                        <h1 className="self-center">My_Spotify</h1>
                    </div>
                    <div className="w-full lg:w-3/4">
                        {state === 'spotify' 
                        ?
                        <Spotify />
                        :
                        <div></div>
                        }
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-3/4">
                        {state === 'quizz' 
                        ?
                        <Quizz />
                        :
                        <div></div>
                        }
                    </div>
                    <div className="lg:w-1/4 border text-center text-lg lg:text-xl text-white rounded-3xl cursor-pointer flex justify-center"
                    onClick={(event) => {
                        setState('quizz')
                    }}>
                        <h1 className="self-center">My_quizz</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}