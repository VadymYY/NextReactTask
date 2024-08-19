export type ProductType = {
    title: string;
    description: string;
    price: number;
    quantity: number;
    inStock: boolean;
};

export type RuleType = {
    field: 'price' | 'quantity' | 'title' | 'description' | 'inStock';
    operator: '>' | '<' | '>=' | '<=' | 'equal' | 'not equal';
    value: string | number;
};
