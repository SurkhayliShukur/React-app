import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import Add from './Action/Add';

const Clubs = () => {
    const [add, setAdd] = React.useState(false)
    const [list, setList] = React.useState([])




    React.useEffect(() => {
        let arr = localStorage.getItem("userList")
        if(arr){
            let obj = JSON.parse(arr)
            setList(obj)
        }
    }, []);
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Container>
                    <button className='btn btn-success p-2' onClick={() => setAdd(true)}>Add</button>
                </Navbar>
                <Add
                    add={add}
                    setAdd={setAdd}
                    list={list}
                    setList={setList}
                />
                <div className='row m-5'>
             {list.map((item,key) =>(
                    <div className='col-3'  key={key}>
                       <div className='card p-2 rounded d-flex justify-content-between'>
                            <img src= {item.img} alt="" />
                            <p>{item.title}</p>
                       </div>
                    </div>
                ))}
            </div>
            </Container>
            
        </div>

    )
}

export default Clubs