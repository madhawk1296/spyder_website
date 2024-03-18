import Link from "next/link";

export default function AccountLink({ title, linkTitle, link }: { title: string, linkTitle: string, link: string}) {
    return (
        <h1 className="text-center text-sm text-gray-500 tracking-wide">{title} <Link className="underline text-gray-800 font-medium" href={link}>{linkTitle}</Link>
        </h1>
    )
}