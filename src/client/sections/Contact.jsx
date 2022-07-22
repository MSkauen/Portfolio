import React, {useState} from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSubmit} from "../lib/useSubmit";
import {InputField} from "../lib/InputField";
import {postJson} from "../lib/http";

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const emailSuccess = () => toast("Email successfully sent!", {theme: "dark"});
    const emailError = () => toast("Something went wrong, please try again! ", {theme: "dark"});

    const { handleSubmit: handleEmail, submitting, error } = useSubmit(
        async () => {
            await postJson("/api/mail",  {
                name: name,
                email: email,
                message: body,
            } );
        },
        () => emailSuccess(),
    );
    if (error) {
        emailError()
    }

    return (
        <div className="contact">
            <div className="section">
                <div className="contact-innerRef"/>
                <h4>Contact</h4>

                <div className="contact-card">
                    <h5>Get In Touch</h5>
                    <hr/>

                    <form className="contact-form" action="" method="post" encType="text/plain">
                            <InputField type="text" name="name" id="name" placeholder="Name" onChangeValue={setEmail}/>
                            <InputField type="text" name="email" id="email" placeholder="Your email" onChangeValue={setName}/>
                            <InputField multiLine={true} name="message" rows="12" cols="35" placeholder="..." onChangeValue={setBody}/>
                    </form>
                        <button onClick={handleEmail} className="btn">
                            <SendRoundedIcon height="50%"/>
                        </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}