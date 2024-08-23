"use client";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Filter() {
  const [priceValue, setPriceValue] = useState(50);
  const [stockMin, setStockMin] = useState(0);
  const [submenuOpen, setSubmenuOpen] = useState({} as any);

  return (
    <div className="min-w-1/4 flex flex-col mr-5">
      <div className="flex justify-between items-center gap-4">
        <input
          type="search"
          id="search-dropdown"
          className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
          placeholder="Type to search"
          required
        />
        <button
          type="submit"
          className="h-10 w-10 rounded-full bg-[#a2c661] flex items-center justify-center text-white "
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      <h1 className="font-bold mt-10 pb-3 text-lg border-b border-black">
        Filters
      </h1>
      <div className="flex flex-col p-4 border-b border-black gap-3">
        <h1 className="font-medium flex justify-between items-center">
          By date
        </h1>
        <input
          type="date"
          placeholder="From"
          className="focus:outline-none focus:border-black border p-1 rounded ml-2"
        />
        <input
          type="date"
          placeholder="To"
          className="focus:outline-none focus:border-black border p-1 rounded ml-2"
        />
      </div>
      <div className="flex flex-col p-4 border-b border-black">
        <button
          className="font-medium flex justify-between items-center"
          onClick={() => {
            setSubmenuOpen({
              ...submenuOpen,
              productType: !submenuOpen.productType,
            });
          }}
        >
          <h1>By status</h1>
          <HiOutlineChevronDown
            className={`text-gray-700 transition-transform duration-300 ${
              submenuOpen.productType ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`flex flex-col px-4 gap-2 transition-height duration-300 ease-in-out overflow-hidden ${
            submenuOpen.productType ? "max-h-[1000px] py-4" : "max-h-0"
          }`}
        >
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            Accepted
          </div>
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            Deleted
          </div>
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            Expired
          </div>
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            In progress
          </div>
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            Rejected
          </div>
          <div className="flex font-medium text-sm items-center ">
            <input type="checkbox" className="mr-3" />
            Waiting
          </div>
        </div>
      </div>
    </div>
  );
}
