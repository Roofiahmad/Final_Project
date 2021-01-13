import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
    return (
        <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between w-10/12 mt-28 mb-5 mx-auto">
                <div className="flex flex-col">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-tosca">FUNDRAISE FOR</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-5">Education</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Disabilities</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Hospital Bills</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Religious</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="flex font-semibold text-tosca ml-28">LEARN MORE</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-5">How we can help</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-2">FAQ</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-2">Blog</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-tosca ml-28">RESOURCES</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-5">Contact</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-2">About</h1>
                        <h1 className="font-light text-sm cursor-pointer ml-28 mt-2">Career</h1>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <h1 className="font-light text-sm w-10/12 my-6 mb-5 mx-auto">TaliKasih &copy; 2020. All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
