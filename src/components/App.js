import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const API="http://localhost:6001/listings"

function App() {
  const[listings,setListings] = useState([])
  const[search,setSearch] = useState("")
  useEffect(() =>{
    fetch (API)
    .then(res=>res.json())
    .then(data=>setListings(data))
  },[])

  const visibleItems=listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={visibleItems} />
    </div>
  );
}

export default App;
