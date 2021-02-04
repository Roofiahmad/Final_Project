import React, { useState, useEffect } from 'react';
import DownloadSection from '../components/DownloadSection';
import HomeJumbotron from '../components/HomeJumbotron';
import NewCampaignHome from '../components/NewCampaignHome';
import TrendingTopic from '../components/TrendingTopic';
import axios from 'axios';

function HomePage() {
    useEffect(() => {
        const token = localStorage.getItem("token");
        
        const config = {
            headers: {
              'Authorization': 'Bearer ' + token, 
            },
        };

        axios.get(
            "https://talikasih.kuyrek.com:3000/user/authorization",
            config
        )
        .then(response => {
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("bank_number", response.data.user.bank_account_number);
        })
    }, [])
    return (
        <div  className="fromtop-animation">
            <HomeJumbotron/>
            <TrendingTopic/>
            <NewCampaignHome/>
            <DownloadSection/>
        </div>
    )
};

export default HomePage;
