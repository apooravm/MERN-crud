import logo from './logo.svg';
import './App.css';

const ReviewBox = ({ review }) => {
  const { username, review: reviewText, rating } = review;
  return (
    <div>
      <h3>{username}</h3>
      <p>{reviewText}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
};

const getData = async () => {
  const url = "http://localhost:4000/api/get";
  await fetch(url)
  .then((data) => {
    const dataArray = data.json();
    return dataArray[0];
  })
}


function App() {
  return (
   <div>
    {getData}
   </div> 
  );
}

export default App;
