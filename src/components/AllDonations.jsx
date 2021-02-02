import React, { useState } from 'react';
import sort from '../assets/sort.svg';
import open from '../assets/open.svg';
import pending from '../assets/pending.svg';
import finish from '../assets/finish.svg';
import reject from '../assets/reject.svg';
import setting from '../assets/setting.svg';

export default function AllDonations(props) {
    console.log('props in allDonations component', props.donationsByCategory)
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    return (
      <div className="mx-auto w-10/12 mt-10 lg:mt-16 mb-10 border border-solid p-6 lg:mb-16">
        <div className="flex justify-between align-middle">
          <h2 className="text-tosca font-bold">All Donations</h2>
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
            {props.donationsByCategory.map((donation, index) => {
              return(
                <tr key={index} className="grid grid-cols-7 justify-items-start Py-4 pl-4">
              <td className="col-span-3">
                <p className="font-bold underline">{donation.campaign.title}</p>
                <p className="text-gray-400 text-sm">by {donation.campaign.user.name}</p>
              </td>
              <td className="flex items-start gap-2">
                <div className="flex gap-2 items-center">
                  <img src={donation.isVerified ? finish : pending} alt=""/>
                  <p className="font-bold uppercase">{donation.isVerified ? "approve" : "pending"}</p>
                </div>
              </td>
              <td>
                <p>IDR {numberWithCommas(donation.amount)}</p>
                <p className="text-gray-400 text-sm" >from</p>
                <p className="text-sm">{donation.name}</p>
              </td>
              <td className="justify-self-center">
                  <a target="blank" href={donation.verification_images}>
                  <img className="w-12 h-20" src={donation.verification_images === "https://talikasih.kuyrek.com:3002/img/USING MIDTRANS" ? pending:donation.verification_images } />
                  </a>
              </td>
              <td className="justify-self-end">
                <img id ={index} src={setting} alt="" onClick={(e) => props.dropdownHandler(e.target.id)}/>
                {donation.dropdown ? (
                          <div className="z-10 absolute shadow-md bg-white mr-20 -ml-28 py-2 px-3 font-normal text-md text-left mt-2">
                          <ul className="hover:">
                              <li onClick={(e)=> props.updateType(true, donation.id)} className="campaign-text-setting text-md" >Approve Donation</li>
                              <li onClick={(e)=> props.updateType(false, donation.id)} className="campaign-text-setting text-md">Pending Donation</li>
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
