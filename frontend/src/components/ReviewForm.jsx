import React, { useState } from "react";

const ReviewForm = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    return (
        <form>
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
        </form>
    )
}

export default ReviewForm;