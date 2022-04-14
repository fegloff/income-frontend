import React from "react";
import { useWeb3React } from '@web3-react/core'

const EarnPage = () => {
  const { active, chainId, account } = useWeb3React();
  console.log(active,chainId,account);

  return (
    <div>
      <h1>EARN</h1>
      <div>Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </div>
  )
}

export default EarnPage;
