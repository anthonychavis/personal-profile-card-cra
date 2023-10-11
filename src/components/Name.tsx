import React from 'react';
import styles from './Name.module.css';

function Name({ name }: { name: string }) {
    return (
        <h2 className={styles.wordWrap} aria-label="username">
            {name}
        </h2>
    );
}

export default Name;
