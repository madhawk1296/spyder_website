import Web3, { Contract, EventLog } from "web3"
import magicABI from "@/data/abis/magicABI.json"
import { EventLog } from "ethers";
import { pgClient } from "@/clients/pg";


async function fetchEventsInRange(contract: Contract<any>, startBlock: number, endBlock: number) {
    try {
        const events = await contract.getPastEvents('allEvents', {
          fromBlock: startBlock,
          toBlock: endBlock
        }) as EventLog[];

        console.log(`Fetched ${events.length} events from block ${startBlock} to ${endBlock}`);

        const filteredEvents = events.filter(event => event.event == "Transfer")
        return filteredEvents;
    } catch (error) {
        console.error("An error occurred fetching events:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

async function uploadEvents(events: EventLog[]) {
    const values = events.map(event => {
        const { transactionHash, logIndex, returnValues } = event
        const id = `${transactionHash}-${logIndex}`
        const from = returnValues["from"]
        const to = returnValues["to"]
        const value = returnValues["value"] as bigint

        return `('${id}', '${from}', '${to}', '${value.toString()}')`
    }).join(", ")

    const pg = pgClient()
    await pg.connect();

    await pg.query(`INSERT INTO "transfers"."transfers" ("id", "from", "to", "value") VALUES ${values};`)

    await pg.end()

    console.log("Successfully uploaded events to database")
}

export async function startMapping(startingBlock: number, batchSize: number = 10000) {
    const web3 = new Web3("https://arbitrum-mainnet.infura.io/v3/bd6b99700a18414692a3cd47123bbfff")
    const contract = new web3.eth.Contract(magicABI, "0x539bde0d7dbd336b79148aa742883198bbf60342");

    const latestBlock = await web3.eth.getBlockNumber();
    let batchStart = startingBlock;

    while (batchStart <= latestBlock) {
        let batchEnd = Math.min(batchStart + batchSize - 1, Number(latestBlock.toString()));
    
        try {
          const batchEvents = await fetchEventsInRange(contract, batchStart, batchEnd);
          
          batchEvents?.length > 0 && await uploadEvents(batchEvents)
        } catch (error) {
          console.error(`Error:`, error);
        }
    
        batchStart = batchEnd + 1;
      }
}