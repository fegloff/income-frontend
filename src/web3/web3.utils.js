import Web3 from "web3";

import tokensABI from './contracts/tokens-abi';
import incomeABI from './contracts/income-abi';

window.ethereum.enable();

export const AUST_CONTRACT = process.env.REACT_APP_AUST_CONTRACT_ADDRESS;
const incomeAddress = process.env.REACT_APP_INCOME_CONTRACT_ADDRESS;

const Web3Client = new Web3(window.web3.currentProvider);

const getContract = (abi, address) => {
  return new Web3Client.eth.Contract(abi, address);
}

export const getTokenBalance = async (walletAddress, tokenAddress, setBalance) => {
  const contract = getContract(tokensABI, tokenAddress);
  const result = await contract.methods.balanceOf(walletAddress).call(); 
  setBalance(parseFromWei(result));
}

export const incomeDeposit = async (walletAddress, amount) => {
  const contract = getContract(incomeABI, incomeAddress);
  const result = await contract.methods.echo().send({ value: amount, from: walletAddress});
  console.log("incomeDeposit",result);
}

export const parseFromWei = (wei) => {
  return parseFloat(Web3Client.utils.fromWei(wei)).toFixed(2); 
}

export const truncateAddressString = (address, num = 12) => {
  if (!address) {
    return '';
  }
  const first = address.slice(0, num);
  const last = address.slice(-num);
  return `${first}...${last}`;
}