export interface Clothes {
    id: string;
    name: string;
    image: string;
    price: number;
    gender: string;
    type: string[];
    sizes: string[];
    quantity: { [size: string]: number };
    description: string;
    basket: boolean;
}
