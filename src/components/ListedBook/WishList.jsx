import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlist, setWishList] = useState([]);
  const [wishlists, setWishLists] = useState([]);

  console.log(wishlists);

  const getWishListFromLS = useCallback(() => {
    const booksIds = JSON.parse(localStorage.getItem("wishlist"));

    if (booksIds) {
      const filteredBooks = wishlist.filter((book) =>
        booksIds.includes(book.bookId)
      );
      setWishLists(filteredBooks);
    }
  }, [wishlist]);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setWishList(data))
      .catch((error) => console.error("Error fetching wishlist data:", error));
  }, []);

  useEffect(() => {
    getWishListFromLS();
  }, [getWishListFromLS]);

  return (
    <div className=" flex flex-col gap-10 space-y-2">
      {wishlists.map((book) => (
        <div key={book.bookId}>
          <div className="card lg:card-side bg-gray-200 shadow-xl p-10">
            <figure className="w-96 h-96">
              <img src={book.image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#131313] text-[24px] font-bold">
                {book.bookName}
              </h2>
              <p className="text-[#131313CC] text-[20px] font-medium">
                By :{book.author}
              </p>
              <div className="flex gap-10">
                <h3 className="text-[#23BE0A] text-[16px] font-medium">
                  <span className="text-[#131313] text-[16px] font-bold">
                    Tags{" "}
                  </span>
                  {book.tags}
                </h3>
                <p className="text-[#131313] text-[20px]">
                  Year of Publishing: {book.yearOfPublishing}
                </p>
              </div>
              <div className="flex gap-7 text-[#131313CC] text-[20px] font-medium">
                <div>
                  <p>Publisher: {book.publisher}</p>
                </div>
                <div>
                  <p>Page: {book.totalPages}</p>
                </div>
              </div>
              <hr className="border-dashed" />
              <div className="flex gap-5 font-medium">
                <div>
                  <p className="bg-[#328EFF] rounded-full text-[#FFF] text-center p-3">
                    Category: {book.category}
                  </p>
                </div>
                <div>
                  <p className="bg-[#FFAC33] rounded-full text-[#FFF] text-center p-3">
                    Rating: {book.rating}
                  </p>
                </div>
                <div>
                  <Link>
                    <p className="bg-[#23BE0A] rounded-full text-[#FFF] text-center p-3">
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
