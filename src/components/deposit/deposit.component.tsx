import { useState } from "react";
import { useWallet } from "use-wallet";
import { incomeDeposit } from "web3/web3.utils";
import "./deposit.styles.scss";

const Deposit: React.FC= () => {
  const [title, setTitle] = useState('Your Total Deposit');
  const [amount, setAmount] = useState(0.0);
  const wallet = useWallet();

  const handleDeposit = () => {
    if (wallet.isConnected()) {
      incomeDeposit(wallet.account,100000000000000);
    }
  }

  return (
    <div className="deposit">
    <div className="deposit__title">{title}</div>
    <div className="deposit__total--small">{amount.toFixed(2)} ONE</div>
    <div className="deposit__total--medium">{amount.toFixed(2)}</div>
    <span className="deposit__total--warning">Not Enough!</span>
    <div className="deposit__cta">
      <button className="deposit__button button" onClick={handleDeposit}>Deposit</button>
      <button className="deposit__button button">Withdraw</button>
    </div>
  </div>
  );
};

export default Deposit;
