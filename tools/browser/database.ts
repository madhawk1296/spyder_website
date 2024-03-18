export function getPageCount(records: number) {
    return Math.ceil(records / 100)
}