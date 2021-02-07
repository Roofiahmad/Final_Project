import React, { useState, useEffect } from "react";
import PostComment from "./PostComment";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import defaultPictureProfile from '../assets/blank_profile.png'

export default function CommentCampaignDetail(props) {
    let campaignId = useParams().campaignId;
    const [arrayComments, setComments] = useState("");
    const [slicedArrayComments, setSlicedArrayComments] = useState([]);

    useEffect(() => {
      getData();
    }, [campaignId]);

    async function getData() {
      await axios.get(
        `https://talikasih.kuyrek.com:3004/comment/get/campaign?campaign_id=${campaignId}&page=1&limit=50`
      )
      .then((response) => {
          setComments(response.data.data);
          console.log(arrayComments);
          setSlicedArrayComments(response.data.data.slice(0,2))
      })
      .catch((err) => console.log(err))
    }

    
  return (
<div className="border border-gray-300  lg:px-10 px-6 lg:py-2 lg:mt-10 mt-6 lg:rounded rounded-md">
      <p className="lg:text-xl text-base font-semibold mt-4 lg:mb-8 mb-4 ">{arrayComments.length >0 ? `Comments (${arrayComments.length})` : "No Comments Yet"}</p>
      {props.role === "donatur" ? <PostComment /> : null}
      {slicedArrayComments.length > 0 ? slicedArrayComments.map((comments, index) => {
        return (
      <div key={index} className=" border-t-2 border-gray-300 lg:py-8 py-4 frombottom-animation ">
        <div className="flex flex-row gap-3">
        <div className="lg:w-24 lg:h-24 w-14 h-14 ">
          <img
            src={comments.user.profile_image === "https://talikasih.kuyrek.com:3000/img/null" ? defaultPictureProfile :comments.user.profile_image}
            alt="donatur"
            className="rounded-md"
          />
        </div>
        <div className={"w-6/12"}>
          <p className="lg:text-lg text-sm">{comments.user.name}</p>
          <p className="text-gray-400 lg:text-lg text-sm">{moment(comments.created_at).startOf('minute').fromNow()}</p>
        </div>
        </div>
        <p className="mt-2 lg:text-lg text-sm">
          {comments.comment}
        </p>
      </div>
        );
      })
       :null}
{ arrayComments.length > 2 ?<button onClick={() => slicedArrayComments.length <=2 ? setSlicedArrayComments(arrayComments) : setSlicedArrayComments(arrayComments.slice(0,2)) } className="btn-outline-tosca uppercase mb-6 lg:mt-10 mx-auto block lg:w-1/6 lg:text-base text-sm">
{slicedArrayComments.length <=2 ? 'load more' : 'show less'}
      </button> :null}
    </div> 
  );
}
