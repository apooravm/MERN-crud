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

  const [reviewData, setReviewData] = useState([]);
  const [currState, setCurrState] = useState(false);

  const handleGetButton = (event) => {
    event.preventDefault();
    const revData = getData();

    revData.then((data) => {
      setReviewData(data);
      setCurrState(true);
      console.log(currState)
      console.log(data);
    })
  }

  return (
    <div>
      <ReviewForm>

      </ReviewForm>
      <button onClick={handleGetButton}>
        Get Reviews
      </button>
      {currState ? reviewData.map((review, index) => {
        return (
        <div key={index}>

          <h2>
            {review.username}
          </h2>
          <p>
            {review.comment}
          </p>
          <p>
            {review.rating}
          </p>
        </div>)
      }): <></>}
    </div>
  );
}

export default App;
