'use client'

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function AccountMenu({ action, title, children }: {action: (formData: FormData) => Promise<{ error: string | null }>, title: string, children: ReactNode}) {
  const router = useRouter()

  const handleAction = async (formData: FormData) => {
    const { error } = await action(formData)
    console.log(error)

    router.refresh()
  }

  return (
    <form action={handleAction} className="w-[400px] h-fit bg-white shadow rounded-xl flex flex-col p-[20px] gap-6">
      <h1 className="text-3xl tracking-wide text-gray-800 text-center font-bold mb-[10px]">{title}</h1>
      {children}
    </form>
  )
}
