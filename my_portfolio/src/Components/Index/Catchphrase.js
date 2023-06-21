import React, {useState} from "react";

export default function Catchphrase ()
{

    const [state, setState] = useState(null)

    setTimeout(() => {
        setState('ready')
    }, 2000);

    return (
        state 
        ?
        <div className="catch w-fit mx-auto ">
            <p className="w-fit m-auto text-3xl text-white font-PlayFair">Ouais c'est <span className="subtitle">Greg</span></p>
        </div>
        :
        <div></div>
    )
}