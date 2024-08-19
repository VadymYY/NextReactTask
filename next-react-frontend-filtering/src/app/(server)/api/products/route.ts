import { getProducts } from '../../services/productService';

export const GET = async () => {
    const products = getProducts();

    return new Response(JSON.stringify(products), { status: 200 });
};
