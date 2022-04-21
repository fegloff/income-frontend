import { useState } from "react";
import "./deposit.styles.scss";

const Deposit: React.FC= () => {
  const [title, setTitle] = useState('Your Total Deposit');
  const [amount, setAmount] = useState(0.0);

  return (
    <div className="deposit">
    <div className="deposit__title">{title}</div>
    <div className="deposit__total--small">{amount.toFixed(2)} ONE</div>
    <div className="deposit__total--medium">{amount.toFixed(2)}</div>
    <span className="deposit__total--warning">Not Enough!</span>
    <div className="deposit__cta">
      <button className="deposit__button button">Deposit</button>
      <button className="deposit__button button">Withdraw</button>
    </div>
  </div>
  );
};

export default Deposit;
