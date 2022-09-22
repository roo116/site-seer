import React from "react";
import Carousel from "../Carousel/Carousel";
import "./ListingCard.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const ListingCard = (props) => {
	const { campsite } = props;
  const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/single-site/${campsite._id}`)
	};
	return (
		<div className="listingCard">
			{/* TODO: On click, redirect to single campsite page */}
			<Carousel campsite={campsite}></Carousel>
			<div className="basicInfo" onClick={handleClick}>
				<h2 className="capitalize">{campsite.name}</h2>
				<h3 className="location">
					{campsite.city}, {campsite.state}
				</h3>
			</div>
		</div>
	);
};
export default ListingCard;
