const Web3 = require('web3');
const ethers = require('ethers');
const Contract = require('web3-eth-contract');
const env = require('../.env');
require('dotenv').config();

const infuraId = process.env.INFURA_ID
const web3 = new Web3(`https://polygon-mainnet.infura.io/v3/${infuraId}`)
	

Contract.setProvider(`https://polygon-mainnet.infura.io/v3/${infuraId}`);
const contractAddress = "0xfb55C86d2e063e666B6a5Eb757D239e538648b3e";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_token","type":"string"},{"indexed":true,"internalType":"address","name":"_contributor","type":"address"},{"indexed":false,"internalType":"uint256","name":"_reward","type":"uint256"}],"name":"contributionData","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_token","type":"string"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"contributionWithdrawalData","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"_valuation","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_totalContribution","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_isMinted","type":"bool"},{"indexed":false,"internalType":"uint256","name":"_contributorsCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"raiseData","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"},{"indexed":true,"internalType":"address","name":"_destination","type":"address"}],"name":"withdrawProfit","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getMaximumTokenSupply","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getTokenContributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getTokenContributorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"name":"getValuation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"_valuation","type":"uint256"},{"internalType":"uint256","name":"tokenSupply","type":"uint256"}],"name":"raise","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_destAddr","type":"address"}],"name":"takeProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalContributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalContributors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_tokenSymbol","type":"string"}],"name":"withdrawContribution","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const contract = new web3.eth.Contract(abi, contractAddress)

window.accountChange = async () => {
	ethereum.on('accountsChanged', function (accounts) {
		getAccount()
	})
}

window.getAccount = async () => {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

	const account = await accounts[0];
	
	if (typeof account !== 'undefined') {
		return account
	} else {
		return ""
	}
}

window.contribute = async (amount, token) => {
  let address = await getAccount()
  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        from: address,
        to: contractAddress,
        data: contract.methods.contribute(amount, token).encodeABI(),
      },
    ],
  })
  return txHash
}

window.create = async (token, valuation, supply) => {
  let address = await getAccount()
  console.log(address)
  const txHash = await ethereum
		.request({
		method: 'eth_sendTransaction',
		params: [
			{
        from: address,
        to: contractAddress,
        data: contract.methods.raise(token, valuation, supply).encodeABI(),
			},
		],
		})
    return txHash
}

window.withdraw = async (amount, token) => {
  let address = await getAccount()
  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        from: address,
        to: contractAddress,
        data: contract.methods.withdrawContribution(amount, token).encodeABI(),
      },
    ],
  })
  return txHash
}