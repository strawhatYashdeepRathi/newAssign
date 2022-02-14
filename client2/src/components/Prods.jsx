import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './comp.css'
import data from '../data/data.json'
import Navbar from './Navbar';

const Body = ()=>{

      

    // useEffect(()=>{
    //     fetch('/', {
    //         mode:'cors'
    //     })
    //     .then(res=>console.log(res.json()))
    //     .then(result=>{
    //         console.log(result)
    //     })
    // }, [])

    return (
        <>
        <Navbar />
            <div className='gallery'>
            {
                    data.map(item=>{
                        return (<>
                            <div className='card'>
                                <Link to="/static">
                                    <img key={item._id} className='item' src={item.url} alt={item.type} />
                            </Link>
                            <h5>{item.title}</h5>
                            <h6>{item.type}</h6>
                            <h6>{item.Price}</h6>
                            </div>
                            </>
                            
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default Body