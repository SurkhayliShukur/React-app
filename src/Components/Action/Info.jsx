import React from 'react'
import { CloseButton, Modal } from 'react-bootstrap'

const Info = ({ info, setInfo, list, setList, listKey, edit }) => {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [img, setImg] = React.useState("")

    const editClub = () => {
        let editList = list
        editList[listKey] = {
            title: title,
            description: description,
            img: img
        }
        setList([...editList])
        localStorage.setItem("userList", JSON.stringify(editList))
        setInfo(false)
    }

    React.useEffect(() => {
        setTitle(edit?.title)
        setDescription(edit?.description)
        setImg(edit?.img)

    }, [info])


    return (
        <Modal show={info}>
            <Modal.Header>
                Info
                <CloseButton onClick={() => setInfo(false)} />
            </Modal.Header>
            <Modal.Body>
                <label>Title</label>
                <input value={title} type="text" className='form-control' onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <input value={description} type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} />
                <label>Img</label>
                <input value={img} type="text" className='form-control' onChange={(e) => setImg(e.target.value)} />
                <button className='btn btn-success w-100 mt-2' onClick={editClub}>Submit</button>
            </Modal.Body>
        </Modal>
    )
}

export default Info