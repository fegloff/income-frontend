import React from "react";
import { useWeb3React } from '@web3-react/core'
import { injected } from "../../web3/connectors";
import { Web3Provider } from '@ethersproject/providers';
import { useEffect } from "react";

const Header = () => {
  
  const { connector, error, activate, deactivate, active, chainId, account } = useWeb3React<Web3Provider>();
  
  const connect = async () => {
    try {
      await activate(injected);
      console.log("CONNECT",active,chainId,error,account);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    console.log("useefect");
    console.log(active,chainId,error,account);
  },[active,chainId,account]);
  return (
    <div>Hello
      <button onClick={connect}>Connect</button>
    </div>
  )
}

export default Header;