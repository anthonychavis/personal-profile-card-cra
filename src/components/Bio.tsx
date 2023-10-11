import React from 'react';
import styles from './Bio.module.css';

function Bio({ bio }: { bio: string }) {
    return <p className={styles.wordWrap}>{bio}</p>;
}

export default Bio;
