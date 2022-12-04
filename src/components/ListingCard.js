import React,{useState} from "react";

function ListingCard({image,description,location}) {
  const[favorite,setFavorite] = useState(false)
  const handleClick = () =>{
    setFavorite(!favorite)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button  onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button  className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
