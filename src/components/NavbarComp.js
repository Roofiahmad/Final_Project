import React, {useState} from 'react';
import { Link } from "react-router-dom";

function NavbarComp() {
    const [isMobile, setisMobile] = useState(false);
    const [ToggleLogin, setToggleLogin] = useState(false);
    const [ToggleRegister, setToggleRegister] = useState(false);
    const ToggleSwitch = () => {
        setToggleLogin(!ToggleLogin);
        setToggleRegister(!ToggleRegister);
    }

    // localStorage.setItem("login", "yes");

    const isLogged = localStorage.getItem("login");
    
    return (
        <div className="bg-white h-20 shadow-md">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex items-center justify-between mx-5 lg:mx-20">
                    <div className="text-tosca flex items-center justify-between">
                        <img className=" h-7 lg:h-10 my-5" src="https://drive.google.com/uc?export=view&id=1mFBGzM1N38-Pr51DVAWXk-BFPtCjFgMM" alt="tali-kasih-logo"/>
                        <h1 className="text-2xl lg:text-3xl ml-2 font-semibold">TALI</h1> <span> <h1 className="font-light text-2xl lg:text-3xl">KASIH</h1></span>
                    </div>
                    <div>
                        <button onClick={() => setisMobile(!isMobile)} className="h-7 w-7 text-tosca focus:outline-none focus:text-gray-500 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isMobile ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center lg:mx-20 z-10 lg:z-0 bg-white shadow-md rounded lg:rounded-none lg:shadow-none py-10 lg:py-0 w-full lg:w-auto`}>
                    {isLogged ? (
                    <div className="block px-3 ">
                        <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none focus:text-gray-500 lg:py-1 lg:px-7"> CREATE CAMPAIGN </button>
                    </div>
                    ) :null}
                    {isLogged ? (
                    <div className="block px-3 ">
                        <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 lg:py-1 lg:px-7"> DONATE </button>
                    </div>
                    ) :null}
                    <div className="block px-3">
                        <Link to="discover-search"><button className="block h-5 w-5 text-tosca focus:outline-none focus:text-gray-500">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button></Link>
                    </div>
                    <div className="text-tosca text-xl font-light">
                        <h1>Search</h1>
                    </div>
                    {!isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl ">|</div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 ">
                        <button onClick={() => setToggleLogin(true)} className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> Login </button>
                    </div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl">|</div>
                    ) :null}
                    {!isLogged ? (
                    <div className="block px-3 ">
                        <button onClick={() => setToggleRegister(true)} className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> Register </button>
                    </div>
                    ) :null}
                    {isLogged ? (
                    <div className="block px-3 text-sky text-sm lg:text-xl">|</div>
                    ) :null}
                    {isLogged ? (
                    <div className="block px-3 ">
                        <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> My Profile </button>
                    </div>
                    ) :null}
                </div>
            </div>

            {/* ModalLogin */}
            {ToggleLogin ? (
            <div>
                <div>
                    <div className="bg-black opacity-50 absolute inset-0 flex flex-row justify-center items-center"></div>
                </div>
                <div className="absolute inset-0 flex flex-row justify-center items-center">
                    <div className="rounded bg-modal w-3/4 lg:w-1/3 opacity-100 h-3/4 lg:h-4/5 z-10">
                        <h1 className="text-tosca font-medium text-4xl lg:text-5xl mx-10 mt-14 lg:mt-20 lg:mb-3">LOGIN</h1>
                        <a onClick={() => ToggleSwitch()} className="cursor-pointer underline text-sm lg:text-md mx-10 mt-14 lg:mt-24">
                            New user? <span className="text-tosca">Create an account</span>
                        </a>
                        <div className="flex flex-col justify-center items-center lg:mx-10" >
                            <form action="">
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-10" type="text" placeholder="Email"/>
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96" type="password" placeholder="Password"/>
                                <button className="focus:outline-none bg-rose text-white rounded shadow-sm block lg:text-xl lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96">LOGIN</button>
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
                    <div className="bg-black opacity-50 absolute inset-0 flex flex-row justify-center items-center"></div>
                </div>
                <div className="absolute inset-0 flex flex-row justify-center items-center">
                    <div className="rounded bg-modal w-3/4 lg:w-1/3 opacity-100 h-3/4 lg:h-4/5 z-10">
                        <h1 className="text-tosca font-medium text-4xl lg:text-5xl mx-10 mt-14 lg:mt-5 lg:mb-3">REGISTER</h1>
                        <a onClick={() => ToggleSwitch()} className="cursor-pointer underline text-sm lg:text-md mx-10 mt-14 lg:mt-24">
                            Already have an account? <span className="text-tosca">Login</span>
                        </a>
                        <div className="flex flex-col justify-center items-center lg:mx-10" >
                            <form action="">
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="text" placeholder="Name"/>
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="text" placeholder="Email"/>
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="password" placeholder="Password"/>
                                <input className="rounded shadow-sm block lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96 lg:mt-5" type="password" placeholder="Confirm Password"/>
                                <button className="focus:outline-none bg-rose text-white rounded shadow-sm block lg:text-xl lg:mx-10 lg:my-6 my-4 lg:py-3 lg:px-5 lg:w-96">REGISTER</button>
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
