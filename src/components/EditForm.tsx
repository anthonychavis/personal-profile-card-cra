import React from 'react';
import styles from './EditForm.module.css';
import { ProfileCardVals } from './Card';

interface EditFormProps {
    setEdit: React.Dispatch<React.SetStateAction<number>>;
    formVals: ProfileCardVals;
    setFormVals: React.Dispatch<React.SetStateAction<ProfileCardVals>>;
    profileCardProps: ProfileCardVals;
    setProfileCardProps: React.Dispatch<React.SetStateAction<ProfileCardVals>>;
}

// reset form vals !!
const discardBtn = (param: EditFormProps) => param.setEdit(prev => prev - 1);

const EditForm = (props: EditFormProps) => {
    // render what's typed by user
    const handleChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = ({ target }) => {
        // console.log(currentTarget);

        props.setFormVals(prevProfileCard => ({
            ...prevProfileCard,
            [target.name]: target.value,
        }));
    };

    // // useEffect??
    const updateBtn = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        props.setProfileCardProps(() => props.formVals);
        props.setEdit(prev => prev - 1);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e =>
        updateBtn(e);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input
                autoComplete="given-name"
                id="name"
                onChange={handleChange}
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={props.profileCardProps.firstName}
            />

            {/* add appropriate syntax for field */}
            <label htmlFor="bio">Bio</label>
            <textarea
                rows={5}
                cols={50}
                id="bio"
                onChange={handleChange}
                name="bio"
                placeholder="Bio"
                defaultValue={props.profileCardProps.bio}
            ></textarea>

            <label htmlFor="quote">Favorite Quote</label>
            <textarea
                rows={5}
                cols={50}
                id="quote"
                onChange={handleChange}
                name="favQuote"
                placeholder="Favorite Quote"
                defaultValue={props.profileCardProps.favQuote}
            ></textarea>

            <label htmlFor="author">Author of Favorite Quote</label>
            <input
                onChange={handleChange}
                id="author"
                type="text"
                name="quoteAuthor"
                placeholder="Author of Quote"
                defaultValue={props.profileCardProps.quoteAuthor}
            />

            <label htmlFor="link">Link to Reference Quote, if available</label>
            <input
                onChange={handleChange}
                id="link"
                type="text"
                name="quoteURL"
                placeholder="URL where others can find the Quote"
                defaultValue={props.profileCardProps.quoteURL}
            />

            <div>
                <button className={styles.btn} type="submit">
                    Update Profile Card
                </button>
                <button
                    type="button"
                    onClick={() => discardBtn(props)}
                    className={styles.btn}
                >
                    Discard Update
                </button>
            </div>
        </form>
    );
};

export default EditForm;
