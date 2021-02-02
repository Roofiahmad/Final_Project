import React from 'react';
import { Link } from 'react-router-dom';

function DonateSuccess() {
    return (
        <div className="mx-5 mt-52 mb-52">
            <div className="flex-col text-center mt-8">
            <h1 className="text-tosca mb-2 text-2xl lg:text-4xl">Donation Succeed</h1>
            <h1 className="text-sm lg:text-lg">Magic will happen in a few seconds...</h1>
            {/* <Link to="/">
                <button className="fromtop-animation btn-outline-tosca mt-8">Bring me back</button>
            </Link> */}
            </div>
        </div>
    )
}

export default DonateSuccess;
