"use client";

import React, { Reference, useState } from "react";
import Image from "next/image";
import { BidProductAvailabilityResultAvailabilityConfigInner } from "@/app/type/Interfaces";

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
  data: Array<BidProductAvailabilityResultAvailabilityConfigInner>;
}> = ({ data }) => {
  const [quantity, setQuantity] = useState({} as { [key: string]: any });

  const handlePlusClick = (customerName: string) => {
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
      <div className="flex mt-4 items-start bg-white">
        <div className="flex flex-grow">
          <table className="w-full">
            <thead>
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
              {data.map((row) => (
                <React.Fragment key={row.accountId}>
                  <tr className={`border-y-2 `}>
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
    </div>
  );
};

export default ProductDetail;
