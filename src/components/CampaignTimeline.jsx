import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CampaignTimeline(props) {
  const token = localStorage.getItem("token");
  const campaignId = props.campaignId;
  const [withdrawalData, setWithdrawalData] = useState([]);
  const [withdrawalDataSliced, setWithdrawalDataSliced] = useState([]);

  const timeCalc = (date) => {
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let old = new Date(date);
    let now = new Date();
    let time = (now.getTime() - old.getTime())/days; 
    return Math.floor(time)
  }
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function toMonth(numb) {
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    return month[numb-1];
  }

  const toLongdate = (date) =>{
    let onlydate = date.split("T");
    let numdate = onlydate[0].split('-');
    return `${numdate[2]} ${toMonth(Number(numdate[1]))} ${numdate[0]}`
  }

  const getWithdrawalData = () => {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const API = `https://talikasih.kuyrek.com:3003/update/get/?campaign_id=${campaignId}`;
    axios
      .get(API, config)
      .then((response) => {
        // console.log('original array' ,response.data.data)
        let responseData = [...response.data.data] 
        console.log('sorted array',responseData.sort((a,b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()));
        setWithdrawalData(responseData);
        setWithdrawalDataSliced(responseData.slice(0,2))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWithdrawalData();
  }, [props]);


  return (
    <div className="lg:rounded rounded-md border border-gray-300 shadow lg:px-4 lg:py-2 lg:mt-10 mt-6">
      <p className="text-2xl font-semibold mx-6 my-4">{withdrawalData.length >0 ? `Updates (${withdrawalData.length})` : "No Updates Yet"}</p>
      <div className={"lg:pb-3"}>
        <div className="relative w-12/12  m-4 ">
          <div
            className="border-r-4 border-tosca absolute h-full top-0"
            style={{ left: "11px" }}
          ></div>
          <ul className="list-none m-0 p-0 ">

            {withdrawalDataSliced.map((item) => {
              return(item.amount === 0 ? 
                <li className="mb-2 frombottom-animation">
                <div className="flex items-center mb-1">
                  <div className="bg-tosca rounded-full h-6 w-6"></div>
                  <div className="flex-1 ml-4 font-medium text-lg">
                  {timeCalc(item.updatedAt) === 0 ? "Today" : timeCalc(item.updatedAt) === 1 ? "Yesterday" : toLongdate(item.updatedAt)}
                    <span className="normal-case text-lg text-gray-300">
                      - Recepient Update
                    </span>
                  </div>
                </div>
                <div className="ml-12 lg:mr-12 border border-gray-100 shadow p-4 bg-gray-50 lg:my-3 mt-2 text-lg">
                  <p>
                    {item.message}
                  </p>
                </div>
              </li>
                : 
                <li className="mb-2 frombottom-animation">
                <div className="flex items-center mb-1">
                  <div className="bg-tosca rounded-full h-6 w-6"></div>
                  <div className="flex-1 ml-4 font-medium text-lg">
                  {timeCalc(item.updatedAt) === 0 ? "Today" : timeCalc(item.updatedAt) === 1 ? "Yesterday" : toLongdate(item.updatedAt)}
                    <span className="normal-case text-lg text-yellow-300 rounded-md border border-yellow-300 p-1 m-2 ">
                      Withdrawal
                    </span>
                  </div>
                </div>
                <div className="ml-12 lg:mr-12 border border-gray-100 shadow p-4 bg-gray-50 lg:my-3 mt-2 ">
                  <p className="text-lg font-semibold">Rp {numberWithCommas(item.amount)}</p>
                  <p className="text-lg"> Withdrawal purpose: {item.message}</p>
                </div>
              </li>
                )
            })}
          </ul>
        </div>
      </div>
      { withdrawalData.length > 2 ? <button onClick={() => withdrawalDataSliced.length <=2 ? setWithdrawalDataSliced(withdrawalData) : setWithdrawalDataSliced(withdrawalData.slice(0,2)) } className="btn-outline-tosca uppercase my-4 mx-auto block lg:max-w-max lg:text-base text-sm">
        {withdrawalDataSliced.length <=2 ? 'see older' : 'show newest'}
      </button> : null}
    </div>
  );
}
