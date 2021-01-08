import React from 'react';

function NavbarComp() {
    return (
        <div className="bg-white h-20 shadow-md">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex items-center justify-between mx-5 lg:mx-20">
                    <div className="text-tosca flex items-center justify-between">
                        <img className=" h-7 lg:h-10 my-5" src="https://drive.google.com/uc?export=view&id=1mFBGzM1N38-Pr51DVAWXk-BFPtCjFgMM" alt="tali-kasih-logo"/>
                        <h1 className="font-medium text-2xl lg:text-3xl ml-2">TALI</h1> <span> <h1 className="font-light text-2xl lg:text-3xl">KASIH</h1></span>
                    </div>
                    <div>
                        <button className="h-7 w-7 text-tosca focus:outline-none focus:text-gray-500 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center mx-5 lg:mx-20 z-10 bg-white shadow-md rounded lg:rounded-none lg:shadow-none py-10 lg:py-0 [">
                    <div className="block px-3">
                        <button className="block h-5 w-5 text-tosca focus:outline-none focus:text-gray-500">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-tosca text-xl font-light">
                        <h1>Search</h1>
                    </div>
                    <div className="block px-3 text-sky text-sm lg:text-xl ">|</div>
                    <div className="block px-3 ">
                        <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> Login </button>
                    </div>
                    <div className="block px-3 text-sky text-sm lg:text-xl">|</div>
                    <div className="block px-3 ">
                        <button className="text-tosca text-xl font-medium focus:outline-none focus:text-gray-500"> Register </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavbarComp;
