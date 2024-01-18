// component
import Tabs from "./Tabs";

const FeaturedBooks = () => {
  const tabs = [
    { label: "Featured", url: "/arrival.json" },
    { label: "On Sale", url: "/onSale.json" },
    { label: "Most Viewed", url: "/viewed.json" },
  ];
  return (
    <div>
      <h3 className=" text-center text-2xl font-semibold my-5">
        Featured Books
      </h3>

      <div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default FeaturedBooks;
