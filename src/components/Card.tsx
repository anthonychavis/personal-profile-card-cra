import React, { useState } from 'react';
import styles from './Card.module.css';
import Name from './Name';
import Bio from './Bio';
import Quote from './Quote';
import EditForm from './EditForm';

interface ProfileCardProps {
    name: string;
    bio: string;
    quote: string;
    quoteAuthor: string;
    quoteURL: string;
}

export interface ProfileCardVals {
    firstName: string;
    bio: string;
    favQuote: string;
    quoteAuthor: string;
    quoteURL: string;
}

function Card(props: ProfileCardProps) {
    const [edit, setEdit] = useState(0);
    const [profileCardState, setProfileCardState] = useState({
        firstName: props.name,
        bio: props.bio,
        favQuote: '"' + props.quote + '"',
        quoteAuthor: props.quoteAuthor,
        quoteURL: props.quoteURL,
    });
    const [formVals, setFormVals] = useState(profileCardState);

    const editBtn = () => setEdit(prev => prev + 1);

    return (
        <article>
            {!edit ? (
                <>
                    <header>
                        <Name name={profileCardState.firstName} />
                    </header>
                    <Bio bio={profileCardState.bio} />
                    <Quote
                        quote={profileCardState.favQuote}
                        quoteAuthor={profileCardState.quoteAuthor}
                        quoteURL={profileCardState.quoteURL}
                    />
                    <button className={styles.btn} onClick={editBtn}>
                        Edit Profile Card
                    </button>
                </>
            ) : (
                <EditForm
                    setEdit={setEdit}
                    formVals={formVals}
                    setFormVals={setFormVals}
                    profileCardState={profileCardState}
                    setProfileCardState={setProfileCardState}
                />
            )}
        </article>
    );
}

export default Card;
