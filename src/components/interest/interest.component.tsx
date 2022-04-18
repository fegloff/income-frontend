import { useState } from "react";
import { useEffect } from "react";
import { getApy } from "web3/anchor/anchor";
import "./interest.styles.scss";

const Interest: React.FC = () => {
  const [apy, setApy ] = useState("");
  const date = new Date();

  useEffect(()=>{
    getApy().then((result) => {
      setApy(result || "");     
    })
  })
  
  return (
    <div className="interest">
      <div className="interest__title">Interest APY</div>
      <div className="interest__ratio">{apy}%</div>
      <div className="interest__date">{date.toDateString()}</div>
    </div>
  );
};

export default Interest;
