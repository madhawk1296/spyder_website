import web3Client from "@/clients/web3";

export async function getLatestBlock() {
    const web3 = web3Client()
    return Number(await web3.eth.getBlockNumber());

}