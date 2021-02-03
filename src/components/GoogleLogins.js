import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import { useHistory } from "react-router-dom";


function GoogleLogins() {
    let history = useHistory();
    let [email, setEmail] = useState();
    let [name, setName] = useState();
    let [password, setPassword] = useState();


    let responseGoogleSuccess = (response) => {
        console.log(response);
        setEmail(response.profileObj.email);
        setName(response.profileObj.name);
        setPassword("AlmerSayangSherary");

        let data = {
            name: name,
            email: email,
            password: password,
        }
        axios.post("https://talikasih.kuyrek.com:3000/user/login/google",
        data)
        .then(response => {
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("bank_number", response.data.user.bank_account_number);
            history.push("/")
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
