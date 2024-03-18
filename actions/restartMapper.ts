'use server'

export async function restartMapper(mapperId: number) {
    const res = await fetch(`https://spyder-mappers.vercel.app/mapper/${mapperId}/restart`, { method: "POST"})
    console.log(await res.text())
}