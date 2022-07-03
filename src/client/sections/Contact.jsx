import React, {useState} from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function Contact () {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const mailToLink = 'mailto:mathias.skauen.harestad@gmail.com?subject='+'&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/'
    return (
        <div className="contact">
            <div className="section">
                <div className="contact-innerRef"/>
                <h1>Contact</h1>

                <div className="contact-card">
                    <h3>Get In Touch</h3>
                    <hr/>

                    <form className="contact-form" action="" method="get" encType="text/plain">
                            <input type="text" name="name" id="name" placeholder="Name" onChange={setSubject}/>
                            <input type="text" name="email" id="email" placeholder="Enter email"/>
                            <textarea name="comments" rows="12" cols="35" placeholder="..."/>
                    </form>
                    <a href={mailToLink}>
                        <button className="btn">
                            <SendRoundedIcon height="50%"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}