import { Kanit } from "next/font/google"

const light = Kanit({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})

const medium = Kanit({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const semiBold = Kanit({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const bold = Kanit({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

export default {
    light: light.className,
    medium: medium.className,
    semiBold: semiBold.className,
    bold: bold.className
}