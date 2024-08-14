import { useEffect, useState } from "react";
import SingleMovie from "../SingleMovie/SingleMovie";

const Movies = () => {


    const[movies, setMovies]= useState([])
    // console.log(movies);


    useEffect(()=>{
        fetch('./movies.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])



  return (
    <div className="space-y-6">
      <h1 className="text-center py-10 text-[#FFF] font-bold text-[20px] lg:text-[40px]  bg-yellow-600 rounded-3xl">M O V I E S</h1>

      <div className=" flex flex-col gap-10 lg:grid grid-cols-3 lg:gap-10">
        {
            movies.map(movie=> <SingleMovie key={movie.id} movie={movie}></SingleMovie>)
        }
      </div>

      
    </div>
  );
};

export default Movies;
