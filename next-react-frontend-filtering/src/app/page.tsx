import ProductsTable from './(components)/products-table/ProductsTable';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // TODO: add .env file

const Home = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    console.log('searchParams: ', searchParams); // TODO: pages

    const res = await fetch(`${API_URL}/api/products`);
    const products = await res.json();

    return (
        <>
            <ProductsTable productsList={products} />
        </>
    );
};

export default Home;
