// This is the way to import named export f
import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // using destructure
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card card m-2">
      <img
        className="res-food card-img-top mw-100"
        alt="food-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-body">
        <h4 className="card-title text-secondary ">{name}</h4>
        <p className="card-text ">
          <b>{cuisines.join(",")}</b>
        </p>
        <span className="card-text">
          <b>avgrating:{avgRating}</b>
        </span>
        {/* <span className="card-text">
          <b>{totalRatingsString}</b>
        </span> */}
        <p>
          <b>{costForTwo}</b>
        </p>
        <p>
        <b>User: {loggedInUser}</b>
        </p>
      </div>
    </div>
  );
};

// Higher Order Component 
// input - RestaurantCard => output - RestaurantCardTopRated
export const withTopRated = (RestaurantCard) => {
  return (props) => {
    return (
<div >
    <label className="Rated">Top-Rated⭐</label>
    <RestaurantCard {...props} />
</div>
    );
  };
};
export default RestaurantCard;
