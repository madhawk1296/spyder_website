export type SubgraphType = {
    name: string;
    collections: CollectionType[];
}

export type CollectionType = {
    name: string;
    columns: {
        name: string;
        data_type: string;
    }[];
}

