import RestaurantCard, { withTopRated } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//We will get Error If we do this: Warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
// const [searchText, setSearchText] = useState("");

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  // Copy of above restaurant list
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withTopRated(RestaurantCard);
  console.log("Body Rendered", restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691957&lng=77.2886424&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );

    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return (
      <h1>
        Looks Like You're offline!! Please check your internet connection 🔴
      </h1>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter my-5 d-flex px-2 justify-content-between">
        <div className="search px-2">
          <input
            type="text"
            className="search-box border-solid"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText);
              const searchRestList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(searchRestList);
            }}
            className="search-btn btn btn-dark btn-md mx-3"
          >
            Search
          </button>
        </div>
        <div className="sort ">
          <button
            className="filter-btn btn btn-outline-success btn-md mx-3"
            onClick={() => {
              const filter_restaurantList = restaurantList.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setFilteredRestaurant(filter_restaurantList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="text-decoration-none"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* If the restaurant is more than 4.5 rating then add label top rated on it.  */}
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
