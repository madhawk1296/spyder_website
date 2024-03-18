export default function selectTableQuery() {
    return `
    SELECT *
    FROM information_schema.tables
    WHERE table_schema = 'public'
    `   
}