'use server'

export async function startMapper(mapperId: number) {
    const res = await fetch(`http://worker.spidey.dev/mapper/${mapperId}/start`, { 
        method: "POST", 
        headers: [["api-key", process.env.API_KEY!]]
    })
    console.log(await res.text())
}