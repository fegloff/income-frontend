import Web3 from "web3";

window.ethereum.enable();

export const AUST_CONTRACT = process.env.REACT_APP_AUST_CONTRACT_ADDRESS;
export const Web3Client = new Web3(window.web3.currentProvider);

const ABI = [ 
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

export const getTokenBalance = async (walletAddress, tokenAddress, setBalance) => {
  const contract = new Web3Client.eth.Contract(ABI, tokenAddress);
  const result = await contract.methods.balanceOf(walletAddress).call(); 
  setBalance(parseFromWei(result));
}

export const parseFromWei = (wei) => {
  return parseFloat(Web3Client.utils.fromWei(wei)).toFixed(2); 
}
