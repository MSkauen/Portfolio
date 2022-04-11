import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function Contact () {
    return (
        <div className="contact">
            <div className="section">
            <div className="contact-innerRef"/>
            <h1>Contact</h1>
                <div className="contact-card">
                    <h2>Get In Touch</h2>
                    <form className="contact-form" action="" method="get" encType="text/plain">
                        <div>
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </div>
                        <div>
                            <input type="text" name="email" id="email" placeholder="Enter email"/>
                        </div>
                        <div>
                            <textarea name="comments" rows="12" cols="35" placeholder="Your message."/>
                        </div>
                    </form>

                    <button className="btn">
                        <SendRoundedIcon height="50%"/>
                    </button>

                </div>
            </div>
        </div>
    )
}