import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

function DonateSuccess() {
    let {campaignId} = useParams();
    let history = useHistory();

    useEffect(() => {
       myFunction();
    }, [])
    function myFunction() {
        setTimeout(function(){ history.push(`/campaigndetail/${campaignId}`); }, 3000);
      }
    return (
        <div className="mx-5 mt-52 mb-52">
            <div className="flex-col text-center mt-8">
            <h1 className="text-tosca mb-2 text-2xl lg:text-4xl">Donation Succeed</h1>
            <h1 className="text-sm lg:text-lg">Magic will happen in a few seconds...</h1>
            </div>
        </div>
    )
}

export default DonateSuccess;
