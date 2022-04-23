import { useState } from "react";
import { useWallet } from "use-wallet";
import { incomeDeposit } from "web3/web3.utils";
import "./deposit.styles.scss";

const Deposit: React.FC= () => {
  const [amount, setAmount] = useState(0.0);
  const [validationError, setValidationError] = useState('');
  const wallet = useWallet();

  const handleDeposit = () => {
    if (wallet.isConnected()) {
      incomeDeposit(wallet.account,100000000000000);
    }
  }

  return (
    <div className="deposit">
      <div className="deposit__title">Enter Amount</div>
      <p></p>
      <input
        className="deposit__input"
        type="number"
        step="0.01"
        placeholder="0.00"
      ></input>
      <span className="deposit__total--warning">{validationError}</span>
      <div className="deposit__cta">
        <button className="deposit__button button" onClick={handleDeposit}>Deposit</button>
        <button className="deposit__button button">Withdraw</button>
      </div>
    </div>
  );
};

export default Deposit;