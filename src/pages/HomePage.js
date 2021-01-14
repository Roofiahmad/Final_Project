import React from 'react';
import DownloadSection from '../components/DownloadSection';
import HomeJumbotron from '../components/HomeJumbotron';
import NewCampaignHome from '../components/NewCampaignHome';
import TrendingTopic from '../components/TrendingTopic';

function HomePage() {
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
