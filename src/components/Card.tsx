import React, { useState } from 'react';
import styles from './Card.module.css';
import Name from './Name';
import Bio from './Bio';
import Quote from './Quote';
import EditForm from './EditForm';

interface ProfileCard {
    [key: string]: string;
}

export interface ProfileCardVals {
    firstName: string;
    bio: string;
    favQuote: string;
    quoteAuthor: string;
    quoteURL: string;
}

// function Card(props: {
//     name: string;
//     bio: string;
//     quote: string;
//     quoteAuthor: string;
//     quoteURL: string;
// }) {
function Card(props: ProfileCard) {
    const [edit, setEdit] = useState(0);
    const [profileCardProps, setProfileCardProps] = useState({
        firstName: props.name,
        bio: props.bio,
        favQuote: '"' + props.quote + '"',
        quoteAuthor: props.quoteAuthor,
        quoteURL: props.quoteURL,
    });
    const [formVals, setFormVals] = useState(profileCardProps);

    const editBtn = () => setEdit(prev => prev + 1);

    return (
        <article>
            {!edit ? (
                <>
                    <header>
                        <Name name={profileCardProps.firstName} />
                    </header>
                    <Bio bio={profileCardProps.bio} />
                    <Quote
                        quote={profileCardProps.favQuote}
                        quoteAuthor={profileCardProps.quoteAuthor}
                        quoteURL={profileCardProps.quoteURL}
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
                    profileCardProps={profileCardProps}
                    setProfileCardProps={setProfileCardProps}
                />
            )}
        </article>
    );
}

export default Card;
// review typing to restructure !!
