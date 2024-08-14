import { useState } from "react";
import ReadBook from "./ReadBook";
import WishList from "./WishList";
import { Helmet } from "react-helmet-async";

const ListedBook = () => {
  const [selectedTab, setSelectedTab] = useState("read");

  const handleTabChange = (book) => {
    setSelectedTab(book);
  };

  return (
    <>
      <div className="py-8">
        <Helmet>
          <title>Listed Book</title>
        </Helmet>
        <h2 className="text-center py-10 text-[#131313] font-bold text-[40px] bg-gray-100 rounded-2xl">
          Book
        </h2>

        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 justify-center items-center">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read"
          checked={selectedTab === "read"}
          onChange={() => handleTabChange("read")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadBook />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish list"
          checked={selectedTab === "wishlist"}
          onChange={() => handleTabChange("wishlist")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <WishList />
        </div>
      </div>
    </>
  );
};

export default ListedBook;
