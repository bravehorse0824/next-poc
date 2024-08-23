import React from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Breadcrumbs from "../components/Breadcrumbs";

const items = [
  { href: "/home", label: "Home" },
  { href: "/sales", label: "Sales" },
  { href: "/orders", label: "My Orders" },
];

const QuotesListResult = {
  result: {
    success: true,
    message: "Bid Quotes list retrieved successfully!",
    code: 200,
  },
  quotesList: [
    {
      totalPrice: 40730.0,
      totalDiscount: -1750.0,
      sfdcQuoteId: "Q-00000232",
      result: null,
      quantity: 50.0,
      name: "Q-00000232_EIT_BID_TECH INNOVATORS S.P.A._NB_JUN24_OPP-00131110",
      lineItems: null,
      expirationDate: "2024-05-31",
    },
    {
      totalPrice: 40730.0,
      totalDiscount: -1750.0,
      sfdcQuoteId: "Q-00000233",
      result: null,
      quantity: 50.0,
      name: "Q-00000233_EIT_BID_TECH INNOVATORS S.P.A._NB_JUN24_OPP-00131111",
      lineItems: null,
      expirationDate: "2024-05-31",
    },
  ],
};

export default function Orders() {
  return (
    <div className="flex flex-col w-full text-black p-8 pb-20">
      <Breadcrumbs items={items} />
      <div className="flex mt-8 items-start">
        <Filter />
        <Table quotesList={QuotesListResult.quotesList} />
      </div>
    </div>
  );
}
