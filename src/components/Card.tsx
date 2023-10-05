import React, { useState } from 'react';
import styles from './Card.module.css';
import Name from './Name';
import Bio from './Bio';
import Quote from './Quote';

interface ProfileCard {
    [key: string]: string;
}

// function Card() {
function Card(props: {
    name: string;
    bio: string;
    quote: string;
    quoteAuthor: string;
    quoteURL: string;
}) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('React');
    const [edit, setEdit] = useState(0);
    // enter default values in useState for TS !! could throw null errors in some situations otherwise
    const [profileCard, setProfileCard] = useState<ProfileCard>({
        firstName: 'enter name',
        bio: 'enter bio',
        favQuote: 'enter quote',
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
    // useEffect??
    const updateBtn = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setEdit(prev => prev - 1);
    };

    return (
        <>
            <article>
                <header>
                    <Name name={props.name} />
                </header>
                <Bio bio={props.bio} />
                <Quote
                    quote={props.quote}
                    quoteAuthor={props.quoteAuthor}
                    quoteURL={props.quoteURL}
                />
                <button className={styles.btn} onClick={editBtn}>
                    Edit Profile Card
                </button>
                {!edit ? null : (
                    <section>
                        {/* after edit btn press */}
                        <form action="" onSubmit={handleSubmit}>
                            {/* <label htmlFor=""></label> */}
                            <input
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={profileCard.firstName}
                            />
                            {/* add appropriate syntax for field */}
                            {/* <label htmlFor=""></label> */}
                            <textarea
                                rows={5}
                                cols={50}
                                onChange={handleChange}
                                // type="text"
                                name="bio"
                                placeholder="Bio"
                                value={profileCard.bio}
                            >
                                {/* {profileCard.bio} */}
                            </textarea>
                            {/* <label htmlFor=""></label> */}
                            <input
                                onChange={handleChange}
                                type="text"
                                name="favQuote"
                                placeholder="Favorite Quote"
                                value={profileCard.favQuote}
                            />
                            <button className={styles.btn} type="submit">
                                Update Profile Card
                            </button>
                        </form>
                    </section>
                )}
            </article>

            <article>
                <section className={styles.lessonMaterial}>
                    <p className={styles.lessonMaterial}>{name}</p>
                    <button
                        className={styles.btn}
                        onClick={() => setName(() => 'React State')}
                    >
                        Name change
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => setCount(count + 1)}
                    >
                        {count}
                    </button>
                </section>
            </article>
        </>
    );
}

export default Card;
// review typing to restructure !!
