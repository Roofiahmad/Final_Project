import React, { useEffect, useState } from "react";
import SearchResult from "../components/SearchResult";
import arrow from "../assets/arrow.png";
import axios from "axios";
import { Link } from "react-router-dom" 

const DiscoverSearchResult = () => {
  let title = localStorage.getItem("titleCampaign");
  const [campaignByTitle, setCampaignByTitle] = useState([]);

  useEffect(() => {
    getCampaignByTitle();
  }, []);

  function getCampaignByTitle() {
    axios.get(`https://talikasih.kuyrek.com:3001/campaign/title?title=${title}&limit=12`)
    .then((res) => {
      setCampaignByTitle(res.data.data)
    })
  }

  const handleNewest = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/new?')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

const handleMostUrgent = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/urgen?limit=12')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

const handlePopular = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/populer?limit=12')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

const handleLessDonation = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/donation?limit=12')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

  return (
    <div>
      <div className="mt-16 mb-40">
        <div className="w-10/12 mx-auto">
          <h1 className="font-bold text-3xl mb-6">Result for "{title}"</h1>
          <Link to="/discoverall" className="font-bold flex mb-24 ">
            <img src={arrow} alt="" width="20" className="mr-2 hover:cursor-pointer" />
            See all categories
          </Link>
        </div>
      </div>
      <SearchResult campaign={campaignByTitle} newest={handleNewest} urgent={handleMostUrgent} popular={handlePopular} lessDonation={handleLessDonation} />
    </div>
  );
}

export default DiscoverSearchResult;
