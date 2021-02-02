import React, { useState, useEffect } from "react";
import axios from "axios";

const MyWallet = () => {

  const userId = localStorage.getItem("id");
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [myWallet, setMyWallet] = useState([]);
  const [slicedWallet, setSlicedWallet] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const url = `https://talikasih.kuyrek.com:3001/campaign/user?user_id=${userId}&page=1&limit=100`;
    axios.get(url).then((response) => {
      setMyWallet(response.data.data);
      setSlicedWallet(response.data.data.slice(0,2))
      console.log("myWallet", myWallet);
    });
  }
  return (
    <div className={`w-11/12 mt-10 mb-10 lg:mt-16 lg:mb-16 mx-auto border border-solid p-5 lg:pb-5 pb-8  ${myWallet.length >2 ? 'lg:pb-6' : 'lg:pb-14'}`}>
      <h2 className="font-bold text-xl mb-5">My Wallet ({myWallet.length})</h2>
      <div className="grid grid-cols-1 gap-8 w-11/12 mx-auto md:grid-cols-2">
        {slicedWallet.map((wallet) => (
          <div className="shadow-md p-5 fromtop-animation">
            <a className="text-base font-bold underline uppercase ">{wallet.title}</a>
            <p className="text-tosca font-bold text-base my-2">
              Total Donation: IDR {numberWithCommas(wallet.total_donation_rupiah)}
            </p>
            <p className="text-rose font-bold text-base my-2">
              My Wallet: IDR {numberWithCommas(wallet.wallet)}
            </p>
          </div>
        ))}
      </div>
      {myWallet.length > 2 ?<div className="w-max mt-6 mx-auto">
        <button onClick={slicedWallet.length > 2 ? 
        () => setSlicedWallet(myWallet.slice(0,2)): 
        () => setSlicedWallet(myWallet)} 
        className="btn-outline-tosca uppercase">
        {slicedWallet.length >2 ? "show less": "show more"}
        </button>
      </div> : null}
    </div>
  );
};

export default MyWallet;
