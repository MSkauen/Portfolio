import React from "react";

export default function Contact () {
    return (
        <div className="contact">
            <div className="contact-innerRef"/>
            <h1>Contact Me</h1>
            <form action="mailto:info@w3docs.com" method="get" encType="text/plain">
                <div>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <input type="text" name="email" id="email" placeholder="Enter email"/>
                </div>
                <div>
                    <textarea name="comments" rows="12" cols="35">Your message.</textarea>
                </div>
                <div>
                    <input type="submit" name="submit" value="Get In Touch"/>
                </div>
            </form>
        </div>
    )
}