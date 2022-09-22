import React from "react";
import "./SingleSite.css";

import Auth from "../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";

import StarIcon from "@mui/icons-material/Star";
import AmenitiesDisplay from "../../components/AmenitiesDisplay/AmenitiesDisplay";

import { QUERY_CAMPSITE } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const SingleSite = () => {
	const { id: _id } = useParams();
	const navigate = useNavigate();

	const { loading, data } = useQuery(QUERY_CAMPSITE, {
		variables: { _id: _id },
	});
	const campsite = data?.campsites[0] || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	const handleClick = () => {
		if (!Auth.loggedIn()) {
			navigate('/login');
		}
		else {
			navigate(`/reserve/${campsite._id}`)
		}
	};
	return (
		<main>
			<Carousel campsite={campsite} />
			<div className="singlesite-section">
				<section>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</section>
				<section>
					<h2 className="capitalize">{campsite.name}</h2>
					<h3 className="capitalize">
						{campsite.city}, {campsite.state}
					</h3>
				</section>
				<AmenitiesDisplay campsite={campsite} />
				<section>
					<h3>Description</h3>
					<p>{campsite.description}</p>
				</section>
				<div className="btn-container">
					<button className="btn btn-long" onClick={handleClick}>
						Reserve
					</button>
				</div>
			</div>
		</main>
	);
};

export default SingleSite;
