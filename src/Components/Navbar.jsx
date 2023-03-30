import React from 'react'
import logo from '../img/logo.png'

const Navbar = ({ setAdd }) => {

    return (
        <>
            <div className='d-flex justify-content-between container-fluid ms-2 mt-2'>
                <img src={logo} style={{
                    width: '50px',
                    height: '50px'
                }} alt="" />
                <button className='btn btn-success' onClick={() => setAdd(true)}>Add</button>
            </div>

        </>

    )
}

export default Navbar