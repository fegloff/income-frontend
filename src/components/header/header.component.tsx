import React from "react";
import { useWallet, ConnectionRejectedError } from "use-wallet";
import { useDispatch } from "react-redux";
import { setToastMessage } from "redux/toast/toast.actions";
import { ToastMessageTypes } from "redux/toast/toast.types";
import Navigation from "./navigation.component"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import './header.styles.scss';


const Header: React.FC = () => {
  const wallet = useWallet();
  const activate = (connector: string) => wallet.connect(connector);
  const dispatch = useDispatch();
  const networkName = process.env.REACT_APP_NETWORK_NAME;
  const handleClick = async () => {
    console.log("handleClick");
    try {
      if (!wallet.isConnected()) {
        await activate('injected');
      } else {
        wallet.reset();
      }
      if (wallet.error) {
        let errorMessage = wallet.error?.name;
        switch (wallet.error?.name) {
          case "ChainUnsupportedError":
            errorMessage = `Incorrect Network. Please change network to ${networkName}`;
            break;
          default:
            errorMessage = wallet.error?.message;
            break
        }
        console.log("WALLET ERROR",{
          name: wallet.error.name,
          message: wallet.error.message,
          stack:wallet.error.stack,
          cause:wallet.error.cause
        });
        dispatch(setToastMessage({
          type : ToastMessageTypes.ERROR,
          message : errorMessage
        }));
      }
    } catch(e) {
      dispatch(setToastMessage({
        type : ToastMessageTypes.ERROR,
        message : "Metamask connection Error"
      }));
      console.log("WALLET EXCEPTION",e);
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