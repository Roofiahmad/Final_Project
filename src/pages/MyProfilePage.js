import React from 'react';
import MyProfile from '../components/MyProfile';
import MyDonation from '../components/MyDonation';
import MyCampaign from '../components/MyCampaign';

function MyProfilePage() {
    return (
        <div>
            <MyProfile/>
            <MyDonation/>
            <MyCampaign/>
        </div>
    )
}

export default MyProfilePage;
