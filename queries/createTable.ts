export default function createTableQuery(name: string, events: any[]) {
    return `
    CREATE TABLE public."${name}" (
        id TEXT PRIMARY KEY,
        "from" TEXT,
        "to" TEXT,
        "value" TEXT
    );
    `   
}