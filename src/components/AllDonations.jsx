import React, { useState } from 'react';
import sort from '../assets/sort.svg';
import open from '../assets/open.svg';
import pending from '../assets/pending.svg';
import finish from '../assets/finish.svg';
import reject from '../assets/reject.svg';
import setting from '../assets/setting.svg';

export default function AllDonations(props) {
    console.log(props.filteredCampaign)
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    return (
      <div className="mx-auto w-10/12 mt-10 lg:mt-16 mb-10 border border-solid p-6 lg:mb-16">
        <div className="flex justify-between align-middle">
          <h2 className="text-tosca font-bold">All Donations</h2>
          <input type="text" placeholder="search" className="border border-solid p-1 px-2 text-md"/>
        </div>
        <table className="mt-2 w-full" >
          <thead>
            <tr className="grid grid-cols-7 justify-items-start mt-10 P-1 pl-4 gap-4">
              <th className="text-gray-400 font-normal text-sm col-span-3 w-full flex justify-between">
                <p>Campaign Title</p>
                <img src={sort} alt=""/>
              </th>
              <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
                <p>Donation Status</p>
                <img src={sort} alt=""/>
                </th>
              <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
                <p>Amount</p>
                <img src={sort} alt=""/>
              </th>
              <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
                <p>Donations Proof</p>
                <img src={sort} alt=""/>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.filteredCampaign.map((campaign, index) => {
              return(
                <tr key={index} className="grid grid-cols-7 justify-items-start Py-4 pl-4">
              <td className="col-span-3">
                <p className="font-bold underline">{campaign.title}</p>
                <p className="text-gray-400 text-sm">by {campaign.user.name}</p>
              </td>
              <td className="flex items-start gap-2">
                <div className="flex gap-2 items-center">
                  <img src={campaign.status==="open" ? open : campaign.status=="pending" ? pending : campaign.status=="finish" ? finish : campaign.status=="rejected" ? reject : null} alt=""/>
                  <p className="font-bold uppercase">{campaign.status}</p>
                </div>
              </td>
              <td>
                <p>IDR {numberWithCommas(campaign.goal)}</p>
                <p className="text-gray-400 text-sm" >from</p>
                <p className="text-sm">{campaign.user.name}</p>
              </td>
              <td className="justify-self-center">
                  <a target="blank" href={"https://gusinfo.com/wp-content/uploads/2019/07/Contoh-Nota-transaksi-di-BNI-banking.jpg"}>
                  <img className="w-12 h-20" src={"https://gusinfo.com/wp-content/uploads/2019/07/Contoh-Nota-transaksi-di-BNI-banking.jpg"} />
                  </a>
              </td>
              <td className="justify-self-end">
                <img id ={index} src={setting} alt="" onClick={(e) => props.dropdownHandler(e.target.id)}/>
                {campaign.dropdown ? (
                          <div className="z-10 absolute shadow-md bg-white mr-20 -ml-28 py-2 px-3 font-normal text-md text-left mt-2">
                          <ul className="hover:">
                              <li onClick={(e)=> props.updateType("open", campaign.id)} className="campaign-text-setting text-md" >Approve Donation</li>
                              <li onClick={(e)=> props.updateType("rejected", campaign.id)} className="campaign-text-setting text-md">Reject Donation</li>
                          </ul>
                          </div>
                      ) : null}
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}
