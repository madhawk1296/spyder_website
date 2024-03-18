import Link from "next/link";
import DashboardContainer from "./DashboardContainer";
import kanit from "@/fonts/kanit";
import Step from "./Step";

export default function Dashboard() {
    return (
        <DashboardContainer>
            <div className="w-full flex flex-col items-center pt-[100px] gap-6 bg-gray-100">
                <h1 className={`${kanit.bold} text-5xl tracking-wide text-gray-700`}>Welcome to Spyder</h1>
                <h1 className={`${kanit.medium} text-xl text-gray-600 text-center max-w-[700px]`}>We're thrilled to have you join our community. With our platform, you'll be able to create subgraphs and scrape the blockchain with no coding required.</h1>
                <Step step={1} title="Create a Subgraph" detail="The first step is to create a subgraph. A subgraph is a database to store blockchain data that your app can query." buttonTitle="Create Subgraph" link="/dashboard/subgraphs" />
                <Step step={2} title="Create a Mapper" detail="Next we'll create a mapper. A mapper is a backend worker that constantly fetches the blockchain and maps blockchain data to your subgraph." buttonTitle="Create Mapper" link="/dashboard/mappers" />
            </div>
        </DashboardContainer>
    )
}