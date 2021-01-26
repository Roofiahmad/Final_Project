import React,{useEffect, useState} from "react";
import campaignImage from '../assets/campaign-image.png';
import axios from 'axios'
import { Link} from 'react-router-dom';

export default function RelatedCampaign(props) {
  const [relatedCampaignData, setRelatedCampaignData] = useState([])
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    axios.get(`https://talikasih.kuyrek.com:3001/campaign/category?category=${props.category}&page=1&limit=3`)
        .then(response => {
          // should add filter to remove campaign Id related in main page(parent component)
          //use array method filter
          const filteredCampaign = response.data.data.filter((campaign)=> {
           return campaign._id!== props.campaignId
          })
          setRelatedCampaignData(filteredCampaign);
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  return (
    <div className="mt-28 mb-10">
      <h4 className="font-bold underline mb-4">{relatedCampaignData.length >0 ? 'Related Campaign' : 'No Related Campaign'}</h4>
      <div className="grid grid-cols-1 gap-5 justify-between md:gap-14 sm:grid-cols-3">
        {relatedCampaignData.map((campaign) => {
          return (
            <div className="shadow-md" key={campaign._id}>
              <img
                src={
                  campaign.images === "https://talikasih.kuyrek.com:3001/img/"
                    ? campaignImage
                    : campaign.images
                }
                alt=""
                className="w-full h-52"
              />
              <div className="w-5/6 mx-auto pb-4 pt-2">
                <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">
                  {campaign.category}
                </p>
                <Link
                  to={`/campaigndetail/${campaign._id}`}
                  className="font-bold mt-4"
                >
                  {campaign.title}
                </Link>
                <p className="text-sm mb-8 mt-1">{campaign.user.name}</p>
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                  <div className="w-full h-full bg-gray-200 absolute"></div>
                  <div
                    className="h-full bg-tosca absolute"
                    style={{
                      width:
                        (campaign.total_donation_rupiah / campaign.goal) * 100 +
                        "%",
                    }}
                  ></div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm text-grey">Raised</p>
                    <p className="font-bold text-tosca">
                     IDR {numberWithCommas(campaign.total_donation_rupiah)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-grey">Goal</p>
                    <p>IDR {numberWithCommas(campaign.goal)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
