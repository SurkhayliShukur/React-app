import React from 'react'


const Clubs = ({ list, setList, setInfo, setListKey, setEdit }) => {
    const [text, setText] = React.useState(false)
    const [buttonKey, setButtonKey] = React.useState()
    const [showMore, setShowMore] = React.useState(true)
    React.useEffect(() => {
        let arr = localStorage.getItem("userList")
        if (arr) {
            let obj = JSON.parse(arr)
            setList(obj)
        }
    }, []);
    const Delete = (key) => {
        let deleteList = list;
        deleteList.splice(key, 1);
        setList([...deleteList]);
        localStorage.setItem("userList ", JSON.stringify(deleteList));
    };
    const showMoreBtn = () => {
        setShowMore(!showMore)
    }


    return (
        <div className='container-fluid'>
            <div className='row m-5 grid '>
                {list.map((item, key) => (
                    <div className=' col-sm-12 col-lg-3 col-md-5 mt-2 ' key={key}>
                        <div className='card p-2 me-2 overflow-hidden'>
                            <div className='d-flex justify-content-between text-center'>
                                {/*  Image and Title  */}
                                <div className='d-flex'>
                                    <img src={item.img} style={{
                                        width: '25px',
                                        height: '25px'
                                    }} alt="" className='ms-2 mt-2' />
                                    <p className='card-title  ms-2 mt-2'>{item.title}</p>
                                </div>
                                {/*  Buttons  */}
                                <div className='d-flex'>
                                    <button className=' btn  ms-2' onClick={() => Delete(key)} style={{ color: 'red' }} > <i className="bi bi-trash3-fill" style={{ fontSize: '15px' }}></i></button>
                                    <button className='btn ms-2' style={{ color: 'skyblue' }} onClick={() => {
                                        setInfo(true)
                                        setListKey(key)
                                        setEdit(item)
                                    }}><i className="bi bi-info-circle" style={{ fontSize: '15px' }}></i></button>
                                    <button className='btn' onClick={() => {
                                        setText(!text)
                                        setButtonKey(key)

                                    }}>{text && buttonKey === key ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}</button>
                                </div>
                            </div>
                            <div >
                                {
                                    text && buttonKey === key &&
                                    <>
                                        <p className='mt-3'>
                                            {showMore ? item.description : item.description.slice(0,200)}
                                            <button className='btn' onClick={showMoreBtn}>{showMore ? 'show more' : 'show less'}</button>
                                        </p>
                                        

                                        {/* item.description.slice(0, 200) */}

                                    </>

                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clubs