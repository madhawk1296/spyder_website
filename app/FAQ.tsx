import kanit from "@/fonts/kanit";
import Question from "./Question";

export default function FAQ() {
    return (
        <div className="flex flex-col gap-10 pt-[75px] items-center">
            <h1 className={`text-center text-5xl ${kanit.bold} tracking-wide text-gray-700`}>Frequently Asked Questions</h1>
            <div className="flex flex-col max-w-[900px] w-full gap-4">
                <Question title="What does Spyder give me exactly?" answer="Spyder gives you the ability to fetch blockchain data and store it in a database with no code required. " />
                <Question title="What sets Spyder apart from other subgraph builders?" answer="Spyder is the only subgraph builder that lets you build subgraphs without writing a single line of code." />
                <Question title="Which networks do you support?" answer="We support Ethereum mainnet, Arbitrum, and Optimism." />
                <Question title="How much time will Spyder save me?" answer="Instead of having to host a database and create a worker to scrape the blockchain, Spyder will do this for automatically. This can save you 1-2 weeks of dev time. " />
            </div>
        </div>
    )
}