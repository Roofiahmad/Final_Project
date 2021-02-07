import React, {useEffect, useState} from "react";
import axios from 'axios';
import moment from 'moment';
import defaultPictureProfile from '../assets/blank_profile.png'

export default function DonaturTimeline(props) {
  const [donaturData,setDonaturData] = useState([]);
  const [donaturDataSLiced,setDonaturDataSliced] = useState([]);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  
  useEffect(() => {
    axios.get(`https://talikasih.kuyrek.com:3002/donation/campaign/?campaign_id=${props.campaignId}&page=1&limit=50`)
        .then(response => {
          setDonaturData(response.data.data);
          setDonaturDataSliced(response.data.data.slice(0,2))
        })
        .catch(err => {
          console.log(err)
        })
  }, [props])

  return (
    <div className="border border-gray-300  lg:px-10 px-6 lg:py-2 lg:mt-10 mt-6 lg:rounded rounded-md">
      <p className="lg:text-xl text-base font-semibold my-4">{donaturData.length >0 ? `Donations (${donaturData.length})` : "No Donations Yet"}</p>
      <div className={`flex flex-col md:flex-row md:flex-wrap lg:gap-8 gap-4 justify-between ${donaturData.length > 0 ? "lg:pb-10 pb-5" : ''}`}>
        {donaturDataSLiced.map ((comment, index) => {
          return (
            <div key={index} className="border border-gray-100 shadow py-5 px-3 rounded-md frombottom-animation lg:w-5/12 w-full ">
            <div  style={{ display: "inline-block"}}>
              <img
                src={comment.user.profile_image=== "https://talikasih.kuyrek.com:3000/img/null" || comment.name ==="Anonymous" ? defaultPictureProfile: comment.user.profile_image}
                alt="donatur"
                className="rounded-md lg:w-24 lg:h-24 w-14 h-14"
              />
            </div>
            <div
             className={"mx-2 w-6/12"}
              style={{
                display: "inline-block",
                position: "relative",
              }}
            >
              <p className="text-tosca lg:text-lg text-sm font-medium lg:mb-5 ">
                Rp {numberWithCommas(comment.amount)}
              </p>
              <p className="lg:text-lg text-sm">{comment.name.split(' ').slice(0,2).join(' ')}</p>
              <p className="text-gray-400 lg:text-lg text-sm">{moment(comment.createdAt).startOf('minute').fromNow()}</p>
            </div>
            <p className="mt-2 lg:text-lg text-sm">
              {comment.message}
            </p>
          </div>
          )
        })}
      </div>
{    donaturData.length > 2 ? <button onClick={() => donaturDataSLiced.length <=2 ? setDonaturDataSliced(donaturData) : setDonaturDataSliced(donaturData.slice(0,2)) } className="btn-outline-tosca uppercase mb-4 mx-auto block lg:w-1/6 sm:w-3/6 lg:text-base text-sm">
        {donaturDataSLiced.length <=2 ? 'see all' : 'show less'}
      </button> : null}
    </div>
  );
}

