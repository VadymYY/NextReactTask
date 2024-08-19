import fs from 'fs';
import path from 'path';

import { filterProducts } from '../../services/productService';

import rulesConfiguration from '../../services/filteringRules.json';

export const GET = async () => {
    // @ts-ignore
    const products = filterProducts(rulesConfiguration);

    const resData = {
        products,
        rulesConfiguration: rulesConfiguration,
    };

    return new Response(JSON.stringify(resData), { status: 200 });
};

export const POST = async (req: Request) => {
    const dataToExport = await req.json();

    const filePath = path.join(process.cwd() + '/src/app/(server)/services', 'filteringRules.json'); // TODO move to .env

    fs.writeFile(filePath, JSON.stringify(dataToExport, null, 2), (err) => {
        console.log('FILTERING RULES SAVED!');
    });

    const resData = {
        products: filterProducts(dataToExport),
        rulesConfiguration: dataToExport,
    };

    return new Response(JSON.stringify(resData), { status: 200 });
};
