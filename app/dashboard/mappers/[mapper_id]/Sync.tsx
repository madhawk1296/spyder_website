'use client'

import kanit from '@/fonts/kanit';
import numeral from 'numeral';
import Progress from './Progress';
import Button from './Button';
import Restart from '@/components/icons/Restart';
import Stop from '@/components/icons/Stop';
import Start from '@/components/icons/Start';
import { startMapper } from '@/actions/startMapper';
import { useRouter } from 'next/navigation';
import { stopMapper } from '@/actions/stopMapper';
import { restartMapper } from '@/actions/restartMapper';
import useSWR from 'swr'
import fetcher from '@/tools/fetcher';

export default function Sync({ currentBlock, latestBlock, status, mapperId }: { currentBlock: number, latestBlock: number, status: "INACTIVE" | "ACTIVE", mapperId: number}) {
    const router = useRouter()
    const { data: {data: block}, error, isLoading } = useSWR(`/api/mapper/${mapperId}`, fetcher, { refreshInterval: 1000, fallbackData: { data: currentBlock} })
    console.log(block)
    const percent = block / latestBlock 
    const isActive = status == "ACTIVE"

    const handleStart = async () => {
        await startMapper(mapperId)
        router.refresh()
    }

    const handleStop = async () => {
        await stopMapper(mapperId)
        router.refresh()
    }

    const handleRestart = async () => {
        await restartMapper(mapperId)
        router.refresh()
    }

    return (
        <div className="mt-[10px] self-center w-[800px] rounded-xl border-2 shadow p-[20px] flex flex-col gap-3 bg-white">
            <div className='flex items-center justify-between'>
                <div className={`py-[5px] px-[10px] border-2 w-fit rounded-full bg-gray-100 flex items-center gap-1`}>
                    <div className={`h-[12px] aspect-square rounded-full ${isActive ? "bg-green-400" : "bg-red-400" }`} />
                    <h1 className={`text-xs ${kanit.semiBold} tracking-wide text-gray-800`}>{isActive ? "Active" : "Inactive"}</h1>
                </div>
            </div>
            <h1 className={`text-center text-xl ${kanit.semiBold} text-gray-800 tracking-wide`}>Syncing {numeral(percent).format("0.0%")}</h1>
            <Progress value={percent * 100} />
            <div className='w-full flex justify-center items-center'>
                <h1 className={`text text-gray-800 tracking-wide ${kanit.semiBold}`}>Block {numeral(block).format("0,0.0a")} of out {numeral(latestBlock).format("0,0.0a")}</h1>
            </div>
            <div className='flex gap-4 items-center self-center'>
                <Button onClick={handleRestart} title='Restart' color='yellow' icon={<Restart />} />
                <Button onClick={handleStop} title='Stop' color='red' icon={<Stop />} disabled={!isActive} />
                <Button onClick={handleStart} title='Start' color='blue' icon={<Start />} disabled={isActive} />
            </div>
        </div>
    )
}