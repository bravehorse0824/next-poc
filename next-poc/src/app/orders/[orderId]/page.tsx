import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

const items = [
  { href: "/home", label: "Home" },
  { href: "/sales", label: "Sales" },
  { href: "/orders", label: "My Orders" },
];

const columns = [
  {
    accessor: "partNumber",
    header: "Part number",
    width: "w-1/6",
    unit: "",
  },
  {
    accessor: "model",
    header: "Model",
    width: "w-1/6",
    unit: "",
  },
  {
    accessor: "distributor",
    header: "Distributor",
    width: "w-1/6",
    unit: "",
  },
  {
    accessor: "quantity",
    header: "Quantity",
    width: "w-1/12",
    unit: "",
  },
  {
    accessor: "price",
    header: "Price",
    width: "w-1/12",
    unit: "",
  },
  {
    accessor: "promoPrice",
    header: "Promo price",
    width: "w-1/6",
    unit: "",
  },
  {
    accessor: "totalPrice",
    header: "Total price",
    width: "w-1/6",
    unit: "",
  },
];

export default function Products({
  params: { orderId },
}: {
  params: { orderId: string };
}) {
  return (
    <div className="flex flex-col w-full text-black p-8 pb-20">
      <Breadcrumbs
        items={[
          ...items,
          { href: `/orders/${orderId}`, label: `Order ${orderId}` },
        ]}
      />
      <div className="flex flex-col w-1/2 py-4 px-8 rounded-xl font-semibold bg-gray-100 m-20 mb-0">
        <div className="flex pb-4 mb-4 justify-between items-center border-b border-white">
          <div className="flex flex-col gap-6">
            <h1 className="flex text-sm items-center">
              <span className="w-4 h-4 mr-2 flex rounded-full bg-yellow-500" />
              <span className="mr-2">Status:</span> Waiting for a formal order
            </h1>
          </div>
        </div>
        <div className="flex pb-4 mb-4 items-center border-b border-white">
          <div className="flex flex-col w-1/2 gap-6">
            <h1 className="font-medium flex text-sm items-center">
              Created date:
            </h1>
            <h1 className="font-medium flex text-sm items-center">
              Approval date:
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium flex text-sm items-center">
              Last modify:
            </h1>
            <h1 className="font-medium flex text-sm items-center">
              Expiration date:
            </h1>
          </div>
        </div>
        <div className="flex justify-between text-xl">
          <h1 className="font-medium text-sm">Download order</h1>
        </div>
      </div>
      <div className="flex overflow-x-auto m-20">
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
          <tbody className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700"></tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse w-full">
        <div className="flex items-start w-1/2 py-6 px-10 justify-between rounded-xl bg-gray-100 m-20 mb-0">
          <div className="flex pb-4 mb-4 justify-between items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-medium flex text-lg items-center">
                Quantity: 41
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-1/2 font-semibold text-sm">
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
        </div>
      </div>
    </div>
  );
}
