import React from "react";

const Card = ({ avatar, fName, lName, email }) => {
  return (
    <div className="card">
      <img src={avatar} alt="profile pic" className="cardImage" />
      <p className="cardName">
        {fName} {lName}
      </p>
      <p className="cardEmail">{email}</p>
    </div>
  );
};

export default Card;
