import React, { useState } from "react";
import { useWallet } from "use-wallet";
import { incomeDeposit } from "web3/web3.utils";
import "./deposit.styles.scss";

const Deposit: React.FC= () => {
  const [amount, setAmount] = useState('');
  const [validationError, setValidationError] = useState('');
  const [ buttonDisable, setButtonDisable ] = useState(false);
  const wallet = useWallet();

  const handleDeposit = async () => {
    setValidationError('');
    try {
      if (wallet.isConnected()) {
        if (amount) {
          setButtonDisable(true)
          await incomeDeposit(wallet,amount,setValidationError);
          setButtonDisable(false);  
        } else {
          setValidationError('Please enter the Amount');
        }
      }
    } catch(e) {
      setButtonDisable(false);  
      console.log("catched",e);
      setValidationError('');
      setAmount('');
    }
  }
  
  const handleWithdraw = async () => {
    setValidationError('');
    try {
      if (wallet.isConnected()) {
        if (amount) {
          setButtonDisable(true)
          await incomeDeposit(wallet,amount,setValidationError);
          setButtonDisable(false);  
        } else {
          setValidationError('Please enter the Amount');
        }
      }
    } catch(e) {
      setButtonDisable(false);  
      console.log("catched",e);
      setValidationError('');
      setAmount('');
    }
  }

  return (
    <div className="deposit">
      <div className="deposit__title">Enter Amount</div>
      <p></p>
      <input
        className="deposit__input"
        type="number"
        step="1"
        placeholder="0"
        value={amount}
        onChange={e => setAmount(e.target.value)}    
      ></input>
      <span className="deposit__total--warning">{validationError}</span>
      <div className="deposit__cta">
        <button className="deposit__button button" onClick={handleDeposit} disabled={buttonDisable}>Deposit</button>
        <button className="deposit__button button" onClick={handleWithdraw} disabled={buttonDisable}>Withdraw</button>
      </div>
    </div>
  );
};

export default Deposit;