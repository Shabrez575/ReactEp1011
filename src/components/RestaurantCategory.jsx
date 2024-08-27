import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Header */}
      {/* Restaurant Category */}
      <div className="mx-auto my-4 bg-gray-50 shadow-lg p-3 w-50">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategory;
