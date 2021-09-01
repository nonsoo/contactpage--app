import React from "react";

const Card = ({ profPic, fName, lName, email, position }) => {
  return (
    <div className="card">
      <img src={profPic} alt="profile pic" className="card__Image" />
      <p className="card__Name">
        {fName} {lName}
      </p>
      <p className="card__position">{position}</p>
      <p className="card__Email">{email}</p>
    </div>
  );
};

export default Card;
