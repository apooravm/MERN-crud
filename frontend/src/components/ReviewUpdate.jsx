import React, { useState } from "react";

const ReviewForm = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [review_ID, set_review_ID] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        alert("Posted!");
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div>
                <label>Comment: </label>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>

            <div>
                <label>Rating: </label>
                <input type="number" max={5} min={0} value={rating} onChange={(e) => setRating(e.target.value)}/>
            </div>

            <div>
                <label>Review ID: </label>
                <input type="number" value={review_ID} onChange={(e) => set_review_ID(e.target.value)}/>
            </div>

            <div>
                <button type="submit">Post Review</button>
            </div>
            
        </form>
    )
}

export default ReviewForm;