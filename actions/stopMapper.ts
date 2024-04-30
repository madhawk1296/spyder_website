'use server'

export async function stopMapper(mapperId: number) {
    const res = await fetch(`http://worker.spidey.dev/mapper/${mapperId}/stop`, { 
        method: "POST", 
        headers: [["api-key", process.env.API_KEY!]]
    })
    console.log(await res.text())
}