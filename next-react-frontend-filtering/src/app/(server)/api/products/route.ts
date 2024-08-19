import { getProducts } from '../../services/productService';

export const GET = () => {
    return Response.json(getProducts());
};
