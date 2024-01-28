import React from 'react';
import styles from './Quote.module.css';

function Quote({
    quote,
    quoteAuthor,
    quoteURL,
}: {
    quote: string;
    quoteAuthor: string;
    quoteURL: string;
}) {
    return (
        <figure>
            <blockquote className={`${styles.bq}`} cite="">
                <p className={styles.wordWrap}>{quote}</p>
            </blockquote>
            <figcaption>
                {/* {quoteURL ? (
                    <cite>
                        <a className={`${styles.wordWrap} ${styles.author}`} href={quoteURL}>{quoteAuthor}</a>
                    </cite>
                ) : ( */}
                <p className={`${styles.wordWrap} ${styles.author}`}>
                    {quoteAuthor}
                </p>
                {/* )} */}
            </figcaption>
        </figure>
    );
}

export default Quote;
