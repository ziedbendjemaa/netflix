import React from 'react'
import { Form, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const Filter = ({handlechange,title,ratingChanged,rate}) => {
   

    return (
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-around">
        
       
        <div>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handlechange}
              value={title}
            />
            
          </Form>
          <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    isHalf={true}
    activeColor="#ffd700"
   
  />
     </div>  
     <Navbar.Brand href="#" style={{color:"red",fontSize:"30px"}}>NETFLIX</Navbar.Brand>
      </Navbar>
    )
}

export default Filter
