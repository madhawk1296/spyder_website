'use server'

export async function stopMapper(mapperId: number) {
    const res = await fetch(`https://spyder-mappers.vercel.app/mapper/${mapperId}/stop`, { method: "POST"})
    console.log(await res.text())
}