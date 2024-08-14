import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-10">

        <div>
        <h1 className="text-center py-10 text-[#131313] font-bold text-[60px] lg:text-[40px]rounded-3xl">404</h1>
      <h1 className="text-center py-10 text-[#131313] font-bold text-[60px] rounded-3xl">
        Page not found
      </h1>
      <Link  className="text-[40px] text-red-700" to="/">Back to home</Link>
        </div>
    </div>
  );
};

export default ErrorPage;
