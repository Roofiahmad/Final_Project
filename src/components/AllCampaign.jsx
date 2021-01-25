import React, { useState } from 'react';
import sort from '../assets/sort.svg';
import open from '../assets/open.svg';
import pending from '../assets/pending.svg';
import finish from '../assets/finish.svg';
import reject from '../assets/reject.svg';
import setting from '../assets/setting.svg';


const AllCampaign = () => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="mx-auto w-10/12 mt-10 lg:mt-16 mb-10 border border-solid p-6 lg:mb-16">
      <div className="flex justify-between align-middle">
        <h2 className="text-tosca font-bold">All Campaigns</h2>
        <input type="text" placeholder="search" className="border border-solid p-1 px-2 text-md"/>
      </div>
      <table className="mt-2 w-full" >
        <thead>
          <tr className="grid grid-cols-7 justify-items-start mt-10 P-1 pl-4 gap-4">
            <th className="text-gray-400 font-normal text-sm col-span-3 w-full flex justify-between">
              <p>Title</p>
              <img src={sort} alt=""/>
            </th>
            <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
              <p>Status</p>
              <img src={sort} alt=""/>
              </th>
            <th className="text-gray-400 font-normal text-sm w-full flex justify-between">
              <p>Donation</p>
              <img src={sort} alt=""/>
            </th>
            <th className="text-gray-400 font-normal text-sm w-10/12 flex justify-between">
              <p>Updates</p>
              <img src={sort} alt=""/>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-7 justify-items-start Py-4 pl-4">
            <td className="col-span-3">
              <p className="font-bold underline">Aid for necessary items to help our country</p>
              <p className="text-gray-400 text-sm">by Aksi Cepat Tanggap</p>
            </td>
            <td className="flex items-start gap-2">
              <div className="flex gap-2 items-center">
                <img src={open} alt=""/>
                <p className="font-bold">OPEN</p>
              </div>
            </td>
            <td>
              <p>IDR 30.000.000</p>
            </td>
            <td className="justify-between">
              <div>
                <p>IDR 20.000.000</p>
                <p className="text-gray-400 text-sm">Withdrawal</p>
              </div>
              <div>
                <p>4</p>
                <p className="text-gray-400 text-sm">Recipient Updates</p>
              </div>
            </td>
            <td className="ml-auto mr-4">
              <img src={setting} alt="" onClick={() => setSortOpen(!sortOpen)}/>
              {sortOpen ? (
                        <div className="z-10 absolute shadow-md bg-white mr-20 -ml-28 py-2 px-3 font-normal text-md text-left mt-2">
                        <ul className="hover:">
                            <li className="campaign-text-setting text-md">Approve Campaign</li>
                            <li className="campaign-text-setting text-md">Reject Campaign</li>
                            <li className="campaign-text-setting text-md">Edit</li>
                            <li className="campaign-text-setting text-md">Delete</li>
                        </ul>
                        </div>
                    ) : null}
            </td>
          </tr>
          <tr className="grid grid-cols-7 justify-items-start Py-4 pl-4">
            <td className="col-span-3">
              <p className="font-bold underline">Aid for necessary items to help our country</p>
              <p className="text-gray-400 text-sm">by Aksi Cepat Tanggap</p>
            </td>
            <td className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <img src={pending} alt=""/>
                <p className="font-bold">PENDING</p>
              </div>
            </td>
            <td>
              
            </td>
            <td>
              
            </td>
            <td className="ml-auto mr-4">
              <img src={setting} alt=""/>
            </td>
          </tr>
          <tr className="grid grid-cols-7 justify-items-start Py-4 pl-4">
            <td className="col-span-3">
              <p className="font-bold underline">Aid for necessary items to help our country</p>
              <p className="text-gray-400 text-sm">by Aksi Cepat Tanggap</p>
            </td>
            <td className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <img src={finish} alt=""/>
                <p className="font-bold">FINISHED</p>
              </div>
            </td>
            <td>
              <p>IDR 30.000.000</p>
            </td>
            <td>
              <p>IDR 20.000.000</p>
              <p className="text-gray-400 text-sm">Withdrawal</p>
            </td>
            <td className="ml-auto mr-4">
              <img src={setting} alt=""/>
            </td>
          </tr>
          <tr className="grid grid-cols-7 justify-items-start Py-4 pl-4">
            <td className="col-span-3">
              <p className="font-bold underline">Aid for necessary items to help our country</p>
              <p className="text-gray-400 text-sm">by Aksi Cepat Tanggap</p>
            </td>
            <td className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <img src={reject} alt=""/>
                <p className="font-bold">REJECTED</p>
              </div>
            </td>
            <td>
              
            </td>
            <td>
              
            </td>
            <td className="ml-auto mr-4">
              <img src={setting} alt=""/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllCampaign;