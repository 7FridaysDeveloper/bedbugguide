import React from "react";
import './style.css';

const AddComments = () => {
    return (
        <div className="add-comments">
            <h2>Leave a Comment</h2>
            <div className="line"></div>
            <form action="">
                <label htmlFor="massage">massage</label>
                <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                <label htmlFor="fullname">fullname</label>
                <input id="fullname" type="text"/>
                <label htmlFor="email">email</label>
                <input id="email" type="text"/>
                <label htmlFor="url">url</label>
                <input id="url" type="text"/>
                <input name="submit" type="submit" id="submit" className="submit-button" value="Submit"/>
            </form>
        </div>
    )
}

export default AddComments;