import React, {useState, useRef, useEffect} from 'react';
import './comp.css'
import data from '../data/data.json'
import M from 'materialize-css'


const Navbar = ()=>{
    // const searchModal = useRef(null)
    // const [search, setSearch] = useState("")
    // const [elem, setElem] = useState([])

    // useEffect(()=>{
    //     M.Modal.init(searchModal.current)
    // }, [])


    // const fetchlist =(query)=>{
    //     setSearch(query)
    //     fetch('/search-prods',{
    //         method:"post",
    //         mode:"cors",
    //         headers:{
    //           "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //           query
    //         })
    //       }).then(res=>res.json())
    //       .then(results=>{
    //           console.log(results)
    //         setElem(results.user)
    //       })
    // }

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