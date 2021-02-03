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
    axios.get(`https://talikasih.kuyrek.com:3002/donation/campaign/?campaign_id=${props.campaignId}&page=1&limit=4`)
        .then(response => {
          setDonaturData(response.data.data);
          setDonaturDataSliced(response.data.data.slice(0,2))
        })
        .catch(err => {
          console.log(err)
        })
  }, [props])

  console.log("donatur data sliced",donaturDataSLiced)

  return (
    <div className="border border-gray-300  px-10 py-2 my-10 rounded-sm">
      <p className="text-xl font-semibold my-4">{donaturData.length >0 ? `Donations(${donaturData.length})` : "No Donations Yet"}</p>
      <div className={`flex flex-col md:flex-row md:flex-wrap gap-10 justify-items-start ${donaturData.length > 0 ? "pb-10" : ''}`}>
        {donaturDataSLiced.map ((comment, index) => {
          return (
            <div key={index} className="border border-gray-100 shadow py-5 px-3 rounded-md frombottom-animation lg:w-5/12 w-full ">
            <div style={{ display: "inline-block", width: "100px", height:"100px"}}>
              <img
                style={{width: "100px", height:"100px"}}
                src={comment.user.profile_image=== "https://talikasih.kuyrek.com:3000/img/null" ? defaultPictureProfile: comment.user.profile_image}
                alt="donatur"
                className="rounded-md"
              />
            </div>
            <div
             className={"mx-2 w-6/12"}
              style={{
                display: "inline-block",
                position: "relative",
              }}
            >
              <p className="text-tosca text-lg font-medium mb-5">
                Rp {numberWithCommas(comment.amount)}
              </p>
              <p className="">{comment.user.name}</p>
              <p className="text-gray-400">{moment(comment.createdAt).startOf('minute').fromNow()}</p>
            </div>
            <p className="mt-2">
              {comment.message}
            </p>
          </div>
          )
        })}
      </div>
{    donaturData.length > 2 ? <button onClick={() => donaturDataSLiced.length <=2 ? setDonaturDataSliced(donaturData) : setDonaturDataSliced(donaturData.slice(0,2)) } className="btn-outline-tosca uppercase mb-4 mx-auto block lg:w-1/6 sm:w-3/6">
        {donaturDataSLiced.length <=2 ? 'see all' : 'show less'}
      </button> : null}
    </div>
  );
}

