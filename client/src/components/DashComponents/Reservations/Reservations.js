import React from "react";
import "./Reservations.css"
import { Link } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard";

const Reservations = () => {
  return (
    <div>
      <div>
        <h3 className="dash-reserve-title">Upcoming Reservations</h3>
        <Link className="wrapper-link" to="/reservation-details">
        <ListingCard />
        </Link>
      </div>
      <div className="dash-border-top">
        <h3 className="dash-reserve-title">Previous Reservations</h3>
        <ListingCard />
      </div>
    </div>
  );
};
export default Reservations;
