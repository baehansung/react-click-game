// import React from "react";
// import "./FriendCard.css";

// const FriendCard = props => (
//   <div className="card" value={props.id} onClick={() => props.clicked(props.id)}>
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );

// export default FriendCard;


import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" 
    value={props.id} 
    onClick={() => props.click(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;