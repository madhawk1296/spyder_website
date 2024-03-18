'use client'

import numeral from "numeral";
import Rows from "./Rows";
import Column from "./Column";
import { getPageCount } from "@/tools/browser/database";
import { ChangeEvent, useState } from "react";
import PageButton from "./PageButton";

export default function Table({ subgraph, collection, columns, rowCount }: { subgraph: string, collection: string, columns: {column_name: string}[], rowCount: number }) {
    const pageCount = getPageCount(rowCount)
    const [currentPage, setCurrentPage] = useState(1)

    const changePage = (value: number) => {
        if(value < 1) {
            setCurrentPage(1)
        } else if (value > pageCount){
            setCurrentPage(pageCount)
        } else {
            setCurrentPage(value)
        }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        changePage(Math.round(Number(e.target.value)))        
    }

    const backwardPage = () => {
        changePage(currentPage - 1)
    }

    const forwardPage = () => {
        changePage(currentPage + 1)
    }

    return (
        <>
            <div style={{gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`}} className={`w-fit min-h-[30px] h-[30px] overflow-y-auto grid gap-[1px] bg-gray-300 border-b border-r border-gray-300`}>
                {columns.map((column, index) => <Column key={index} index={index} column={column} />)}
            </div>
            <Rows subgraph={subgraph} collection={collection} columns={columns} currentPage={currentPage} />
            <div className="w-full min-h-[40px] h-[40px] bg-white border-t flex items-center px-[20px] gap-2">
                <PageButton onClick={backwardPage} backwards={true} />
                <h1 className="text-xs font-medium text-gray-800">
                    Page <input onChange={handleInput} type="number" className="w-[50px] py-[5px] px-[10px] bg-gray-200 rounded outline-gray-500 hide-spinners" value={currentPage} /> of {numeral(pageCount).format("0,0")}  
                </h1>
                <PageButton onClick={forwardPage} />
                <h1 className="text-xs text-gray-600 font-medium">{numeral(rowCount).format("0,0")} records</h1>
            </div>
        </>
    )
}