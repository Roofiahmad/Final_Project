import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PasswordRecovery() {
    let history = useHistory();
    let {token} = useParams();

   
    const handlePasswordRecovery = async (e) => {
        e.preventDefault();
    
        const sendNewPassword = {
          password: e.target.password.value,
          passwordConfirmation: e.target.passwordConfirmation.value,
        };
    
        await axios.put(
          `https://talikasih.kuyrek.com:3000/user/forgotpassword/form/${token}`,
          sendNewPassword
        )
        .then((response) => {
            toast.success("Yeay, you got the new password!", {
                position: toast.POSITION.TOP_CENTER
            });
            history.push("/login");

        })
        .catch((err) => {
            console.log("INI PESAN ERROR", err.response);
            toast.error("Failed to reset password!", {
                position: toast.POSITION.TOP_CENTER
            });
        })
    };
    return (
        <div>
            <div className="mx-auto text-center">
                <div className="flex h-3/4 bg-silk">
                    <div className="max-w-xs w-full m-auto bg-white rounded p-5 shadow-md">
                        <form onSubmit={(e) => handlePasswordRecovery(e)}>
                            <div>
                                <label class="block mb-2 text-tosca" for="username">Enter Your New Password</label>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="password" name="password" placeholder="New Password"/>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="password" name="passwordConfirmation" placeholder="Confirm Password"/>
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

export default PasswordRecovery;