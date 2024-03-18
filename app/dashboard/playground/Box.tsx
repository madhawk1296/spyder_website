import Play from "@/components/icons/Play";
import kanit from "@/fonts/kanit";
import { GraphiQLProvider, QueryEditor, DocExplorer, ResponseEditor, useExecutionContext } from "@graphiql/react";

export default function Box() {
    const { run } = useExecutionContext()!;

    return (
        <div className="h-full min-w-[600px] w-[600px] bg-white shadow-md rounded-xl flex flex-col gap-2 py-[15px]">
            <div className="flex justify-between px-[15px]">
                <h1 className={`text-gray-800 tracking-wide text-2xl ${kanit.semiBold}`}>Operation</h1>
                <button onClick={run} className="h-[40px] aspect-square rounded-xl bg-red-500 shadow-md py-[10px] flex justify-center">
                    <Play />
                </button>
            </div>
                <div className="graphiql-container">
                    <QueryEditor />
                </div>
        </div>
    )
}