
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {

    const movies = useLoaderData();
    const{id}=useParams();

    console.log(id, movies);
    const moviesIdInt=parseInt(id);
    const movie = movies.find((movie)=>movie.id ===moviesIdInt);
    console.log(movie);

     
        
    return (
        <div className="">
          <Helmet>
            <title>Movie{id}</title>
          </Helmet>
             <div className="card lg:card-side bg-base-100 shadow-xl p-5">
        <figure>
          <img
            src={movie.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[30px] font-bold text-black">{movie.title}</h2>
          <p className="text-[20px] font-medium text-green-500">Published:{movie.year}</p>
          <p className="text-[16px] font-semibold">Genre: {movie.genre}</p>
          <p className="text-[16px] font-semibold">Director: {movie.director}</p>
         <div className="flex gap-4 text-[16px] text-red-700 font-semibold">
            <img src="/public/Frame(1).png" alt="" />
            <p>Rating:{movie.rating}</p>
         </div>
        </div>
      </div>
      <div className="text-center py-10">
      <Link  className="lg:text-[30px] text-[20px] text-white font-semibold bg-gray-500 rounded-xl p-5" to="/movies">Back to Movies</Link>
      </div>
        </div>
    );
};

export default MovieDetails;