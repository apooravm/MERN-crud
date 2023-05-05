import React, { useState } from "react";

const ReviewForm = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        const url = "http://localhost:4000/api/post";
        const reviewData = {
            "review": {
                "username": username,
                "comment": comment,
                "rating": rating
            }
        }
        const options = {
                method: "POST",  
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(reviewData), 
          }
        
        fetch(url, options)
        .then((res) => {
            console.log(res.json());
        })
        .catch(err => {
            console.log(err);
        })
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
                <button type="submit">Post Review</button>
            </div>
            
        </form>
    )
}

export default ReviewForm;