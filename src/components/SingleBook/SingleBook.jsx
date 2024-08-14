
import { NavLink } from "react-router-dom";

const SingleBook = ({book}) => {
     const{bookId,tags,bookName,author,image,category,rating,}=book;
  return (
    <div className="">
      <NavLink to={`/book/${bookId}`}>
      <div className="card bg-gray-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img 
            src={image}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
            <div className="flex gap-5 text-[#23BE0A] text-[16px] font-medium">
                <p>{tags}</p>
            </div>
          <h2 className="card-title text-[#131313] text-[24px] font-bold">{bookName}</h2>
           <h2 className="text-[#131313CC] text-[16px] font-medium">By: {author}</h2>
           <hr className="border-dashed"/>
          <div className="flex text-[#131313CC] text-[16px] font-medium">
            <p>{category}</p>
            <div className="flex justify-center items-center gap-2">
            <p>{rating}</p>
             <img src="./Frame(1).png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default SingleBook;
