import { useLocation } from "react-router-dom";
import worldImg from "../assets/world.png";
import codImg from "../assets/cod .png";
import originalImg from "../assets/original.png";
import thumgsUp from "../assets/thumbsup.png";
import { CiStar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";


const ViewDetailes = () => {
  const locate = useLocation();

  // console.log(locate.state);
  const prod = locate.state;
  console.log(prod);

  return (
    <div className="p-5 h-full">
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="flex-1">
          <img src={prod.thumbnail} alt={prod.thumbnail}  className=" h-150 object-contain"/>
        </div>
        <div className="flex-1 p-3 flex flex-col gap-5">
          <h3 className="text-center font-semibold text-xl md:text-left md:text-3xl md:font-bold">{prod.title}</h3>
          <div className="flex justify-between">
            <p className="flex items-center md:text-2xl">
            <FaDollarSign className="text-green-500 md:text-2xl"/>
                {prod.price}</p>
            <div className="flex gap-3">
                 <div className="">
                <p className="text-amber-500 md:text-2xl">{prod.rating}</p>
              </div>
              <div className="flex items-center justify-between">
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar  className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
              </div>
             
            </div>
          </div>
          <p className="md:text-xl"><span className="md:font-bold">Brand : </span>{prod.brand}</p>
          <p className="text-red-500 md:text-xl">Stock : {prod.stock}</p>
          <hr />
          <p className="text-justify md:text-xl"><span className="md:font-bold">Description : </span>{prod.description}</p>
          <p className="text-xl"><span className="md:font-bold">Weight : </span>{prod.weight} kg</p>
          <p className="text-xl"><span className="md:font-bold">Return Policy : </span>{prod.returnPolicy}</p>
          <p className="text-xl"><span className="md:font-bold">Delivery : </span>{prod.shippingInformation}</p>
          <div className="flex justify-between ">
            <div className="flex gap-2 text-xl">
              <label className="md:font-bold">Qty</label>
              <input type="number" className="bg-slate-300" />
            </div>

            <button className="bg-blue-500 hover:text-black px-10 py-1 cursor-pointer rounded-lg text-white md:text-xl">
              Add
            </button>
          </div>
          <div className="flex gap-5">
            <img src={worldImg} alt="world" className="bg-slate-300 h-10 p-1 md:h-15" />
            <img src={codImg} alt="cod" className="bg-slate-300 h-10 p-1 md:h-15" />
            <img
              src={originalImg}
              alt="original"
              className="bg-slate-300 h-10 p-1 md:h-15"
            />
            <img
              src={thumgsUp}
              alt="thumbs up"
              className="bg-slate-300 h-10 p-1 md:h-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailes;
