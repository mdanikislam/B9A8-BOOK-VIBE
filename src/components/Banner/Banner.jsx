import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#1313130D] rounded-3xl my-10 p-16">
      <div className="lg:flex justify-between items-center space-y-10">
        <div className="p-16">
          <h2 className="text-[#131313] text-[30px] font-bold lg:text-[56px]">
            Books to freshen up your bookshelf
          </h2>

          {/* function button */}
          <Link to ='/listed-book'>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#23BE0A] text-[#FFFFFF] lg:text-[20px] font-bold">
            View The List
          </button>
          </Link>
          

        </div>
        <div>
          <img src="/bannerBook.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
