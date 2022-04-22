import { useState } from "react";
import "./deposit.styles.scss";

const Deposit: React.FC = () => {
  const [title, setTitle] = useState("Your Total Deposit");
  const [amount, setAmount] = useState<number>(0.0);

  return (
    <div className="deposit">
      <div className="deposit__title">{title}</div>
      <div className="deposit__available">{amount.toFixed(2)} ONE</div>
      <input
        className="deposit__input"
        type="number"
        step="0.01"
        placeholder="0.00"
      ></input>
      <span className="deposit__warning">Not Enough!</span>
      <div className="deposit__cta">
        <button className="deposit__button button">Deposit</button>
        <button className="deposit__button button">Withdraw</button>
      </div>
    </div>
  );
};

export default Deposit;
