import React from "react";
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";

export default function Contact ()
{
    return (
        <div className="bg-stone-200">
            <h2 className="text-stone-400 text-center text-3xl font-PlayFair p-2 border border-stone-400 w-fit mx-auto rounded-3xl mb-10">Me contacter</h2>
            <Element name="contactForm" className="w-3/4 mx-auto my-10 bg-stone-400 p-10 rounded-2xl">
                <ContactForm />
            </Element>
            
        </div>
    )
}