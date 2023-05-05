import React from "react";

const ReviewBox = ({ review }) => {
    const { username, comment, rating } = review;
    console.log(review);
    return (
      <div>
        <h3>{username}</h3>
        <p>{comment}</p>
        <p>Rating: {rating}/5</p>
      </div>
    );
  };

export default ReviewBox;