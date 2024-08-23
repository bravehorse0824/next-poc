"use client";

import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { BidProductAvailabilityResultAvailabilityConfigInner } from "@/app/type/Interfaces";
import CartDetail from "./components/CartDetail";
import Image from "next/image";
import Icons from "../components/icons";
import { HiOutlineChevronDown } from "react-icons/hi";

const items = [
  { href: "/home", label: "Home" },
  { href: "/sales", label: "Sales" },
  { href: "/Cart", label: "Cart" },
];

const columns = [
  { accessor: "product", header: "Product", width: "w-1/3", unit: "€" },
  { accessor: "price", header: "Price", width: "w-1/6", unit: "€" },
  { accessor: "quantity", header: "Quantity", width: "w-1/6", unit: '"' },
  { accessor: "total", header: "Total", width: "w-1/12", unit: "€" },
  { accessor: "delete", header: "", width: "w-1/12", unit: " GB" },
  { accessor: "expand", header: "", width: "w-1/12", unit: " GB" },
];

interface cartProductsInterface {
  product: {
    [key: string]: any;
    projectName: string;
    productType: string;
    productModel: string;
    productLine: string;
    productId: string;
    publicPrice: number;
    promoDealerPrice?: number;
    quantity: number;
  };
  availabilityConfig: Array<BidProductAvailabilityResultAvailabilityConfigInner>;
}

const cartProducts = [
  {
    product: {
      projectName: "vAncona",
      productType: "Desktop",
      productModel: "CM-C-VS2690G",
      productLine: "CM-VERITON",
      productId: "01t3X00000OIcWjQAL",
      publicPrice: 357.0,
      promoDealerPrice: 286.0,
      quantity: 29,
    },
    availabilityConfig: [
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 63,
        ecpCode: "IT0009054",
        customerName: "Computer Gross S.p.A.",
        accountId: "00120000010yWzaAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 67,
        ecpCode: "IT0009057",
        customerName: "Esprinet",
        accountId: "00120000010yWzeAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 17,
        ecpCode: "IT0018492",
        customerName: "Runner Spa",
        accountId: "00120000010yY5LAAU",
      },
    ],
  },
  {
    product: {
      projectName: "Ganymede_ADU",
      productType: "Notebook",
      productModel: "NU-A515-57G-740H",
      productLine: "NU-ASPIRE",
      productId: "01t3X00000Ibll6QAB",
      promoDealerPrice: 532.0,
      quantity: 29,
    },
    availabilityConfig: [
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 1,
        ecpCode: "IT0009054",
        customerName: "Computer Gross S.p.A.",
        accountId: "00120000010yWzaAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 1,
        ecpCode: "IT0009056",
        customerName: "DATAMATIC SPA",
        accountId: "00120000010yWzcAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 66,
        ecpCode: "IT0009057",
        customerName: "Esprinet",
        accountId: "00120000010yWzeAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 65,
        ecpCode: "IT0009059",
        customerName: "Focelda Spa",
        accountId: "00120000010yWzgAAE",
      },
      {
        price: 439,
        qtyInTransit: 0,
        qtyInStock: 3,
        ecpCode: "IT0009062",
        customerName: "Ingram Micro S.r.l.",
        accountId: "00120000010yWziAAE",
      },
    ],
  },
];

export default function Cart() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleExpandRowClick = async (rowId: string) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
      return;
    }
    setExpandedRow(rowId);
  };
  return (
    <div className="flex flex-col w-full text-black p-8 pb-20">
      <Breadcrumbs items={items} />
      <div className="flex w-full ">
        <div className="flex w-2/3 mr-4">
          <div className="overflow-x-auto w-full mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
              <thead>
                <tr className="border-b border-black">
                  {columns.map((column) => (
                    <th
                      key={column.accessor}
                      scope="col"
                      className={`px-6 py-3 text-nowrap text-center ${column.width}`}
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                {cartProducts.map((row) => (
                  <React.Fragment key={row.product.productId}>
                    <tr
                      className={`cursor-pointer duration-300 transition-colors bg-white border-t border-gray-300  ${
                        expandedRow === row.product?.productId
                          ? ""
                          : " hover:bg-gray-100"
                      }`}
                    >
                      {columns.map((column) => {
                        switch (column.accessor) {
                          case "product":
                            return (
                              <td key={column.accessor} className="text-nowrap">
                                <div className="p-2 flex items-center text-wrap">
                                  <Image
                                    className="flex mr-2"
                                    src="/images/desktop.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                  />
                                  <div className="flex flex-col">
                                    <div className="flex">
                                      {row.product.productType}{" "}
                                      {row.product.projectName}
                                    </div>
                                    <div className="flex">
                                      {row.product.productModel}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            );
                          case "price":
                            return (
                              <td>
                                <div className="items-center justify-center">
                                  {row.product.publicPrice != undefined ? (
                                    <div
                                      className={`flex justify-center line-through text-red-600`}
                                    >
                                      {row.product.publicPrice +
                                        " " +
                                        column.unit}
                                    </div>
                                  ) : (
                                    ""
                                  )}

                                  <div className="flex justify-center ">
                                    {row.product?.promoDealerPrice +
                                      " " +
                                      column.unit}
                                  </div>
                                </div>
                              </td>
                            );
                          case "quantity":
                            return (
                              <td className="text-center">
                                {row.product.quantity}
                              </td>
                            );

                          case "total":
                            return (
                              <td className="text-center">
                                {(
                                  row.product.quantity *
                                  row.product.promoDealerPrice
                                ).toLocaleString() +
                                  " " +
                                  column.unit}
                              </td>
                            );
                          case "delete":
                            return (
                              <td className="text-right">
                                <button>
                                  <Icons.Trash />
                                </button>
                              </td>
                            );
                          case "expand":
                            return (
                              <td className="text-center">
                                <button
                                  onClick={() =>
                                    handleExpandRowClick(
                                      row.product?.productId as string
                                    )
                                  }
                                >
                                  <HiOutlineChevronDown
                                    className={`text-gray-700 transition-transform duration-300 ${
                                      expandedRow === row.product?.productId
                                        ? "rotate-180"
                                        : "rotate-0"
                                    }`}
                                  />
                                </button>
                              </td>
                            );
                        }
                      })}
                    </tr>
                    {expandedRow === row.product?.productId && (
                      <tr className="overflow-hidden">
                        <td colSpan={columns.length} className="p-4 bg-white">
                          <CartDetail data={row.availabilityConfig} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex max-w-1/3">
          <div className="flex flex-col w-full">
            <div className="flex items-start py-3 px-3 justify-between rounded-xl bg-gray-100 mb-0">
              <div className="flex flex-col font-semibold text-sm">
                <h1 className="font-normal flex text-2xl items-center">
                  Cart total
                </h1>
                <div className="border-y-2 border-gray-500 my-2 p-2">
                  <h1 className="justify-between flex items-center border-b border-gray-400 py-3">
                    <span className="flex">Subtotal</span>
                    <span className="flex">21.738,00&euro;</span>
                  </h1>
                  <h1 className="justify-between flex items-center border-b border-gray-400 py-3">
                    <span className="flex">VAT(22% for Italy)</span>
                    <span className="flex">4.782,36&euro;</span>
                  </h1>
                  <h1 className="justify-between text-lg flex items-center pt-10">
                    <span className="flex">Total price</span>
                    <span className="flex">26.520,36&euro;</span>
                  </h1>
                </div>
                <button className="w-64 my-8 px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white">
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
