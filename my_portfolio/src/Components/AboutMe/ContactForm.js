import React from "react";

export default function ContactForm ()
{
    return (
        <form action="https://getform.io/f/bc63ce29-fe72-4867-a7aa-c9200884aeef" method="POST" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-center" >De :</label>
                <input type="email" name="email" id="email" className="rounded-xl" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="subject" className="text-center">A propos de :</label>
                <input type="text" name="subject" id="subject" className="rounded-xl" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="text-center">Message :</label>
                <input type="text" name="message" id="message" className="rounded-xl" />
            </div>
            <input type="hidden" name="_gotcha" className="hidden"/>
            <button type="submit" className="bg-stone-200 mx-auto px-8 py-2 rounded-3xl mb-4 ">Send</button>
        </form>
    )
}