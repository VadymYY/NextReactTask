import MinusIcon from '@/app/(shared)/svg-icons/MinusIcon';
import { RuleType } from '@/app/(shared)/types';

import styles from './FilteringRules.module.scss';

type FilteringRulesProps = {
    rule: RuleType;
    index: number;
    removeRule: (index: number) => void;
    updateRule: (index: number, field: keyof RuleType, value: any) => void;
};

const NAME_OPTIONS = ['Price', 'Quantity', 'Title', 'Description'];
const OPERATION_OPTIONS = ['>', '<', '>=', '<=', 'equal', 'not equal'];

const FilteringRules = ({ rule, index, removeRule, updateRule }: FilteringRulesProps) => {
    return (
        <div key={index} className={styles['filtering-rules']}>
            <select value={rule.field} onChange={(e) => updateRule(index, 'field', e.target.value)}>
                {NAME_OPTIONS.map((value) => (
                    <option value={value.toLocaleLowerCase()}>{value}</option>
                ))}
            </select>
            <select
                value={rule.operator}
                onChange={(e) => updateRule(index, 'operator', e.target.value)}
            >
                {OPERATION_OPTIONS.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </select>
            <input
                type='text'
                value={rule.value}
                onChange={(e) => updateRule(index, 'value', e.target.value)}
            />
            <div onClick={() => removeRule(index)}>
                <MinusIcon />
            </div>
        </div>
    );
};

export default FilteringRules;
