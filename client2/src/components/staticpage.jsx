import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './comp.css'
import data from '../data/data.json'
import Navbar from './Navbar';

const Desc = ()=>{


    return (
        <>
        <Navbar />
            <div className='gallery'>
            {
                    data.map(item=>{
                        return (
                            <div className='page'>
                            <img key={item._id} className='item' src={item.url} alt={item.type} />
                            <h5>{item.title}</h5>
                            <h6>{item.type}</h6>
                            <h6>{item.Price}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Desc