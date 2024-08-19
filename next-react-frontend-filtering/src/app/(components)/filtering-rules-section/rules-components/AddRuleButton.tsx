import styles from './AddRuleButton.module.scss';

type AddRuleButtonProps = {
    label: string;
    handleClick: () => void;
    icon: React.ReactNode;
};
const AddRuleButton = ({ handleClick, icon, label }: AddRuleButtonProps) => {
    return (
        <button className={styles['add-rule-button']} onClick={handleClick}>
            {icon}
            {label}
        </button>
    );
};

export default AddRuleButton;
