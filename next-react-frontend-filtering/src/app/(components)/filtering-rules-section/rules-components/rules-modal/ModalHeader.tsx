import CircleMinusIcon from '@/app/(shared)/svg-icons/CircleMinusIcon';
import CirclePlusIcon from '@/app/(shared)/svg-icons/CirclePlusIcon';
import PlusIcon from '@/app/(shared)/svg-icons/PlusIcon';
import { RuleType } from '@/app/(shared)/types';

import AddRuleButton from '../AddRuleButton';
import AndOrButton from '../AndOr';

import styles from './ModalHeader.module.scss';

type ModalHeaderProps = {
    rules: RuleType[];
    handleClose: () => void;
    addRule: () => void;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // TODO: add .env file

const ModalHeader = ({ rules, handleClose, addRule }: ModalHeaderProps) => {
    const handleExportToJSON = () => {
        fetch(`${API_URL}/api/products`, {
            method: 'POST',
            body: JSON.stringify(rules),
        });

        handleClose();
    };

    return (
        <div className={styles['modal-header']}>
            <div className={styles['modal-header-actions']}>
                <AndOrButton />

                <AddRuleButton handleClick={addRule} icon={<PlusIcon />} label='ADD RULE' />

                <AddRuleButton
                    handleClick={handleExportToJSON}
                    icon={<CirclePlusIcon />}
                    label='ADD RULESET'
                />
            </div>

            <div onClick={handleClose}>
                <CircleMinusIcon />
            </div>
        </div>
    );
};

export default ModalHeader;
