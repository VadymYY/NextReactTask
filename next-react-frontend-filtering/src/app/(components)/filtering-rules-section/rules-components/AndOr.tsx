'use client';

import { useState } from 'react';

import styles from './AndOr.module.scss';

const ACTIVE_BUTTONS = {
    and: 'and',
    or: 'or',
};

// TODO: Add and/or functionality
const AndOrButton = () => {
    const [activeButton, setActiveButton] = useState(ACTIVE_BUTTONS.and);

    const handleSetNewActiveButton = (newActiveButton: string) => () => {
        if (newActiveButton !== activeButton) {
            setActiveButton(newActiveButton);
        }
    };

    return (
        <div className={styles['and-or-container']}>
            <button
                className={activeButton === ACTIVE_BUTTONS.and ? styles.active : styles.inactive}
                onClick={handleSetNewActiveButton(ACTIVE_BUTTONS.and)}
            >
                And
            </button>
            <button
                className={activeButton === ACTIVE_BUTTONS.or ? styles.active : styles.inactive}
                onClick={handleSetNewActiveButton(ACTIVE_BUTTONS.or)}
            >
                Or
            </button>
        </div>
    );
};

export default AndOrButton;
