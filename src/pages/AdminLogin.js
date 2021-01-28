import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    let history = useHistory();
    const [role] = useState(localStorage.getItem("role"));

    useEffect(() => {
        kick();
      }, []);
    
      const kick = () => {
        if (role == "admin") {
          history.push("/admin");
          window.location.reload();
        }
      }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        console.log("email :", e.target.email.value);
        console.log("password :", e.target.password.value);
    
        const sendaDataLogin = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
    
        await axios.post(
          "https://talikasih.kuyrek.com:3005/admin/login",
          sendaDataLogin
        )
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            console.log(response, "login success"); 
            toast.success("Login success!", {
                position: toast.POSITION.TOP_CENTER
            });

        })
        .catch((err) => {
            console.log("INI PESAN ERROR", err.response);
            toast.error("Sorry, email or password is incorrect", {
                position: toast.POSITION.TOP_CENTER
            });
        })

        const token = localStorage.getItem("token");
        
        const config = {
            headers: {
              'Authorization': 'Bearer ' + token, 
            },
        };

        await axios.get(
            "https://talikasih.kuyrek.com:3005/admin/authorization",
            config
        )
        .then(response => {
            console.log(response, "AUTHORIZED");
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("role", response.data.user.role);
            history.push('/admin');
        })
    };
    return (
        <div>
            <div className="mx-auto text-center">
                <div className="flex h-3/4 bg-silk">
                    <div className="max-w-xs w-full m-auto bg-white rounded p-5 shadow-md">
                        <header>
                            <div>
                                <h1 className="mb-5 text-tosca text-4xl font-bold">Admin Login</h1>
                            </div>
                        </header>
                        <form onSubmit={(e) => handleSubmitLogin(e)}>
                            <div>
                                <label class="block mb-2 text-tosca" for="username">Email</label>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="email" name="email"/>
                            </div>
                            <div>
                                <label class="block mb-2 text-tosca" for="password">Password</label>
                                <input class="w-full p-2 mb-6 text-tosca border-b-2 border-gray-300 outline-none focus:bg-gray-300" type="password" name="password"/>
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

export default AdminLogin;
