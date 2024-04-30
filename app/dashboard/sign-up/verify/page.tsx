'use client'

import { AccountMenu } from "@/components/account/AccountMenu";
import Container from "@/components/account/Container";
import kanit from "@/fonts/kanit";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const email = searchParams.get("email")

    return (
        <Container>
            <AccountMenu title="Check Your Email" >
                <h1 className={`${kanit.semiBold} text-lg text-gray-700 tracking-wide`}>We’ve sent a message to <span className={`${kanit.bold} text-gray-800`}>{email}</span> with a link to activate your account.</h1>
                <Link href="https://mail.google.com/" target="_blank" className="border-2 rounded-xl shadow p-[10px] w-fit self-center flex flex-col items-center">
                    <Image alt="Gmail Link" src="/gmail.png" width={50} height={50} />
                    Open Gmail
                </Link>
            </AccountMenu>
        </Container>
    )
}