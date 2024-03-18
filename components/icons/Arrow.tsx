export default function Arrow({ backwards=false }: { backwards?: boolean}) {
    return (
        <svg className={`h-full stroke-gray-800 ${backwards && "rotate-180"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M20 12L16 8M20 12L16 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}