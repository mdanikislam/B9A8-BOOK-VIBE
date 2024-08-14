import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const SingleDiary = ({diary}) => {

    const{id,image,title,description,price}=diary
  return (
    <div>
    <NavLink to={`/diary/${id}`}>
  <div className="card lg:card-side bg-gray-300 shadow-xl p-5">
    <Helmet>
      <title>Diary</title>
    </Helmet>
    <figure>
      <img
        src={image}
        alt="Album"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-[30px] font-bold text-black">{title}</h2>
      <p className="text-[20px] font-medium text-gray-700">Description: {description}</p>
      <p className="text-[16px] text-red-700 font-semibold">Price: {price}</p>
    </div>
  </div>
  </NavLink>
</div>
  );
};

export default SingleDiary;
