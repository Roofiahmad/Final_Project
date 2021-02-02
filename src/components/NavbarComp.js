import React, {useState} from 'react';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/logos.png';

function NavbarComp() {
    const [isMobile, setisMobile] = useState(false);
    const [ToggleLogin, setToggleLogin] = useState(false);
    const [ToggleRegister, setToggleRegister] = useState(false);
    const [ToggleSearch, setToggleSearch] = useState(false);
    const ToggleSwitch = () => {
        setToggleLogin(!ToggleLogin);
        setToggleRegister(!ToggleRegister);
    }

    let history = useHistory();
    const isLogged = localStorage.getItem("token");

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        // console.log("email :", e.target.email.value);
        // console.log("password :", e.target.password.value);
    
        const sendaDataLogin = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
    
        await axios.post(
          "https://talikasih.kuyrek.com:3000/user/login",
          sendaDataLogin
        )
        .then((response) => {
            // console.log(response);
            localStorage.setItem("token", response.data.token);
            // console.log(response, "login success"); 
            toast.success("Login success. Let's donate!", {
                position: toast.POSITION.TOP_CENTER
            });

        })
        .catch((err) => {
            // console.log("INI PESAN ERROR", err.response);
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
            "https://talikasih.kuyrek.com:3000/user/authorization",
            config
        )
        .then(response => {
            // console.log(response, "AUTHORIZED");
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("bank_number", response.data.user.bank_account_number);

            window.location.reload();
        })
    };

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
            window.location.reload();
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

    const handleInputChange = (e) => {
        e.target.name = e.target.value
        // console.log(e.target.name)
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            localStorage.setItem("titleCampaign", e.target.name);
            history.push("/searchresult");
            window.location.reload();
        }
    }
    
    
    return (
        <div className="bg-white h-20 shadow-md">
            <ToastContainer/>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex items-center justify-between mx-5 lg:mx-20">
                    <Link to="/">      
                        <div className="text-tosca flex items-center justify-between">
                            <img className=" h-7 lg:h-10 my-5" src={Logo} alt="tali-kasih-logo"/>
                            <h1 className="text-2xl lg:text-3xl ml-2 font-semibold">TALI</h1> <span> <h1 className="font-light text-2xl lg:text-3xl">KASIH</h1></span>
                        </div>
                    </Link>
                    <div>
                        <button onClick={() => setisMobile(!isMobile)} className="h-7 w-7 text-tosca focus:outline-none focus:text-gray-500 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isMobile ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center lg:mx-20 z-10 lg:z-0 bg-white shadow-md rounded lg:rounded-none lg:shadow-none py-10 lg:py-0 w-full lg:w-auto`}>
                    {isLogged && !ToggleSearch ? (
                    <div className="block px-3 ">
                        <Link to="/newcampaign">
                            <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none focus:text-gray-500 lg:py-1 lg:px-7 hidden lg:block"> <h1 className="font-bold"> CREATE CAMPAIGN </h1> </button>
                        </Link>
                    </div>
                    ) :null}
                    {isLogged && !ToggleSearch ? (
                    <div className="block px-3 ">
                        <Link to="/discoverall">
                            <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 lg:py-1 lg:px-7 hidden lg:block"> <h1 className="font-bold"> DONATE </h1> </button>
                        </Link>
                    </div>
                    ) :null}
                    <div className="block px-3">
                        <button onClick={() => {setToggleSearch(!ToggleSearch)}} className="block h-5 w-5 text-tosca focus:outline-none focus:text-gray-500">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    {ToggleSearch ? null :(
                    <div onClick={() => {setToggleSearch(!ToggleSearch)}} className="cursor-pointer text-tosca text-xl font-light">
                        <h1>Search</h1>
                    </div>
                    )}
                    {ToggleSearch ? (
                    <div className="fromright-animation">
                        <input placeholder="search here..." className="rounded-full bg-gray-100 px-4 py-1 focus:outline-none" name="search" type="search" onChange={handleInputChange} onKeyPress={handleKeyPress}/>
                    </div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl ">|</div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 ">
                        <button onClick={() => setToggleLogin(true)} className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500 hidden lg:block"> Login </button>
                        <Link to="/login">
                            <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500 lg:hidden"> Login </button>
                        </Link>
                    </div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl">|</div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 ">
                        <button onClick={() => setToggleRegister(true)} className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500 hidden lg:block"> Register </button>
                        <Link to="/register">
                            <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500 lg:hidden"> Register </button>
                        </Link>
                    </div>
                    ) :null}
                    {isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl font">|</div>
                    ) :null}
                    {isLogged ? (
                    <div className="block px-3">
                        <Link to="/myprofile">
                            <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> <h1 className="font-bold">My Profile</h1>  </button>
                        </Link>
                    </div>
                    ) :null}
                </div>
            </div>

            {/* ModalLogin */}
            {ToggleLogin ? (
            <div>
                <div>
                    <div className="bg-black opacity-50 absolute inset-0 flex flex-row justify-center items-center z-10"></div>
                </div>
                <div className="fromtop-animation absolute inset-0 flex flex-row justify-center items-center z-10">
                    <div className="rounded bg-modal w-3/4 lg:w-1/3 opacity-100 h-3/4 lg:h-4/5 z-10">
                        <h1 className="text-tosca font-medium text-4xl lg:text-5xl mx-10 mt-14 lg:mt-20 lg:mb-3">LOGIN</h1>
                        <a onClick={() => ToggleSwitch()} className="cursor-pointer underline text-sm lg:text-md mx-10 mt-14 lg:mt-24">
                            New user? <span className="text-tosca">Create an account</span>
                        </a>
                        <div className="flex flex-col justify-center items-center lg:mx-10" >
                            <form onSubmit={(e) => handleSubmitLogin(e)}>
                                <input name="email" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-10" type="email" placeholder="Email"/>
                                <input name="password" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96" type="password" placeholder="Password"/>
                                <button type="submit" className="focus:outline-none bg-rose text-white rounded shadow-sm block lg:text-xl lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96">LOGIN</button>
                            </form>
                        </div>
                        <div onClick={() => setToggleLogin(false)} className="cursor-pointer h-9 text-rose flex flex-col justify-center items-center lg:mx-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}

            {/* ModalRegister */}
            {ToggleRegister ? (
            <div>
                <div>
                    <div className="bg-black opacity-50 absolute inset-0 flex flex-row justify-center items-center z-10"></div>
                </div>
                <div className="fromtop-animation z-10 absolute inset-0 flex flex-row justify-center items-center">
                    <div className="rounded bg-modal w-3/4 lg:w-1/3 opacity-100 h-3/4 lg:h-4/5 z-10">
                        <h1 className="text-tosca font-medium text-4xl lg:text-5xl mx-10 mt-14 lg:mt-5 lg:mb-3">REGISTER</h1>
                        <a onClick={() => ToggleSwitch()} className="cursor-pointer underline text-sm lg:text-md mx-10 mt-14 lg:mt-24">
                            Already have an account? <span className="text-tosca">Login</span>
                        </a>
                        <div className="flex flex-col justify-center items-center lg:mx-10" >
                            <form onSubmit={(e) => handleSubmitSignup(e)}>
                                <input name="name" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="text" placeholder="Name"/>
                                <input name="email" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="email" placeholder="Email"/>
                                <input name="password" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="password" placeholder="Password"/>
                                <input name="passwordConfirmation" className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="password" placeholder="Confirm Password"/>
                                <button type="submit" className="focus:outline-none bg-rose text-white rounded shadow-sm block lg:text-xl lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96">REGISTER</button>
                            </form>
                        </div>
                        <div onClick={() => setToggleRegister(false)} className="cursor-pointer h-9 text-rose flex flex-col justify-center items-center lg:mx-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </div>
    )
};

export default NavbarComp;
