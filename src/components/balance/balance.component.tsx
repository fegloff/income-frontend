import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet";
import { getTokenBalance, parseFromWei, AUST_CONTRACT } from "web3/web3.utils";
import "./balance.styles.scss";

type balanceProps = {
  title?: string,
  oneTotal: number,
  ubTotal: number
}

const Balance: React.FC<balanceProps> = (props) => {
  const [austBalance, setAustBalance] = useState("0.00");
  const [oneBalance, setOneBalance] = useState("0.00");
  const wallet = useWallet();

 
  
  useEffect(()=>{
    console.log("Balance useEffect");
    if (wallet.isConnected()) {
      getTokenBalance(wallet.account,AUST_CONTRACT,setAustBalance);
    }
  },[wallet, austBalance]);

  useEffect(()=>{
    console.log("Balance useEffect");
    
    const getOneBalance = () => {
      const balance = parseFromWei(wallet.balance);
      setOneBalance(balance);
    }

    if (wallet.isConnected()) {
      getOneBalance();
    }
  },[wallet, oneBalance]);

  return (
    <div className="balance">
      <div className="balance__row">
        <div className="balance__title">ONE Available</div>
        <div className="balance__total">{oneBalance}</div>
      </div>
      <div className="balance__row">
        <div className="balance__title">aUST Balance</div>
        <div className="balance__total">{austBalance}</div>
      </div>
    </div>
  );
};

export default Balance;
