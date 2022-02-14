import React, { useState, useEffect } from 'react';
 import {Link, useParams} from 'react-router-dom';
import './comp.css'
import Navbar from './Navbar';

const Body = ()=>{
    const [proddesc, setProddesc] = useState({});
    const {_id} = useParams()
    console.log(_id)
    React.useEffect(()=>{
        fetch(`http://localhost:5000/allprods/${_id}`).then((res)=>res.json())
        .then((result)=>{
            console.log(result)
            setProddesc(result)
        })
    }, [])

    return (
        <>
        <Navbar />
        <div style={{display:'flex'}}>
        <div className='img-sec'>
            <img src={proddesc.url} alt="" style={{height:'700px',width:'fit-content'}} className="prod-img z-depth-2"/>
        </div>
        <div className='details'>
            <h2 className='title'>{proddesc.title}</h2>
            <h4 className='type'>{proddesc.type}</h4>
            <h1 className='price'><p>Price:</p>Rs. {proddesc.Price} /-</h1>
        </div>
        </div>
        </>
    )
}

export default Body