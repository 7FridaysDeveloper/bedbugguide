import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import './style.css';

const AddComments = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({
        show: false,
        message: '',
    });
    const [fields, setFields] = useState({
        post: '',
        author_name: '',
        author_email: '',
        content: '',
    });
    const changeField = ({ target }) => {
        const name = target.name
        fields[name] = target.value?.trim();
        setFields({...fields});
    }


    const addNewComment = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`${process.env.GATSBY_API_URL}/comments`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...fields, post: id}),
        })
            .then((res) => res.json())
            .then(data => {
                if(data?.data?.status && data.data.status !== 200) {
                    throw data.message
                } else {
                    setSuccess(true);
                    setError({show: false, message: ''})
                }
            })
            .catch((message) => {
                setError({show: true, message})
                setSuccess(false);
            })
            .finally(() => setLoading(false))
    }
    return (
        <div className="add-comments" onSubmit={addNewComment}>
            <h2>Leave a Comment</h2>
            <div className="line"></div>
            <form action="">
                <label htmlFor="content">massage</label>
                <textarea name="content" cols="30" rows="10" onChange={changeField}></textarea>
                <label htmlFor="author_name">fullname</label>
                <input name="author_name" type="text" onChange={changeField}/>
                <label htmlFor="author_email">email</label>
                <input name="author_email" type="text" onChange={changeField}/>
                <label htmlFor="url">WEBSITE URL</label>
                <input name="url" type="text" onChange={changeField}/>
                { loading ? <ClipLoader/> : <input name="submit" type="submit" id="submit" className="submit-button" value="Submit"/> }
            </form>
            { error.show ? <span className="comments_error">{error.message}</span> : null }
            { success ? <span className="comments_success">Your comment has been added</span> : null }
        </div>
    )
}

export default AddComments;