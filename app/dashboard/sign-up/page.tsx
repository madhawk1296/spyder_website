'use client'

import Input from "@/components/account/Input";
import { AccountMenu } from "../../../components/account/AccountMenu";
import Button from "@/components/account/Button";
import Container from "@/components/account/Container";
import AccountLink from "@/components/account/AccountLink";
import signUp from "@/actions/signup";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignUp() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const plan = searchParams.get("plan") || "developer"

    const handleAction = async (formData: FormData) => {
        formData.append("plan", plan)
        const { error, data } = await signUp(formData)

        if(data) {
            router.push(`/dashboard/sign-up/verify?email=${encodeURIComponent(data)}`)
        }

        return { error }
    }

    return (
        <Container>
            <AccountMenu action={handleAction} title="Create Account" >
                <Input name="email" placeholder="Email" />
                <Input name="password" placeholder="Password" isPassword={true} />
                <Button title="Create Account" />
                <AccountLink title="Already have an account?" link="/dashboard/sign-in" linkTitle="Log In" />
            </AccountMenu>
        </Container>
    )
}