import React from 'react';

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
            <blockquote cite="">
                <p>{quote}</p>
            </blockquote>
            <figcaption>
                <cite>
                    <a href={quoteURL}>{quoteAuthor}</a>
                </cite>
            </figcaption>
        </figure>
    );
}

export default Quote;
