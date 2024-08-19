import { RuleType } from '@/app/(shared)/types';

import { useState } from 'react';

import FilteringRules from './FilteringRules';
import styles from './ModalContent.module.scss';
import ModalHeader from './ModalHeader';

type ModalContentProps = {
    initialRules: RuleType[];
    handleClose: () => void;
};

const ModalContent = ({ handleClose, initialRules }: ModalContentProps) => {
    const [rules, setRules] = useState<RuleType[]>(initialRules);

    const addRule = () => {
        setRules([...rules, { field: 'price', operator: '>', value: 0 }]);
    };

    const removeRule = (index: number) => {
        setRules(rules.filter((_, i) => i !== index));
    };

    const updateRule = (index: number, field: keyof RuleType, value: any) => {
        const updatedRules = [...rules];
        updatedRules[index] = { ...updatedRules[index], [field]: value };
        setRules(updatedRules);
    };

    return (
        <div className={styles['modal-content']}>
            <ModalHeader handleClose={handleClose} addRule={addRule} rules={rules} />
            {rules.map((rule, index) => (
                <FilteringRules
                    rule={rule}
                    index={index}
                    removeRule={removeRule}
                    updateRule={updateRule}
                />
            ))}
        </div>
    );
};

export default ModalContent;
