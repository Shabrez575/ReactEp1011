import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  //Logic to fetch the data from the API of Menu.
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.565057&lng=77.2849402&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
    );

    const json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
