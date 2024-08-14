import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {Link, useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer  } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const loadData = useLoaderData();
  const [loadingData, setLoadingData] = useState([]);
  console.log();

  useEffect(() => {
    const bookIds = JSON.parse(localStorage.getItem("read-books"));
    if (bookIds.length) {
      const filtered = loadData?.filter((book) =>
        bookIds.includes(book.bookId)
      );
      setLoadingData(filtered);
    }
  }, [loadData]);

  const bookData = loadingData.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <Helmet>
        <title>Rechart</title>
      </Helmet>
      <BarChart
       className="bg-gray-200 rounded-3xl lg:p-6 lg:my-10"
        // width={1000}
        // height={500}
        data={bookData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {bookData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      <div className="font-bold text-center py-4 text-[16px] lg:text-3xl"><h2>Readead Book Statistics</h2></div>
      <div className="text-center py-10">
      <Link  className="lg:text-[30px] text-[20px] text-white font-semibold bg-gray-500 rounded-xl p-5" to="/">Back to Home</Link>
      </div>
      </ResponsiveContainer>

     
  );
};

export default PagesToRead;
