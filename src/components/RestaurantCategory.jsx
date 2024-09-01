import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy}) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setShowIndex();
    // Here we write an logic to show the items
    // setShowItems(!showItems);
  };
  return (
    <div>
      {/* Header */}
      {/* Restaurant Category */}
      <div className="mx-auto my-4 bg-gray-50 shadow-lg p-3 w-50">
        <div className="d-flex justify-content-between" onClick={handleClick}>
          <span className="font-weight-bold">
            {data.title}  ({data.itemCards.length})
          </span>
          <span>{showItems === true ? <span>🔽</span> : <span>▶️</span>}</span>

          {/* <span>🔽</span> */}
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} dummy = {dummy} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
