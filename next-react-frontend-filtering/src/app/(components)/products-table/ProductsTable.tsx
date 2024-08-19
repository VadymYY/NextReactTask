import React from 'react';
import { ProductType } from '../../(shared)/types';
import styles from './ProductsTable.module.scss';

type ProductsTableProps = {
    productsList: ProductType[];
};

const TABLE_HEADERS = ['TITLE', 'DESCRIPTION', 'PRICE', 'QUANTITY', 'IN STOCK'];

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
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.inStock ? '+' : '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;
