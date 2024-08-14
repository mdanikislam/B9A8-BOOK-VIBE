import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  console.log(readBooks);

  const getReadBooksFromLS = useCallback(() => {
    const bookIds = JSON.parse(localStorage.getItem("read-books"));
    if (bookIds) {
      const filteredBooks = books.filter((book) =>
        bookIds.includes(book.bookId)
      );
      setReadBooks(filteredBooks);
    }
  }, [books]);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books data:", error));
  }, []);

  useEffect(() => {
    getReadBooksFromLS();
  }, [getReadBooksFromLS]);

  return (
    <div className=" flex flex-col gap-10 space-y-2">
      
      {readBooks.map((book) => (
        <div key={book.bookId}>
          <div className="card lg:card-side bg-gray-200 shadow-xl p-10">
            <figure  className="w-96 h-96">
              <img
                src={book.image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#131313] text-[24px] font-bold">{book.bookName}</h2>
              <p className="text-[#131313CC] text-[20px] font-medium">By :{book.author}</p>
              <div className="flex gap-10">
              <h3 className="text-[#23BE0A] text-[16px] font-medium">
            <span className="text-[#131313] text-[16px] font-bold">Tags </span>
            {book.tags}
            </h3>
              <p className="text-[#131313] text-[20px]">Year of Publishing: {book.yearOfPublishing}</p>
            </div>
              <div className="flex gap-7 text-[#131313CC] text-[20px] font-medium">
                <div>
                <p>Publisher: {book.publisher}</p>
                </div>
                <div>
                <p>Page: {book.totalPages}</p>

                </div>
              </div>
              <hr className="border-dashed"/>
              <div className="flex gap-5 font-medium">
                <div>
                <p className="bg-[#328EFF] rounded-full text-[#FFF] text-center p-3">Category:   {book.category}</p>
                </div>
                <div>
                <p className="bg-[#FFAC33] rounded-full text-[#FFF] text-center p-3" >Rating: {book.rating}</p>
                </div>
               <div>
               <Link><p className="bg-[#23BE0A] rounded-full text-[#FFF] text-center p-3">View Details</p></Link>
               </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBook;
