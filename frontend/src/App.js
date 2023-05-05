import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewBox from './components/ReviewGet';
import ReviewForm from './components/ReviewPost';

const getData = async () => {
  try {
    const url = "http://localhost:4000/api/get";
    const response = await fetch(url);
    const dataArray = await response.json();
    return dataArray;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const postData = async () => {
  try {
    const url = "http://localhost:400/api/post";
    const data = ""
  } catch (err) {
    
  }
}

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getData();
      setReviews(reviewData);
    }
    fetchReviews();
  }, []);

  return (
    <div>
      <ReviewForm>

      </ReviewForm>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewBox key={review.id} review={review} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
