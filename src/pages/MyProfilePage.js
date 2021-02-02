import React from 'react';
import MyProfile from '../components/MyProfile';
import MyDonation from '../components/MyDonation';
import MyCampaign from '../components/MyCampaign';
import MyWallet from '../components/MyWallet';

function MyProfilePage() {
    
    return (
        <div className="fromtop-animation">
            <MyProfile/>
            <MyDonation/>
            <MyCampaign/>
        </div>
    )
}

export default MyProfilePage;
