import React from "react";
import { useWeb3React } from '@web3-react/core'
import Interest from "../../components/interest/interest.component";
import Deposit from "../../components/deposit/deposit.component";
import Balance from "../../components/balance/balance.component";

const EarnPage = () => {
  const { active, chainId, account } = useWeb3React();
  console.log(active,chainId,account);

  return (
    <div className="main">
      <Interest title="Interest APY" ratio={19.57} date="April 7 2022" />
      <Deposit title="Your Total Deposit" ratioSmall={0.0} ratioMedium={0.0} />
      <Balance oneTotal={0.0} ubTotal={0.0} />

    </div>
    
  )
}

export default EarnPage;
