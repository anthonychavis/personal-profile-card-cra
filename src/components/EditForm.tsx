import React from 'react';
import styles from './EditForm.module.css';

// const updateBtn = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     setEdit(prev => prev - 1);
// };

// const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => updateBtn(e);

interface EditFormProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    >;
    profileCard: {
        firstName: string;
        bio: string;
        favQuote: string;
        quoteAuthor: string;
        quoteURL?: string;
    };
}

// const EditForm: any = () => {};
const EditForm = (props: EditFormProps) => (
    <>
        {/* after edit btn press */}
        <form action="#" onSubmit={props.handleSubmit}>
            {/* <label htmlFor=""></label> */}
            <input
                onChange={props.handleChange}
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={props.profileCard.firstName}
            />
            {/* add appropriate syntax for field */}
            {/* <label htmlFor=""></label> */}
            <textarea
                rows={5}
                cols={50}
                onChange={props.handleChange}
                // type="text"
                name="bio"
                placeholder="Bio"
                defaultValue={props.profileCard.bio}
            ></textarea>
            {/* <label htmlFor=""></label> */}
            <textarea
                rows={5}
                cols={50}
                onChange={props.handleChange}
                // type="text"
                name="favQuote"
                placeholder="Favorite Quote"
                defaultValue={props.profileCard.favQuote}
            ></textarea>
            <input
                onChange={props.handleChange}
                type="text"
                name="quoteAuthor"
                placeholder="Author of Quote"
                defaultValue={props.profileCard.quoteAuthor}
            />
            <input
                onChange={props.handleChange}
                type="text"
                name="quoteURL"
                placeholder="URL where others can find the Quote"
                defaultValue={props.profileCard.quoteURL}
            />
            <div>
                <button className={styles.btn} type="submit">
                    Update Profile Card
                </button>
                <button className={styles.btn}>Discard Update</button>
            </div>
        </form>
    </>
);

export default EditForm;
