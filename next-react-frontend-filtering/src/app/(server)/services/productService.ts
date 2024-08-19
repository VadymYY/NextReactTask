import { ProductType, RuleType } from '@/app/(shared)/types';

import products from './products.json';

export const getProducts = (): ProductType[] => {
    return products;
};

export const filterProducts = (filteringRules: RuleType[]) => {
    return products.filter((product) => {
        return filteringRules.every((rule) => {
            const productValue = product[rule.field];

            // TODO: change get rid of switch
            switch (rule.operator) {
                case '>':
                    return productValue > rule.value;
                case '<':
                    return productValue < rule.value;
                case '>=':
                    return productValue >= rule.value;
                case '<=':
                    return productValue <= rule.value;
                case 'equal':
                    return productValue == rule.value;
                case 'not equal':
                    return productValue != rule.value;
                default:
                    return false;
            }
        });
    });
};
