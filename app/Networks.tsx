import kanit from "@/fonts/kanit";
import Network from "./Network";

export default function Networks() {
    return (
        <div className="flex flex-col items-center gap-4 py-[10px] px-[15px] bg-gray-50 w-fit shadow-lg rounded-lg">
          <h1 className={`${kanit.medium} text-2xl tracking-wide text-gray-600 underline`}>Supports</h1>
          <div className="flex items-center gap-7">
            <Network icon="/ethereum.png" title="Ethereum" size={30} />
            <Network icon="/arbitrum.png" title="Arbitrum" size={40} />
            <Network icon="/optimism.png" title="Optimism" size={35} />
          </div>
        </div>
    )
}