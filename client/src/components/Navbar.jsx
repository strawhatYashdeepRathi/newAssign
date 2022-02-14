import React, {useState, useRef, useEffect} from 'react';
import './comp.css'


const Navbar = ()=>{

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
                />
                  
                
            </div>
        </>
    )
}

export default Navbar