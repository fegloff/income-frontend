import React from "react";
import { useWallet, ConnectionRejectedError } from "use-wallet";
import Navigation from "./navigation.component"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import './header.styles.scss';


const Header: React.FC = () => {
  
  const wallet = useWallet();
  const activate = (connector: string) => wallet.connect(connector);

  const handleClick = async () => {
    console.log("handleClick");
    try {
      if (!wallet.isConnected()) {
        await activate('injected');
      } else {
        wallet.reset();
      }
      if (wallet.error) {
        console.log(wallet.error);
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
          <button className="header__actions--wallet button" onClick={handleClick}>{wallet.isConnected() ? 
            wallet.account?.substring(0,10) : 
            "Connect Wallet"}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;