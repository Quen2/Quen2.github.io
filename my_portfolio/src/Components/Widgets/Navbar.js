import React from "react";
import { Link } from "react-router-dom";

export default function Navbar ()
{
    return (
        <div className="flex gap-8 bg-stone-800 text-white w-screen">
            <Link to="/">Index</Link>
            <Link to="/about">About Me</Link>
        </div>
    )
}