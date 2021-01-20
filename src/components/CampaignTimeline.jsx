import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CampaignTimeline(props) {
  const token = localStorage.getItem("token");
  const campaignId = props.campaignId;
  const [withdrawalData, setWithdrawalData] = useState([]);

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
        setWithdrawalData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWithdrawalData();
  }, [props]);

  console.log(withdrawalData);

  return (
    <div className="border border-gray-300 shadow px-4 py-2 my-10">
      <p className="text-xl font-semibold my-4">Updates({withdrawalData.length})</p>
      <div>
        {/* <!-- component --> */}
        <div className="relative w-12/12  m-4">
          <div
            className="border-r-4 border-tosca absolute h-full top-0"
            style={{ left: "11px" }}
          ></div>
          <ul className="list-none m-0 p-0 ">
            <li className="mb-2 ">
              <div className="flex items-center mb-1">
                <div className="bg-tosca rounded-full h-6 w-6"></div>
                <div className="flex-1 ml-4 font-medium uppercase">
                  Today
                  <span className="normal-case text-sm text-gray-300">
                    - Recepient Update
                  </span>
                </div>
              </div>
              <div className="ml-12 mr-12 border border-gray-300 shadow p-4 my-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum hic minus officia rem voluptas facilis deleniti
                  quia! Modi esse reprehenderit dolores enim cumque inventore
                  aliquid facere quibusdam tenetur eaque aut consectetur quo
                  molestias nihil delectus cupiditate, possimus sint sapiente
                  ratione doloribus velit. Nihil voluptas qui itaque quisquam.
                  Iusto quisquam, molestias incidunt architecto officiis quaerat
                  tempore, voluptas totam, itaque deserunt ex. Exercitationem
                  necessitatibus aliquid quae. Officiis, modi minus temporibus
                  ipsam, laborum impedit quidem sit obcaecati et, quos pariatur
                  necessitatibus quod a error iste. Magnam eveniet rem ipsam.
                  Pariatur eveniet velit earum ut, numquam corrupti officiis
                  nesciunt commodi? Vero doloribus provident mollitia.
                </p>
              </div>
            </li>
            <li className="mb-2 ">
              <div className="flex items-center mb-1">
                <div className="bg-tosca rounded-full h-6 w-6"></div>
                <div className="flex-1 ml-4 font-medium uppercase">
                  Yesterday
                  <span className="normal-case text-sm text-yellow-300 rounded-md border border-yellow-300 p-1 m-2">
                    Withdrawal
                  </span>
                </div>
              </div>
              <div className="ml-12 mr-12 border border-gray-300 shadow p-4 bg-gray-100 my-3 ">
                <p className="text-lg font-semibold">Rp 20.000.000</p>
                <p> Withdrawal purpose: pay surgery bill</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button className="uppercase btn-outline-tosca my-5 mx-auto block">
        show older
      </button>
    </div>
  );
}
