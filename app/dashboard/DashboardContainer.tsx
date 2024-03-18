import { ReactNode } from "react";
import Nav from "./Nav";
import CreateCollectionProvider from "@/components/providers/CreateCollectionProvider";

export default function DashboardContainer({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen w-screen relative flex">
                <Nav />
                {children}
        </div>
    )
} 