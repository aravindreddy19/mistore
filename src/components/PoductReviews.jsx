import React from "react";
import PoductReviewCard from './PoductReviewCard.jsx';
const PoductReviews = ({ productReviews }) => {
  return (
    <div style={{display:"flex"}} className="poductReviews">
      {productReviews.map((item, index) => (
      <PoductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />)
        
      )}
    </div>
  );
};

export default PoductReviews;
