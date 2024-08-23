"use client";

import React, { Reference, useState } from "react";
import Image from "next/image";
import { BidProductAvailabilityResult } from "@/app/type/Interfaces";

const columns = [
  {
    accessor: "customerName",
    header: "Distributor",
    width: "w-2/5",
    className: "",
  },
  {
    accessor: "qtyInStock",
    header: "Stock",
    width: "w-1/5",
    className: "text-center",
  },
  {
    accessor: "inbound",
    header: "Inbound",
    width: "w-1/5",
    className: "text-center",
  },
  {
    accessor: "qtyInTransit",
    header: "Quantity",
    width: "w-1/5",
    className: "text-center",
  },
];

const ProductDetail: React.FC<{
  data: BidProductAvailabilityResult;
}> = ({ data }) => {
  const [quantity, setQuantity] = useState({} as { [key: string]: any });

  const handlePlusClick = (customerName: string) => {
    console.log(quantity[customerName]);
    setQuantity((quantity) => ({
      ...quantity,
      [customerName]: quantity[customerName] + 1,
    }));
  };
  const handleMinusClick = (customerName: string) => {
    if (quantity[customerName] == 0) return;
    setQuantity((quantity) => ({
      ...quantity,
      [customerName]: quantity[customerName] - 1,
    }));
  };
  let totalQuantity: number = 0;
  Object.keys(quantity).map((customerName) => {
    totalQuantity += quantity[customerName];
  });
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col w-full py-4 px-8 rounded-xl bg-gray-200 ">
        <div className="flex pb-4 mb-4 justify-between items-center border-b border-white">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium flex text-sm">
              Select quantity for each distributor, then click on &quot;Add to
              cart&quot; button.
            </h1>
            <div className="flex justify-between text-xl">
              <div className="flex">
                <h1 className="mr-3">Quantity:</h1>
                <h1 className="font-bold">{totalQuantity}</h1>
              </div>
              <div className="flex">
                <h1 className="mr-3">Total price</h1>
                <h1 className="font-bold">{totalQuantity * 2342} &euro;</h1>
              </div>
            </div>
          </div>
          <div className="flex text-base">
            <button className="px-8 py-1 mr-4 bg-[#a2c661] text-white font-bold rounded-full hover:bg-green-500 hover:text-white">
              Add to cart
            </button>
            <button className="px-8 border-2 border-[#a2c661] text-black font-bold rounded-full hover:bg-green-500 hover:border-green-500 hover:text-white">
              View
            </button>
          </div>
        </div>
        <div className="flex flex-col font-bold">
          <h1 className="flex text-[#a2c661] text-xl items-end">
            &euro;&#160; <span className="text-4xl">518</span>,40
          </h1>
          <h1 className="flex items-center">
            <span className="text-red-600 underline-offset-2 text-base line-through">
              &#160;&euro; 576,00&#160;
            </span>
            &#160; ( -10% off the dealer price for the purchase of more than 20
            units)
          </h1>
        </div>
      </div>
      <div className="flex mt-4 items-start bg-white">
        <Image
          className="flex m-4"
          src="/images/desktop.png"
          alt="logo"
          width={200}
          height={200}
        />
        <div className="flex flex-grow">
          <table className="w-full">
            <thead className="text-gray-500">
              <tr className=" border-b border-black">
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    scope="col"
                    className={`px-3 py-3 text-nowrap ${column.className}  ${column.width}`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {data.availabilityConfig?.map((row) => (
                <React.Fragment key={row.accountId}>
                  <tr className={`border-y-2 border-gray-300`}>
                    {columns.map((column) => {
                      if (
                        quantity[row.customerName] == null ||
                        quantity[row.customerName] == undefined
                      )
                        setQuantity((quantity) => ({
                          ...quantity,
                          [row.customerName]: 0,
                        }));
                      switch (column.accessor) {
                        case "qtyInTransit":
                          return (
                            <td
                              className={`text-lg text-nowrap flex  ${column.className} justify-center`}
                            >
                              <div className="flex w-full items-center max-w-24 my-2 px-3 mx-4 border border-black rounded-full justify-between">
                                <button
                                  className="w-5"
                                  onClick={() =>
                                    handleMinusClick(row.customerName)
                                  }
                                >
                                  -
                                </button>
                                {quantity[row.customerName]}
                                <button
                                  className="w-5"
                                  onClick={() => {
                                    handlePlusClick(row.customerName);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                          );

                        default:
                          return (
                            <td
                              key={column.accessor}
                              className={`py-2 px-4 text-nowrap  ${column.className} `}
                            >
                              {row[column.accessor]}
                            </td>
                          );
                      }
                    })}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between text-sm font-medium px-8 border-t border-black">
        <h1 className="flex items-center">
          <span className="w-2 h-2 flex rounded-full bg-green-700" />
          &#160; more than 50 items in stock/inbound
        </h1>
        <h1 className="flex items-center">
          <span className="w-2 h-2 flex rounded-full bg-yellow-700" />
          &#160; less than 50 items in stock/inbound
        </h1>
        <h1 className="flex items-center">
          <span className="w-2 h-2 flex rounded-full bg-red-700" />
          &#160; less than 10 items in stock/inbound
        </h1>
      </div>
    </div>
  );
};

export default ProductDetail;
