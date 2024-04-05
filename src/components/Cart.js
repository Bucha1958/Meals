import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import beef from "../images/beef.jpg";
import chicken from "../images/chicken.jpg";
import special from "../images/special.jpg";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <main className="md:px-40 px-5 md:mb-96">
        <motion.div className="overflow-x-auto relative" animate={{ y: 10 }} transition={{ ease: "easeOut", duration: 2 }}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Cancel
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  White rice and stew
                </th>
                <td className="py-4 px-6">
                  <img src={beef} className="w-12 h-12 object-cover rounded-md" alt="" />
                </td>
                <td className="py-4 px-6">Rice</td>
                <td className="py-4 px-6">$2999</td>
                <td className="py-4 px-6">
                  <ImCancelCircle className="cursor-pointer" />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Chicken Sauce
                </th>
                <td className="py-4 px-6">
                  <img src={chicken} className="w-12 h-12 object-cover rounded-md" alt="" />
                </td>
                <td className="py-4 px-6">Chicken</td>
                <td className="py-4 px-6">$1999</td>
                <td className="py-4 px-6">
                  <ImCancelCircle className="cursor-pointer" />
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Rice and vegetable sauce
                </th>
                <td className="py-4 px-6">
                  <img src={special} className="w-12 h-12 object-cover rounded-md" alt="" />
                </td>
                <td className="py-4 px-6">Special</td>
                <td className="py-4 px-6">$99</td>
                <td className="py-4 px-6">
                  <ImCancelCircle className="cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
