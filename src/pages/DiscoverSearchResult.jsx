import React, { useEffect, useState } from "react";
import SearchResult from "../components/SearchResult";
import arrow from "../assets/arrow.png";
import axios from "axios";
import { Link } from "react-router-dom" 
import PaginationComp from "../components/PaginationComp";
import iconsort from '../assets/sort.png';
import CardLoading from '../components/CardLoadingCategory';

const DiscoverSearchResult = () => {
  let title = localStorage.getItem("titleCampaign");
  const [loading, setLoading] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [campaignByTitle, setCampaignByTitle] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getCampaignByTitle();
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer)
  }, []);

  function getCampaignByTitle() {
    axios.get(`https://talikasih.kuyrek.com:3001/campaign/title?title=${title}`)
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
    axios.get('https://talikasih.kuyrek.com:3001/campaign/urgen')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

const handlePopular = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/populer')
    .then((res) => {
        let thisTitle = title
        let campaign = res.data.posts
        let filters = campaign.filter((data) => data.title === thisTitle)
        setCampaignByTitle(filters)
    })
}

const handleLessDonation = (e) => {
    e.preventDefault();
    axios.get('https://talikasih.kuyrek.com:3001/campaign/donation')
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
          <div className="flex flex-wrap md:justify-between">
            <div className="w-full md:w-auto">
              <Link to="/discoverall" className="font-bold flex mb-10">
                <img src={arrow} alt="" width="20" className="mr-2 hover:cursor-pointer" />
                See all categories
              </Link>
            </div>
            <div className="w-full md:w-auto">
            <button className="font-bold flex mb-5 bg-white hover:bg-blue" onClick={() => setSortOpen(!sortOpen)}>Sort
                <img src={iconsort} alt="" width="20" className="ml-2"/>
                {sortOpen ? (
                    <div className="z-10 absolute shadow-md bg-white py-2 px-3 font-normal text-md text-left mt-8">
                    <ul className="hover:">
                        <li className="campaign-text-setting text-md" onClick={handleNewest}>Newest</li>
                        <li className="campaign-text-setting text-md" onClick={handleMostUrgent}>Most urgent</li>
                        <li className="campaign-text-setting text-md" onClick={handlePopular}>Popular</li>
                        <li className="campaign-text-setting text-md" onClick={handleLessDonation}>Less donation</li>
                    </ul>
                    </div>
                ) : null}
                </button>
            </div>
          </div>
          { loading ? (
            <CardLoading />
          ) : (
          <SearchResult campaign={campaignByTitle} /> 
          )}
        </div>
      </div>
      {/* <PaginationComp /> */}
    </div>
  );
}

export default DiscoverSearchResult;
