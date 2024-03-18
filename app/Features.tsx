import kanit from "@/fonts/kanit";
import FeatureTab from "./FeatureTab";

export default function Features() {
    return (
        <div className="flex flex-col items-center gap-4 pt-[30px]">
            <h1 className={`text-4xl ${kanit.bold} text-gray-700 tracking-wide`}>How It Works</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-3">
                    <FeatureTab selected={true} title="1. Build a Subgraph" subtitle="Create a custom database to store blockchain data." />
                    <FeatureTab title="2. Scrape the Blockchain" subtitle="Listen to smart contract events and upload them to your database" />
                    <FeatureTab title="3. Query your Subgraph" subtitle="Integrate your app by querying your subgraph" />
                </div>
                <div className="w-[800px] h-[500px] border-2 rounded-lg shadow"></div>
            </div>
        </div>
    )
}