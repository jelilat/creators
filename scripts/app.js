const Web3 = require('web3');
const ethers = require('ethers');
const Contract = require('web3-eth-contract');
require('dotenv')

const infuraId = process.env.INFURA

const web3 = new Web3("https://polygon-mainnet.infura.io/v3/${infuraId}")
	

Contract.setProvider(`https://polygon-mainnet.infura.io/v3/id`);
const contractAddress = "0x1273ae3550174C7770bb257ff568c5CFe0B35705";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_seller","type":"address"},{"indexed":true,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"initialization","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"release","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"},{"indexed":true,"internalType":"address","name":"_destination","type":"address"}],"name":"withdrawEth","type":"event"},{"inputs":[{"internalType":"address payable","name":"_seller","type":"address"}],"name":"initializePayment","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publictotalOrders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"refundBuyer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"releaseFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_destAddr","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const contract = new Contract(abi, contractAddress)

window.initiateEscrow = async (address, amount) => {
    contract.methods.initializePayment().send({

    })
}

window.accountChange = async () =>{
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

window.makePayment = async (amount) => {
	amount = amount * 10^18

	await ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x70480bDAC3EbDbB37FF875d4aeb95d1d381bB873',
          value: amount,
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
}

window.create = async (token, valuation, supply) => {

}