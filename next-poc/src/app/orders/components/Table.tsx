"use client";

import React, { useState } from "react";
import { BidBidsListResultQuotesListInner } from "@/app/type/Interfaces";
import { useRouter } from "next/navigation";

const columns = [
  {
    accessor: "sfdcQuoteId",
    header: "Quote ID",
    width: "w-1/3",
    unit: "",
  },
  {
    accessor: "expirationDate",
    header: "Expiration date",
    width: "w-1/3",
    unit: "",
  },
  {
    accessor: "totalPrice",
    header: "Price",
    width: "w-1/3",
    unit: "",
  },
];

const Table: React.FC<{
  quotesList: Array<BidBidsListResultQuotesListInner>;
}> = ({ quotesList }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6 bg-gray-200 rounded-2xl">
      <div className="flex justify-between items-center text-sm">
        <div className="flex flex-col">
          <h1 className="font-medium">
            Click on the row to show order details
          </h1>
          <hr className={`my-2 border-green-500 w-20`} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium">13 items - page 1 of 1</h1>
          <hr className={`my-2 border-green-500 w-20`} />
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto border-spacing-2">
          <thead className="text-xs text-gray-700 uppercase bg-transparent border-b-2 border-black mb-2">
            <tr className=" border-b border-black">
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  scope="col"
                  className={`px-6 py-3 text-nowrap ${column.width}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <div className="mx-4 opacity-0">Line</div>
          <tbody className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700">
            {quotesList.map((row) => (
              <React.Fragment key={row.sfdcQuoteId}>
                <tr
                  className={`cursor-pointer transition-colors bg-white border-4 border-x-8 hover:bg-gray-100`}
                  onClick={() => router.push(`/orders/${row.sfdcQuoteId}`)}
                >
                  {columns.map((column) => (
                    <td key={column.accessor} className="py-2 px-4 text-nowrap">
                      {row[column.accessor]}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
