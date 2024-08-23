"use client";

import React, { useState } from "react";
import {
  BidProductAvailabilityResult,
  BidProductSearchResultResProductsInner,
} from "@/app/type/Interfaces";
import ProductDetail from "./ProductDetail";
import Pagination from "./Pagination";

const columns = [
  { accessor: "partNumber", header: "Part number", width: "w-1/6", unit: "" },
  { accessor: "productModel", header: "Model", width: "w-1/6", unit: "" },
  { accessor: "screenSize", header: "Screen", width: "w-1/12", unit: '"' },
  { accessor: "cpuFamily", header: "CPU", width: "w-1/6", unit: "" },
  { accessor: "ram", header: "RAM", width: "w-1/12", unit: " GB" },
  { accessor: "storage", header: "Storage", width: "w-1/12", unit: " GB" },
  { accessor: "totalQtyInStock", header: "Stock", width: "w-1/12", unit: "" },
  {
    accessor: "standardDealerPrice",
    header: "Price",
    width: "w-1/12",
    unit: " €",
  },
  {
    accessor: "publicPrice",
    header: "Public Price",
    width: "w-1/12",
    unit: " €",
  },
];

const Table: React.FC<{
  resProducts: Array<BidProductSearchResultResProductsInner>;
  productDetailData: Array<BidProductAvailabilityResult>;
}> = ({ resProducts, productDetailData }) => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleRowClick = async (rowId: string) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
      return;
    }
    setExpandedRow(rowId);

    // router.push(`/products?${rowId}`);
  };

  let productId = productDetailData.findIndex(
    (item) => item.productWrapper?.productId === expandedRow
  );
  if (productId == -1) productId = 0;

  return (
    <div className="flex flex-col items-center ">
      <div className="container mx-auto p-6 bg-gray-200 rounded-2xl">
        <div className="flex justify-between items-center text-sm">
          <div className="flex flex-col">
            <h1 className="font-medium">
              Click on the row to show product details
            </h1>
            <hr className={`my-2 border-green-500 w-20`} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium">3042 items - page 1 of 191</h1>
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
            <tbody className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700">
              {resProducts.map((row) => (
                <React.Fragment key={row.productWrapper?.productId}>
                  <tr
                    className={`cursor-pointer duration-300 transition-colors bg-white   ${
                      expandedRow === row.productWrapper?.productId
                        ? "border-t-4"
                        : "border-4 border-x-8 hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      handleRowClick(row.productWrapper?.productId as string)
                    }
                  >
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className="py-2 px-4 text-nowrap"
                      >
                        {row.productWrapper?.[column.accessor] ||
                          row.pricingWrapper?.[column.accessor] ||
                          (column.accessor == "totalQtyInStock" &&
                            row.totalQtyInStock)}
                        {column.unit}
                      </td>
                    ))}
                  </tr>
                  {expandedRow === row.productWrapper?.productId && (
                    <tr className="overflow-hidden">
                      <td
                        colSpan={columns.length}
                        className="p-4 bg-white border-b-[20px]"
                      >
                        <ProductDetail data={productDetailData[productId]} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Table;
