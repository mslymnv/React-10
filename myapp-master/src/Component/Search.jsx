import React from 'react'
import { useState , useEffect} from 'react'
import '../App.css'
const Search = () => {
      const [resultData, setResultData] = useState([])
  useEffect(()=>{
    fetch('https://655f3541879575426b44d522.mockapi.io/tasks')
    .then(res=>res.json())
    .then(data=>{
      setResultData(data)
     
    })
  },[])
  const [searchMyData, setSearchMyData] = useState("")

    const searchData = (e) =>{
        setSearchMyData(e.target.value.toLowerCase())
      
      }
  return (

    <div className='search-all'>
        <div className="seach-inp">
            
    <input type='text' placeholder='search' onChange={searchData}/>
        </div>
        

        <div className="cards">
        { 
      resultData.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a,b)=>(
        <div key={b} className='card-single'>
        <img  src={a.avatar}/>
        <p>{a.name}</p>
      </div>
      )
      )
    }
 
        </div>
    </div>
  )
}



export default Search
