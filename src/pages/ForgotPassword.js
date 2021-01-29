import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
    let history = useHistory();
    const [role] = useState(localStorage.getItem("role"));

   
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        console.log("email :", e.target.email.value);
    
        const sendEmail = {
          email: e.target.email.value,
        };
    
        await axios.post(
          "https://talikasih.kuyrek.com:3000/user/forgotpassword",
          sendEmail
        )
        .then((response) => {
            console.log(response);
            toast.success("Please check your email!", {
                position: toast.POSITION.TOP_CENTER
            });
            // history.push("/admin");

        })
        .catch((err) => {
            console.log("INI PESAN ERROR", err.response);
            toast.error("Sorry, your email is not registered!", {
                position: toast.POSITION.TOP_CENTER
            });
        })
    };
    return (
        <div>
            <div className="mx-auto text-center">
                <div className="flex h-3/4 bg-silk">
                    <div className="max-w-xs w-full m-auto bg-white rounded p-5 shadow-md">
                        <form onSubmit={(e) => handleForgotPassword(e)}>
                            <div>
                                <label class="block mb-2 text-tosca" for="username">Enter Your Email</label>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="email" name="email"/>
                            </div>
                            <div>          
                                <button class="w-full bg-tosca cursor-pointer text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Next</button>
                            </div>       
                        </form>
                        <footer>
                            <img className="w-20 mx-auto mb-5" src={logo} />
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;