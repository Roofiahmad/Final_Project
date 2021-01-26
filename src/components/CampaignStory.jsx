import React from "react";

export default function CampaignStory(props) {
  return (
    <div className="bg-blue-50 lg:mt-14 lg:py-8 lg:px-32 py-6 px-10 mt-10 rounded-md leading-normal">
      <h2 className="font-bold my-3">The Story</h2>
      <p>
        {props.campaignData.story}
      </p>
    </div>
  );
}
