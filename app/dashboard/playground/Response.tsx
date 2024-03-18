import kanit from "@/fonts/kanit";
import { ResponseEditor } from "@graphiql/react";

export default function Response() {
    return (
        <div className="w-full h-full relative flex flex-col overflow-hidden rounded-xl shadow-md bg-white p-[15px] gap-2">
            <h1 className={`text-gray-800 tracking-wide text-2xl ${kanit.semiBold}`}>Response</h1>
            <div className="w-full graphiql-container">
                <ResponseEditor />
            </div>
        </div>
    )
}