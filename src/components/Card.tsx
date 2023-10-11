import React, { useState } from 'react';
import styles from './Card.module.css';
import Name from './Name';
import Bio from './Bio';
import Quote from './Quote';
import EditForm from './EditForm';

interface ProfileCard {
    [key: string]: string;
}

// function Card(props: {
//     name: string;
//     bio: string;
//     quote: string;
//     quoteAuthor: string;
//     quoteURL: string;
// }) {
function Card(props: ProfileCard) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('React');
    const [edit, setEdit] = useState(0);
    // const [firstName, setFirstName] = useState(props.name);
    // enter default values in useState for TS !! could throw null errors in some situations otherwise
    const [profileCard, setProfileCard] = useState<ProfileCard>({
        firstName: props.name,
        bio: props.bio,
        favQuote: props.quote,
        quoteAuthor: props.quoteAuthor,
        quoteURL: props.quoteURL,
    });

    // render what's typed by user
    const handleChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = ({ target }) => {
        // console.log(currentTarget);
        setProfileCard(prevProfileCard => ({
            ...prevProfileCard,
            [target.name]: target.value,
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e =>
        updateBtn(e);

    // useEffect??
    const editBtn = () => setEdit(prev => prev + 1);
    // // useEffect??
    const updateBtn = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setEdit(prev => prev - 1);
    };

    return (
        <>
            <article>
                {!edit ? (
                    <>
                        <header>
                            <Name name={profileCard.firstName} />
                            {/* <Name name={props.name} /> */}
                        </header>
                        <Bio bio={profileCard.bio} />
                        {/* <Bio bio={props.bio} /> */}
                        <Quote
                            quote={profileCard.favQuote}
                            quoteAuthor={profileCard.quoteAuthor}
                            quoteURL={profileCard.quoteURL}
                        />
                        <button className={styles.btn} onClick={editBtn}>
                            Edit Profile Card
                        </button>
                    </>
                ) : (
                    <EditForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        profileCard={{
                            firstName: props.name,
                            bio: props.bio,
                            favQuote: props.quote,
                            quoteAuthor: props.quoteAuthor,
                            quoteURL: props.quoteURL,
                        }}
                    />
                )}
            </article>
        </>
    );
}

export default Card;
// review typing to restructure !!
