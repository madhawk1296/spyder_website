'use server'

export async function startMapper(mapperId: number) {
    const res = await fetch(`http://ec2-54-83-92-243.compute-1.amazonaws.com:3000/mapper/${mapperId}/start`, { method: "POST"})
    console.log(res)
    console.log(await res.text())
}