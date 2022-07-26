import React from "react";
import {toast} from "react-toastify";

const pageInfo = (i) => i.current = toast(
    "This website is currently under development. \n" +
    "Feel free to look around!",
                                                {theme: "dark", type: "info", autoClose: 10000});

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
    emailError: emailError,
    pageInfo: pageInfo
}