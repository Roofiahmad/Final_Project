import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function GoogleLogins() {

    let responseGoogleSuccess = (response) => {
        let data = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            password: "Almersayangsherarydandonat123",
        }
        axios.post("https://talikasih.kuyrek.com:3000/user/login/google",
        data)
        .then(response => {
            console.log("INI RESPONSEEEEEE", response);
            localStorage.setItem("token", response.data.token);
            window.location = "/";
            toast.success("Login success. Let's donate!", {
                position: toast.POSITION.TOP_CENTER
            });
        })
    }
    let responseGoogleFail = () => {}
    return (
        <div className="flex flex-col justify-center items-center mb-4 z-20">
            <GoogleLogin
                clientId="106049491282-8199hindiign90jqo75a9s0dq3nq6893.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFail}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
};

export default GoogleLogins;
