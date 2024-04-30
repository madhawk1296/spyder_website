'use server'

export async function restartMapper(mapperId: number) {
    const res = await fetch(`http://worker.spidey.dev/mapper/${mapperId}/restart`, { 
        method: "POST", 
        headers: [["api-key", process.env.API_KEY!]]
    })
    console.log(await res.text())
}