import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const SingleMovie = ({movie}) => {
    const{title,year,genre,director,rating,image,id}=movie;
  return (
      <div>
      <Helmet>
          <title>Movies</title>
        </Helmet>
        <NavLink to={`/movie/${id}`}>
      <div className="card lg:card-side bg-base-100 shadow-xl p-5">
        
        <figure>
          <img
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[30px] font-bold text-black">{title}</h2>
          <p className="text-[20px] font-medium text-green-500">Published:{year}</p>
          <p className="text-[16px] font-semibold">Genre: {genre}</p>
          <p className="text-[16px] font-semibold">Director: {director}</p>
         <div className="flex gap-4 text-[16px] text-red-700 font-semibold">
            <img src="/public/Frame(1).png" alt="" />
            <p>Rating:{rating}</p>
         </div>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default SingleMovie;
