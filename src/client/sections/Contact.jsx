import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSubmit} from "../lib/useSubmit";
import {postJson} from "../lib/http";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {TextField} from "@mui/material";

const useStyles = makeStyles({
    root: {
        "& input:-internal-autofill-selected": {
            '-webkit-box-shadow': '0 0 0 100px #3e2c3e inset',
            '-webkit-text-fill-color': '#c3c3c3'
        },
        "& .MuiFormLabel-root": {
            color: "#c3c3c3",
            borderWidth: '2px',
        },
        '& label.Mui-focused': {
            color: 'white',
            borderWidth: '2px',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
            borderWidth: '2px',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',

            '& fieldset': {
                borderColor: '#6e85b2',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
                borderColor: '#525252',
                borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6e85b2',
                borderWidth: '2px',
            },
        },
    }});

export default function Contact () {
    const classes = useStyles();

    const toastId = React.useRef(null);

    const emailSubmitting = () => toastId.current = toast("Please wait", {theme: "dark", autoClose: 5000});
    const emailError = () => {
        toast.update(toastId.current, {
            render: "Something went wrong, please try again!",
            type: toast.TYPE.ERROR
        })
    }
    const emailSuccess = () => {
        toast.update(toastId.current, {
            render: "Email successfully sent!",
            type: toast.TYPE.SUCCESS
        })
    }

    const { handleSubmit: handleEmail, submitting, error } = useSubmit(
        async () => {
            emailSubmitting();
            await postJson("/api/mail",  {
                name: formik.values.name,
                email: formik.values.email,
                message: formik.values.body,
            });
        },
        () => {
            formik.resetForm();
            emailSuccess();
        },
    );

    if (error) {
        emailError()
    }

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
            //This should be optional Formik team... Please fix!
        }
    });

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
                                   onBlur={formik.handleBlur}
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
                                   onBlur={formik.handleBlur}
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
                                   onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}
                                   value={formik.values.message}
                                   variant="outlined"
                                   multiline
                                   rows={5}
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