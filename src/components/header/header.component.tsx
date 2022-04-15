import React from "react";
import { useWeb3React } from '@web3-react/core'
import { injected } from "../../web3/connectors";
import { Web3Provider } from '@ethersproject/providers';
import { useEffect } from "react";
import Navigation from "./navigation.component"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {  } from '@fortawesome/react-fontawesome';
import './header.styles.scss';

const Header: React.FC = () => {
  
  const { error, activate, deactivate, active, chainId, account } = useWeb3React<Web3Provider>();
  
  const handleClick = async () => {
    console.log("handleClick");
    try {
      if (!active) {
        await activate(injected);
        console.log("CONNECT",active,chainId,error,account);
      } else {
        await deactivate();
        console.log("DISCONNECT");
      } 
    } catch(e) {
      console.log(e);
    }

  }
 
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <div className="header__logo-emblem"></div>
          <div className="header__logo-type"></div>
        </div>
        <Navigation />
        <div className="header__actions">
          <button className="header__actions--theme button">
            <FontAwesomeIcon
              className="icon header__icon"
              icon={faMoon}
              size="xs"
            />
          </button>
          <button className="header__actions--wallet button" onClick={handleClick}>{active ? account?.substring(0,10) : "Connect Wallet"}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;