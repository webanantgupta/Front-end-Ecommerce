import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import appStore from "../assets/app-store1.png";
import playStore from "../assets/play-store1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200 p-2 md:p-6">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-10">
        <div className="my-2 md:flex md:flex-col md:gap-8">
          <div>
            <h5 className="text-center font-semibold md:text-xl">ABOUT</h5>
          </div>
          <div>
            <p className="text-justify">
              We are a trusted e-commerce platform offering quality products at
              competitive prices. Our goal is to provide a seamless shopping
              experience with reliable service and fast delivery.
            </p>
          </div>
           <div className="hidden md:flex justify-evenly mt-4 ">
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <TbBrandMeta />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <AiOutlineYoutube />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <RiTwitterXLine />
            </div>
          </div>
        </div>
        <div className="lg:flex  lg:flex-col lg:justify-between my-2">
            <div>
          <h5 className="text-center font-semibold md:text-xl">CONTACT</h5>
            </div>
          <div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <FaLocationDot />
              </div>
              <div>
                <p>
                  Address : Alkapuri R.C. Dutt Road, Vadodra, Gujarat India,
                  Pin-Code:390005
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <FaPhone />
              </div>
              <div>
                <p>Phone : +91 7845285632</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <MdEmail />
              </div>
              <div>
                <p>Email : contact@ecommerce.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly md:hidden">
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <TbBrandMeta />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
              <AiOutlineYoutube />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
              <RiTwitterXLine />
            </div>
          </div>
        </div>
        <div className="flex-1 my-2">
          <h5 className="text-center font-semibold my-2 md:text-xl">
            Subscribe for our offer news
          </h5>
          <div className="flex justify-evenly">
            <input type="text" placeholder="Enter your email address" className="bg-white px-4" style={{color:"black"}}/>
            <button className="bg-blue-500 px-4 py-2 rounded-[10px] text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex-1 my-2">
          <h5 className="text-center font-semibold my-2 md:text-xl">
            Download App
          </h5>
          <div className="flex justify-around items-center">
            <img src={appStore} alt="app stroe" />
            <img src={playStore} alt="play store" />
          </div>
        </div>
      </div>

      <div className="text-center mt-5 md:flex justify-center gap-8">
        <div className="">
          <p>Copyright © 2026 All rights reserved</p>
        </div>
        <div>
          <p>
            Powered By <Link to={"https://onebigbit.com/"} target="_blank" className="text-blue-500">Onebigbit Technologies Private Limited</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
