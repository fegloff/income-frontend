import Web3 from "web3";

export const AUST_CONTRACT = "0x4D9d9653367FD731Df8412C74aDA3E1c9694124a";
const Web3Client = new Web3(window.ethereum); 
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
  const format = parseFloat(Web3Client.utils.fromWei(result)).toFixed(2); 
  setBalance(parseFromWei(result));
  console.log(format);
}

export const parseFromWei = (wei) => {
  return parseFloat(Web3Client.utils.fromWei(wei)).toFixed(2); 
}
