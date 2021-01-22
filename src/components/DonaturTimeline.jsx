import React, {useEffect, useState} from "react";
import axios from 'axios';
import moment from 'moment';

export default function DonaturTimeline(props) {
  const [donaturData,setDonaturData] = useState([]);
  let donaturLength = 0;
  
  const countday = (donateDate) => {
    const end = donateDate.split('T'); 
    const calc = end[0].split('-');
    const today = [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()];
    return (Number(today[0])-calc[0])*365 + (Number(today[1])-calc[1])*30 +(Number(today[2])-calc[2]);
  }
  
  useEffect(() => {
    axios.get(`https://talikasih.kuyrek.com:3002/donation/campaign/?campaign_id=${props.campaignId}&page=1&limit=4`)
        .then(response => {
          console.log(response.data.data)
          setDonaturData(response.data.data);
        })
        .catch(err => {
          console.log(err)
        })
  }, [props])

  return (
    <div className="border border-gray-300 shadow px-10 py-2 my-10 rounded-sm">
      <p className="text-xl font-semibold my-4">Donations({donaturData.length})</p>
      <div className="grid grid-cols-2 gap-8">
        {donaturData.map ((comment, index) => {
          return (
            <div key={index} className="border border-gray-300 shadow p-5 rounded-md ">
            <div style={{ display: "inline-block", width: "100px", height:"100px"}}>
              <img
                style={{width: "100px", height:"100px"}}
                src={comment.user.profile_image}
                alt="donatur image"
                className="rounded-md"
              />
            </div>
            <div
              style={{
                display: "inline-block",
                margin: "0px 20px",
                position: "relative",
              }}
            >
              <p className="text-tosca text-xl font-medium mb-5">
                Rp {comment.amount}
              </p>
              <p className="">{comment.user.name}</p>
              <p className="text-gray-400">{moment(comment.createdAt).startOf('hour').fromNow()}</p>
            </div>
            <p className="mt-2">
              {comment.message}
            </p>
          </div>
          )
        })}
      </div>
      <button className="btn-outline-tosca uppercase my-4 mx-auto block w-1/6">
        see all
      </button>
    </div>
  );
}

