import React from "react";

export default function CampaignStory(props) {
  return (
    <div className="bg-blue-50 mt-14 py-8 px-32 rounded-md leading-normal">
      <h2 className="font-bold my-3">The Story</h2>
      <p>
        {props.campaignData.story}
      </p>
    </div>
  );
}
