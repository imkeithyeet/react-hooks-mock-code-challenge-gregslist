import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const mappedListings = listings.map((listing)=>{
    return <ListingCard 
    key={listing.id}
    description={listing.description}
    image={listing.image}
    location={listing.location}
    />
  })
  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
