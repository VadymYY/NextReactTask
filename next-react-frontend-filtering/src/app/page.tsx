import FilteringRulesSection from './(components)/filtering-rules-section/FilteringRulesSection';
import ProductsTable from './(components)/products-table/ProductsTable';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // TODO: add .env file

const Home = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    // TODO: pages pagination
    //searchParams

    // TODO: move to the HOOK
    const data = await (
        await fetch(`${API_URL}/api/products`, {
            method: 'GET',
            cache: 'no-cache',
        })
    ).json();

    // TODO: add multi language function (i18next)

    return (
        <>
            <FilteringRulesSection rulesConfiguration={data.rulesConfiguration} />
            <ProductsTable productsList={data.products} />
        </>
    );
};

export default Home;
