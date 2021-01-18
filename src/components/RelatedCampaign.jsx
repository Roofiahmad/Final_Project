import React,{useEffect, useState} from "react";
import card from "../assets/card.png";
import axios from 'axios'


export default function RelatedCampaign(props) {
  // const initialrelatedCampaign = {''}
  const [relatedCampaignData, setRelatedCampaignData] = useState('')

  useEffect(() => {
    console.log('useeffect work');
    axios.get(`https://talikasih.kuyrek.com:3001/campaign/category?category=${props.category}&page=1&limit=3`)
        .then(response => {
          // should add filter to remove campaign Id related in main page(parent component)
          //use array method filter
            console.log(response.data.data);
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  return (
    <div className="mt-28 mb-10">
      <h4 className="font-bold underline mb-4">Related Campaign</h4>
      <div className="grid grid-cols-1 gap-5 justify-between md:gap-14 sm:grid-cols-3">
        
        (<div className="shadow-md">
          <img src={card} alt="" />
          <div className="w-5/6 mx-auto pb-4 pt-2">
            <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">
              Medical
            </p>
            <p className="font-bold mt-4">
              Aid for necessary items to help our country
            </p>
            <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div
                className="h-full bg-tosca absolute"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-sm">Raised</p>
                <p className="font-bold text-tosca">IDR 30.000.000</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Goal</p>
                <p>IDR 50.000.000</p>
              </div>
            </div>
          </div>
        </div>)


      </div>
    </div>
  );
}
