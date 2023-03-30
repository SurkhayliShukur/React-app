import React from 'react'
import { Modal, CloseButton } from 'react-bootstrap'


const Add = ({add, setAdd , list , setList}) => {
  
      const [title , setTitle] = React.useState("")
      const [description , setDescription] = React.useState("")
      const [img , setImg] = React.useState("")
  return (
   <Modal show = {add} onHide = {()=> setAdd(false)}>
    <Modal.Header>
        Add
        <CloseButton onClick={() => setAdd(false)}/>
    </Modal.Header>
    <Modal.Body>
        <label>Title</label>
        <input type="text"  className='form-control' onChange={(e) => setTitle(e.target.value)} />
        <label>Description</label>
        <input type="text"  className='form-control' onChange={(e) => setDescription(e.target.value)} />
        <label>Img</label>
        <input type="text"  className='form-control' onChange={(e) => setImg(e.target.value)} />
        <button className='btn btn-primary w-100 mt-2' onClick={() => 
        {
          let newList = list
          newList.push({
            title: title,
            description: description,
            img: img
          })
          setList(newList)
          localStorage.setItem("userList",JSON.stringify(newList))
          setAdd(false)
        }
        }>Submit</button>
    </Modal.Body>
   </Modal>
  )
}

export default Add