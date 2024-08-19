import { ProductType } from '../../(shared)/types';

import styles from './ProductsTable.module.scss';

type ProductsTableProps = {
    productsList: ProductType[];
};

const TABLE_HEADERS = ['TITLE', 'DESCRIPTION', 'PRICE', 'QUANTITY', 'IN STOCK'];
const TABLE_COLUMNS_VALUE = ['title', 'description', 'price', 'quantity', 'inStock'];

const ProductsTable = ({ productsList }: ProductsTableProps) => {
    return (
        <div className={styles['table-wrapper']}>
            <table>
                <thead>
                    <tr>
                        {TABLE_HEADERS.map((headerName, i) => (
                            <th key={`header_${headerName}_${i}`}>{headerName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {productsList?.map((product) => (
                        <tr key={`product_${product.title}`}>
                            {TABLE_COLUMNS_VALUE.map((columnValue, index) => (
                                // @ts-ignore
                                <td key={`data_${product[columnValue]}_${index}`}>
                                    {/*@ts-ignore*/}
                                    {product[columnValue]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;
