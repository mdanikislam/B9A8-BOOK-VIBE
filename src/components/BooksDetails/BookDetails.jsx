import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  // console.log(book);

  

  const getItemsFromLS = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  const [readBooks, setReadBooks] = useState(getItemsFromLS("read-books"));

  const [wishlist, setWishlist] = useState(getItemsFromLS("wishlist"));

  const handleReadBook = (book) => {
    if (!readBooks.includes(book.bookId)) {
      setReadBooks([...readBooks, book.bookId]);
      toast("Book added to Read list");
    } else {
      toast("Book already added to Read list");
    }
  };

  const handleWishlist = (book) => {
    if (readBooks.includes(book.bookId)) {
      toast("Book already marked as Read, cannot be added to Wishlist");
    } else if (!wishlist.includes(book.bookId)) {
      setWishlist([...wishlist, book.bookId]);
      toast("Book added to Wishlist");
    } else {
      toast("Book already added to Wishlist");
    }
  };

  useEffect(() => {
    localStorage.setItem("read-books", JSON.stringify(readBooks));
  }, [readBooks]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  


  
  return (
    <div>
      <Helmet>
        <title>Books{bookId}</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl p-9">

        <figure>
          <img src={book.image} alt="Album" />
        </figure>
        <div className="card-body space-y-2">
          <h2
            className="card-title text-[#131313] text-[20px]
        lg:text-[40px] font-bold"
          >
            {book.bookName}
          </h2>
          <p className="text-[#131313CC] text-[20px] font-medium">
            By : {book.author}
          </p>
          <hr className="border-dashed" />
          <p className="text-[#131313CC] text-[20px] font-medium">
            {book.category}
          </p>
          <hr className="border-dashed" />
          <p className="text-[#131313B3] text-[16px]">
            <span className="text-[#131313] text-[16px] font-bold">
              Review :{" "}
            </span>
            {book.review}
          </p>
          <h3 className="text-[#23BE0A] text-[16px] font-medium">
            <span className="text-[#131313] text-[16px] font-bold">Tags </span>
            {book.tags}
          </h3>
          <hr className="border-dashed" />
          <div className="space-y-2 text-[#131313B3] text-[16px]">
            <p>
              Number of Pages:{" "}
              <span className="text-[#131313] text-[16px] font-bold">
                {book.totalPages}
              </span>
            </p>
            <p>
              Publisher:{" "}
              <span className="text-[#131313] text-[16px] font-bold">
                {book.publisher}
              </span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="text-[#131313] text-[16px] font-bold">
                {book.yearOfPublishing}
              </span>
            </p>
            <p>
              Rating:{" "}
              <span className="text-[#131313] text-[16px] font-bold">
                {book.rating}
              </span>
            </p>
          </div>

          <div className="card-actions">
            <button
              onClick={()=>handleReadBook(book)}
              className="btn text-[#131313] font-semibold text-[18px]"
            >Read
            </button>
            <button
              onClick={() => handleWishlist(book)}
              className="btn bg-[#50B1C9] text-[#FFF] font-semibold text-[18px]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div className="text-center py-10">
      <Link className="lg:text-[30px] text-[20px] text-white font-semibold bg-gray-600 rounded-xl p-5" to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default BookDetails;
