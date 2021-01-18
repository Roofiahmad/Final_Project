import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <div className="flex-col text-center mt-8">
            <h1 className="text-tosca mb-2 text-2xl lg:text-4xl">Hey, Good people! There's no such page.</h1>
            <h1 className="text-sm lg:text-lg">You get lost. Let me show you a better place, please click over here :</h1>
            <Link to="/">
                <button className="fromtop-animation btn-outline-tosca mt-8">Bring me back</button>
            </Link>
            </div>
        </div>
    )
}

export default PageNotFound;
