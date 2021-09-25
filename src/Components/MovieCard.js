import React from 'react'
import { Card , Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
    return (
        <Card bg="dark" variant="dark" style={{ width: '18rem', color:"white" }} className=" m-3">
  <Card.Img variant="top" src={movie.image} style={{height:"70%"}} />
  <Card.Body>
    <Card.Title >{movie.title}</Card.Title>
    <Card.Text>
    <ReactStars
    count={5}
    isHalf={true}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default MovieCard
