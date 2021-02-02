import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MobileRegister() {
    let history = useHistory();

    useEffect(() => {
      }, []);
    
      const handleSubmitSignup = async (e) => {
        e.preventDefault();
    
        const sendaDataSignUp = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          passwordConfirmation: e.target.passwordConfirmation.value,
        };
    
        await axios.post(
            "https://talikasih.kuyrek.com:3000/user/signup",
          sendaDataSignUp
        )
        .then(response => {
            console.log(response, "signup success");
            localStorage.setItem("token", response.data.token);
            history.push("/myprofile")
            toast.success("Registration succeed!", {
                position: toast.POSITION.TOP_CENTER
            });
        })
        .catch(err => {
            console.log("INI TUH ERROR MESSAGE", err.response);
                if(err.response.data.errors.email !== undefined) {
                    toast.error(err.response.data.errors.email.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

                if(err.response.data.errors.name !== undefined) {
                    toast.error(err.response.data.errors.name.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

                if(err.response.data.errors.password !== undefined) {
                    toast.error(err.response.data.errors.password.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

                if(err.response.data.errors.passwordConfirmation !== undefined) {
                    toast.error(err.response.data.errors.passwordConfirmation.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })        
        };
    return (
        <div className="bg-silk h-screen pt-14 pb-14">
            <div className="mx-auto text-center">
                <div className="">
                    <div className="max-w-xs w-full m-auto bg-white rounded p-5 shadow-md">
                        <header>
                            <div>
                                <h1 className="mb-5 text-tosca text-4xl font-bold">Register</h1>
                            </div>
                        </header>
                        <form onSubmit={(e) => handleSubmitSignup(e)}>
                            <div>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="text" name="name" placeholder="Name"/>
                            </div>
                            <div>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="email" name="email" placeholder="Email"/>
                            </div>
                            <div>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="password" name="password" placeholder="Password"/>
                            </div>
                            <div>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="password" name="passwordConfirmation" placeholder="Confirm Password"/>
                            </div>
                            <div>          
                                <button class="w-full bg-tosca cursor-pointer text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Login</button>
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

export default MobileRegister;
