import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {emailSuccess, emailError, emailSubmitting} from "../lib/toasts";
import {useSubmit} from "../lib/useSubmit";
import {postJson} from "../lib/http";
import {useStyles} from "../lib/inputStyle";
import {TextField} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact () {
    const toastId = React.useRef(null);
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255)
                .required(
                    'Name is required'),
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'E-mail address is required'),
            message: Yup
                .string()
                .max(1200)
                .required(
                    'You cannot send an empty message')
        }),
        onSubmit: () => {
            //This should be optional... Please fix!
        }
    });

    const { handleSubmit: handleEmail, submitting, error } = useSubmit(
        async () => {
            emailSubmitting(toastId);
            await postJson("/api/mail",  {
                name: formik.values.name,
                email: formik.values.email,
                message: formik.values.message,
            });
        },
        () => {
            emailSuccess(toastId);
        },
    );

    if (error) {
        emailError(toastId)
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
                        <TextField className={classes.root}
                                   error={Boolean(formik.touched.name && formik.errors.name)}
                                   helperText={formik.touched.name && formik.errors.name}
                                   label="Name"
                                   margin="normal"
                                   name="name"
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                                   variant="outlined"
                        />

                        <TextField className={classes.root}
                                   error={Boolean(formik.touched.email && formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   label="Email"
                                   margin="normal"
                                   name="email"
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                                   variant="outlined"
                        />

                        <TextField className={classes.root}
                                   error={Boolean(formik.touched.message && formik.errors.message)}
                                   helperText={formik.touched.message && formik.errors.message}
                                   label="Message"
                                   margin="normal"
                                   name="message"
                                   onChange={formik.handleChange}
                                   value={formik.values.message}
                                   variant="outlined"
                                   multiline
                                   rows={7}
                        />
                    </form>

                    <button onClick={handleEmail} disabled={!formik.isValid || !formik.dirty || submitting}
                            className="btn">
                        <SendRoundedIcon height="50%"/>
                    </button>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}