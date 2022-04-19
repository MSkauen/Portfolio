import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function Contact () {
    return (
        <div className="contact">
            <div className="section">
                <div className="contact-innerRef"/>
                <h1>Contact</h1>

                <div className="contact-card">
                    <h3>Get In Touch</h3>
                    <hr/>

                    <form className="contact-form" action="" method="get" encType="text/plain">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                            <input type="text" name="email" id="email" placeholder="Enter email"/>
                            <textarea name="comments" rows="12" cols="35" placeholder="Your message."/>
                    </form>

                    <button className="btn">
                        <SendRoundedIcon height="50%"/>
                    </button>
                </div>
            </div>
        </div>
    );
}