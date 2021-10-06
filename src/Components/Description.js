import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Description = ({match,list}) => {
    let itemobject=list.find(el=>el.id==match.params.id)
    return (
        <div style={{marginTop:"100px"}}>
            <Card bg="dark" variant="dark" style={{ width: '40rem', color:"white",marginLeft:"600px",marginBottom:"50px" }}>
  <Card.Img variant="top" src={itemobject.image} style={{height:"150%"}} />
  <Card.Body>
    <Card.Title style={{fontFamily:"sans-serif",fontSize:"35px",marginBottom:"20px"}}>{itemobject.title}</Card.Title>
    <Card.Text style={{fontFamily:"sans-serif",fontSize:"15px",marginTop:"20px"}}>
     {itemobject.description}
    </Card.Text>
   
  </Card.Body>
</Card>
<div style={{display:"block"}}>
<iframe width="1280" height="720" src={itemobject.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Link to="/">
<button style={{backgroundColor:"#0B5ED8",color:"white",width:"70px",height:"30px",marginLeft:"100px",marginBottom:"50px",cursor:"pointer",borderRadius:"4px"}} >Back</button>
</Link>
</div>
</div>

     
    )
}

export default Description
