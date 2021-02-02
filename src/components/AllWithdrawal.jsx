import React, { useState } from 'react';
import sort from '../assets/sort.svg';
// import open from '../assets/open.svg';
// import pending from '../assets/pending.svg';
// import approve from '../assets/finish.svg';
// import reject from '../assets/reject.svg';
// import setting from '../assets/setting.svg';

export default function AllWithdrawal(props) {
    
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  
    return (
      <div className="mx-auto w-10/12 mt-10 lg:mt-16 mb-10 border border-solid p-6 lg:mb-16">
        <div className="flex justify-between align-middle">
          <h2 className="text-tosca font-bold">All Withdrawal</h2>
          <input type="text" placeholder="search" className="border border-solid p-1 px-2 text-md"/>
        </div>
        <div className="overflow-x-auto whitespace-nowrap">
        <table className="mt-2 min-w-full " >
          <thead className="grid-rows-2 w-full auto-rows-min">
            <tr className="grid grid-cols-4 justify-between gap-10 px-4">
              <th className="text-gray-400 font-normal col-span-2 text-sm w-full flex justify-between">
                <p>Campaign Title</p>
                <img src={sort} alt=""/>
              </th>
              <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
                <p>Amount</p>
                <img src={sort} alt=""/>
              </th>
              <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
                <p>Purpose</p>
                <img src={sort} alt=""/>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.filteredCampaign.map((campaign, index) => {
              return(
            <tr key={index} className="grid grid-cols-4 justify-between Py-4 px-4 gap-10 min-w-full">
              <td className="col-span-2 min-w-full">
                <p className="font-bold underline">{campaign.campaign.title}</p>
                <p className="text-gray-400 text-sm">by {campaign.user.name}</p>
              </td>
              <td className="min-w-full whitespace-nowrap ">
                <p>IDR {numberWithCommas(campaign.amount)}</p>
                <p className="text-gray-400 text-sm" >at</p>
                <p className="text-sm">{new Date(campaign.createAt).toDateString()}</p>
              </td>
              <td className="w-full whitespace-nowrap">
                  <p className="text-gray-400 text-sm text-left">{campaign.message}</p>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    )
}
