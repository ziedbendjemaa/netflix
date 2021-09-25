
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import Filter from "./Components/Filter";
import Movielist from "./Components/Movielist";
import Add from "./Components/Add";
import { moviesdata } from './data';

function App() {
  const [movielist, setMovielist] = useState(moviesdata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handlechange=(e)=>{
setTitle(e.target.value)
  }
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd=(newmovie)=>{
setMovielist([...movielist,newmovie])
  }
  return (
    <div className="App">
       <Filter handlechange={handlechange} title={title} ratingChanged={ratingChanged} rate ={rate}/>
       <Movielist movielist={movielist.filter(movie=>movie.title.toUpperCase().includes(title.toUpperCase())&& movie.rate>=rate)} />
       <Add handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
