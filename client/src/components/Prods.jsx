import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './comp.css'
import Navbar from './Navbar';

const Body = ()=>{
    const [prods, setProds] = useState([]);
    const [filtered, setFiltered] = useState("")

    React.useEffect(() => {
        fetch("http://localhost:5000/allprods")
            .then((res) => res.json())
            .then((responseData) =>{
             console.log(responseData);
            setProds(responseData)})
    }, [])

    return (
        <>
        <div className="nav-wrapper #bbdefb blue lighten-4">
                <a style={{color:'black', padding:'10px'}}>Myntra Lite</a>
                <span>MAN</span>
                <span>WOMAN</span>
                <span>KIDS</span>
                <span>HOME & LIVING</span>
                <span>BEAUTY</span>
                <input id="search" placeholder='Search' type="search" 
                className='search-bar #e3f2fd blue lighten-5 modal-trigger'
                style={{paddingLeft:'5px'}}
                onChange={(e)=>{setFiltered(e.target.value)}}
                />
                  
                
            </div>
            <div className='gallery'>
            {
                    prods.filter((item)=>{
                        if(filtered == ""){
                            return item
                        }else if(item.title.toLowerCase().includes(filtered.toLowerCase())){
                            return item
                        }
                    }).map(item=>{
                        return (<>
                            <div className='card'>
                            <Link to={'/'+item._id}><img key={item._id} className='item' src={item.url} alt={item.type} /></Link>
                            <h6>{item.title}</h6>
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