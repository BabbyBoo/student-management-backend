import { ethers } from 'ethers';

// Kết nối với nhà cung cấp (Infura hoặc Alchemy)
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const { ethers } = require('ethers');


// Kết nối với ví
const wallet = ethers.Wallet.createRandom(); // tạo ví mới
const privateKey = wallet.privateKey;
//const wallet = new ethers.Wallet(privateKey, provider);

// Địa chỉ và ABI của smart contract
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [ /* ABI của smart contract */ ];

const contract = new ethers.Contract(contractAddress, abi, wallet);

// Hàm ví dụ để thêm sinh viên
async function addStudent(name: string, age: number) {
    const tx = await contract.addStudent(name, age);
    console.log('Giao dịch đã gửi:', tx.hash);
    await tx.wait();
    console.log('Sinh viên đã được thêm!');
}

export { addStudent };
