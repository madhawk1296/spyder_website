'use client'

import addEmail from "@/actions/addEmail";
import Container from "@/components/account/Container";
import kanit from "@/fonts/kanit";
import { useState } from "react";

export default function Page() {
    const [submitted, setSubmitted] = useState(false)

    const handleForm = async (formData: FormData) => {
        await addEmail(formData)
        setSubmitted(true)
    }

    return (
        <Container>
            <div className="flex flex-col items-center gap-6">
                <h1 className={`${kanit.bold} text-6xl tracking-wide text-gray-800`}>Coming Soon</h1>
                {submitted ? (
                    <h1 className={`${kanit.semiBold} text-3xl tracking-wide text-gray-700 text-balance max-w-[1000px] text-center`}>Thank You</h1>    
                ) : (
                    <form action={handleForm} className="flex flex-col items-center gap-6">
                        <h1 className={`${kanit.medium} text-xl tracking-wide text-gray-700 text-balance max-w-[1000px] text-center`}>Our website is currently under construction. Want to stay updated? Enter your email below to receive the latest news directly to your inbox.</h1>
                        <input name="email" required className="w-[600px] border-2 rounded-xl shadow p-[10px] outline-gray-500 text-gray-800" placeholder="Your Email" />
                        <button type="submit" className="bg-red-500 rounded-xl shadow p-[10px] text-gray-50 tracking-wide hover:shadow-md hover:bg-red-600 smoothe">Stay Updated</button>
                    </form>
                )}
            </div>
        </Container>
    )
}