import Web3 from "web3";

export default function web3Client() {
    return new Web3(process.env.RPC_ETH_HTTP);

}