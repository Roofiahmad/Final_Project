import React, { useEffect, useState } from 'react';
import axios from 'axios';
import campaignImage from '../assets/campaign-image.png';
import { Link, useParams } from 'react-router-dom';

const MyCampaign = () => {
    const id = localStorage.getItem("id");
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const [myCampaigns, setMyCampaigns] = useState([]);
    const [slicedMyCampaign, setSlicedMyCampaign] = useState([]) 
    useEffect(() => {
        getData();
      }, []);

    function getData() {
    
      axios.get(
        `https://talikasih.kuyrek.com:3001/campaign/user?user_id=${id}&page=1&limit=100`
      )
      .then((response) => {
          setMyCampaigns(response.data.data);
          setSlicedMyCampaign(response.data.data.slice(0,3))
          localStorage.removeItem("campaign_id");
      })
    }
    console.log('campaign ku',myCampaigns)
    console.log('sliced campaign',slicedMyCampaign)


  return (
    <div className="w-11/12 mt-10 mb-10 lg:mt-16 lg:mb-16 mx-auto border border-solid p-5">
      <h2 className="font-bold text-xl mb-5">My Campaign ({myCampaigns.length})</h2>
      <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
        {slicedMyCampaign.length > 0 ? slicedMyCampaign.map((campaigns) => {
          return (
        <Link to={`/campaigndetail/${campaigns.id}`}>
        <div key={campaigns.id} className="shadow-md max-w-md mx-auto item-clicked fromtop-animation">
          <img src={campaigns.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : campaigns.images} alt="" className="w-full h-52" alt="" />
          <div className="w-5/6 mx-auto pb-4 pt-2">
            <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">{campaigns.category}</p>
            <a href="#" className="font-bold mt-4">{campaigns.title}</a>
            <p className="text-sm mb-8 mt-1">{campaigns.user.name}</p>
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div className="h-full bg-tosca absolute" style={{ width: campaigns.total_donation_rupiah/campaigns.goal*100 + '%' }}></div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-sm">Raised</p>
                <p className="font-bold text-tosca">IDR {numberWithCommas(campaigns.total_donation_rupiah)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Goal</p>
                <p>IDR {numberWithCommas(campaigns.goal)}</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
        );
      })
      :null}

      </div>
     {myCampaigns.length > 3 ?<div className="w-max mt-6 mx-auto">
        <button onClick={slicedMyCampaign.length > 3 ? 
        () => setSlicedMyCampaign(myCampaigns.slice(0,3)): 
        () => setSlicedMyCampaign(myCampaigns)} className="btn-outline-tosca uppercase">
        {slicedMyCampaign.length >3 ? "show less": "show more"}
        </button>
      </div> : null}
    </div >
  )
}

export default MyCampaign;