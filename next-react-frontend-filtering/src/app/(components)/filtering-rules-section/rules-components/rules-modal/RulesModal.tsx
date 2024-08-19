import { RuleType } from '@/app/(shared)/types';

import ModalContent from './ModalContent';
import styles from './RulesModal.module.scss';

type RulesModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    initialRules: RuleType[];
};

const RulesModal = ({ isOpen, handleClose, initialRules }: RulesModalProps) => {
    return (
        <div className={styles['rules-modal']} style={{ display: isOpen ? 'block' : 'none' }}>
            <ModalContent handleClose={handleClose} initialRules={initialRules} />
        </div>
    );
};

export default RulesModal;
