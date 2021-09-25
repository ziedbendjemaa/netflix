import React, { useState } from 'react'
import { Modal ,Button} from 'react-bootstrap'

const Add = ({handleAdd}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [image, setImage] = useState("")
const [rate, setRate] = useState(0)
const handlesubmit=(e)=>{
e.preventDefault()
const newmovie={
  id:Math.random(),
  title,
  description,
  image:image,
  rate
}
handleAdd(newmovie)
}
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} bg="dark" variant="dark"  >
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handlesubmit} >
               Title: <input type="text" className="form-control" placeholder="Enter Movie Name" onChange={e=> setTitle(e.target.value)} value={title}/>
               Description: <input type="text" className="form-control" placeholder="Enter Description Movie" onChange={e=> setDescription(e.target.value)} value={description} />
              Image: <input type="url" className="form-control" placeholder="Enter URL Image" onChange={e=> setImage(e.target.value)} value={image}/>
             Rate : <input type="number" className="form-control" placeholder="Enter Movie Rate" onChange={e=> setRate(e.target.value)} value={rate} />
             <Button variant="primary" type="submit">
            Save Changes
          </Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Add
