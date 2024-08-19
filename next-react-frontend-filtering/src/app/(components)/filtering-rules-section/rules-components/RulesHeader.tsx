'use client';

import CirclePlusIcon from '@/app/(shared)/svg-icons/CirclePlusIcon';
import PlusIcon from '@/app/(shared)/svg-icons/PlusIcon';
import { RuleType } from '@/app/(shared)/types';

import { useState } from 'react';

import AddRuleButton from './AddRuleButton';
import AndOrButton from './AndOr';
import styles from './RulesHeader.module.scss';
import RulesModal from './rules-modal/RulesModal';

type RulesHeaderProps = {
    initialRules: RuleType[];
};

const RulesHeader = ({ initialRules }: RulesHeaderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={styles['rules-header']}>
            <AndOrButton />

            <AddRuleButton handleClick={handleOpenModal} icon={<PlusIcon />} label='ADD RULE' />

            <AddRuleButton
                handleClick={handleOpenModal}
                icon={<CirclePlusIcon />}
                label='ADD RULESET'
            />

            <RulesModal
                isOpen={isModalOpen}
                handleClose={() => {
                    setIsModalOpen(false);
                }}
                initialRules={initialRules}
            />
        </div>
    );
};

export default RulesHeader;
