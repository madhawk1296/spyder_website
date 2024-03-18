'use client'

import { ReactNode, useEffect, useState } from "react";

export default function Appear({ children }: {children: ReactNode}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      setVisible(true)
    }, [])

    return (
        <div className={`pt-[100px] flex flex-col items-center gap-6 smoothe-slow ${visible ? "opacity-100" : "-translate-y-[10px] opacity-0"}`}>
            {children}
        </div>
    )
}