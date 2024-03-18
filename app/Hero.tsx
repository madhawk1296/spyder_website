import Image from "next/image";

export default function Hero() {
    return (
        <Image className="mt-[50px] rounded-lg shadow-2xl border border-gray-200" alt="Hero Image" src="/hero.png" width={1000} height={600} />
    )
}