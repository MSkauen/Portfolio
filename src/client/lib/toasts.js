import React from "react";
import {toast} from "react-toastify";

const emailSubmitting = (i) => i.current = toast("Please wait", {theme: "dark", autoClose: 5000});

const emailError = (i) => {
    toast.update(i.current, {
        render: "Something went wrong, please try again!",
        type: toast.TYPE.ERROR
    })
}
const emailSuccess = (i) => {
    toast.update(i.current, {
        render: "Email successfully sent!",
        type: toast.TYPE.SUCCESS
    })
}
module.exports = {
    emailSubmitting: emailSubmitting,
    emailSuccess: emailSuccess,
    emailError: emailError
}