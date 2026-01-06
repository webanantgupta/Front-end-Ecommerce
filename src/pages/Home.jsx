import axios from "axios";
import { useState, useEffect } from "react";
import Choose from "../components/Choose";
import HeroImageCarousal from "../components/HeroImageCarousal";
import PopularBrands from "../components/PopularBrands";
import Footer from "../common/Footer";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    return await axios
      .get("https://dummyjson.com/products?limit=100")
      .then((result) => {
        console.log(result.data.products);
        const products = result.data.products;
        setData(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeroImageCarousal />
      <div className=" mx-2 my-5 p-5 sm:mx-2 sm:p-2 md:mx-6 md:p-10 lg:mx-20 ">
        <Choose />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {data &&
            data.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="bg-slate-200 product_card flex flex-col justify-evenly rounded-2xl p-5"
                >
                  <img
                    src={obj.thumbnail}
                    alt={obj.title}
                    className="object-cover h-60"
                  />
                  <div className="flex justify-between my-2">
                    <h4 className="text-center">
                      {obj.title}
                    </h4>
                    <div className="flex items-center">
                      <HiOutlineCurrencyDollar className="text-green-500" />
                      <div>
                        <p className="">{obj.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                        quantity
                    </div>
                    <button className="bg-blue-500 px-10 py-1 cursor-pointer rounded-[8px]">Add</button>
                  </div>
                </div>
              );
            })}
        </div>
        <PopularBrands />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
