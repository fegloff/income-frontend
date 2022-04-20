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
  let isSubscribed = React.useRef(true);

  useEffect(()=>{
    const getOneBalance = async () => {
      const balance = parseFromWei(wallet.balance);
      setOneBalance(balance);
    }

    if (wallet.status === 'connected' && isSubscribed) {
      getOneBalance();
      getTokenBalance(wallet.account,AUST_CONTRACT,setAustBalance);
      isSubscribed.current = false;      
    }

  },[wallet.status, wallet.account, wallet.balance]);

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
