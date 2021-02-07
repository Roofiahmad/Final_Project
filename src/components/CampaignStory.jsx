import React from "react";

export default function CampaignStory(props) {
  const splitStory = props.campaignData.story.split('. ')
  return (
    <div className="bg-gray-50 lg:mt-14 lg:py-8 lg:px-32 py-3 px-6 mt-6 rounded-md leading-normal">
      <h2 className="font-semibold lg:my-3 my-1 text-xl">The Story</h2>
      {splitStory.map((story) =>(
      <p className="text-justify text-xl">
         &nbsp; &nbsp;{story}.
        <br/>
      </p>
      ))}
    </div>
  );
}
