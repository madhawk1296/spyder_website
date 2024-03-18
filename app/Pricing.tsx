import kanit from "@/fonts/kanit";
import Plan from "./Plan";
import PlanFeature from "./PlanFeature";

export default function Pricing() {
    return (
        <div className="flex flex-col gap-8 pt-[50px] items-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className={`text-5xl ${kanit.bold} text-gray-700 tracking-wide`}>The easiest way to build subgraphs</h1>
                <h1 className={`text-2xl ${kanit.light} text-gray-700 tracking-wide text-center`}>Save weeks of dev time and headache<br/> so you can focus on building your app.</h1>
            </div>
            <div className="flex gap-8">
                <Plan title="Starter" price={0} buttonTitle="Start for Free" >
                    <PlanFeature title="1 subgraph" />
                    <PlanFeature title="1 mapper" />
                    <PlanFeature title="0.5 GB database storage" />
                </Plan>
                <Plan highlight={true} title="Developer" price={19} buttonTitle="Get Started" >
                    <PlanFeature title="5 subgraphs" />
                    <PlanFeature title="5 mappers" />
                    <PlanFeature title="8 GB database storage" />
                    <PlanFeature title="Email support" />
                </Plan>
                <Plan title="Business" price={69} buttonTitle="Get Started" >
                    <PlanFeature title="unlimited subgraphs" />
                    <PlanFeature title="unlimited mappers" />
                    <PlanFeature title="50 GB database storage" />
                    <PlanFeature title="Email support" />
                </Plan>
            </div> 
        </div>
    )
}