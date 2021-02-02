import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";


function Footer() {
    return (
        <div>
            <div className="flex flex-wrap justify-between w-10/12 mt-16 mb-5 gap-8 mx-auto md:flex-nowrap">
                <div className="">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flex flex-wrap gap-8 w-full md:w-auto flex-wrap md:gap-20 ">
                    <div className="w-full md:w-auto">
                        <h1 className="font-semibold text-tosca">FUNDRAISE FOR</h1>
                        <Link to="/discoverbycategory/education">
                        <h1 className="font-light text-sm cursor-pointer mt-5">Education</h1>
                        </Link>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Disabilities</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Hospital Bills</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Religious</h1>
                    </div>
                    <div className="w-full md:w-auto">
                        <h1 className="flex font-semibold text-tosca">LEARN MORE</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-5">How we can help</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">FAQ</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Blog</h1>
                    </div>
                    <div className="w-full mb-4 md:w-auto">
                        <h1 className="font-semibold text-tosca">RESOURCES</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-5">Contact</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">About</h1>
                        <h1 className="font-light text-sm cursor-pointer mt-2">Career</h1>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <h1 className="font-light text-sm w-10/12 my-6 mx-auto">TaliKasih &copy; 2020. All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
