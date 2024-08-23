"use client";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ProductProductInfoResult } from "@/app/type/Interfaces";
import { useRouter } from "next/navigation";

const filterSections = [
  { accessor: "productType", header: "Product type", unit: "" },
  { accessor: "screenSize", header: "Screen size", unit: '"' },
  { accessor: "cpuFamily", header: "CPU", unit: "" },
  { accessor: "ram", header: "RAM", unit: "GB" },
  { accessor: "storage", header: "Storage", unit: "GB" },
  { accessor: "price", header: "Price ( € )", unit: "" },
  { accessor: "stock", header: "Stock min", unit: "" },
  { accessor: "partNumber", header: "", unit: "" },
];

type FilterOptions = {
  [key: string]: any;
  productType: Array<string>;
  screenSize: Array<string>;
  cpuFamily: Array<string>;
  ram: Array<string>;
  storage: Array<string>;
  price: number;
  stock: number;
};

const Filter: React.FC<{ filterItems: ProductProductInfoResult }> = ({
  filterItems,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState({} as any);

  const router = useRouter();

  const [filters, setFilters] = useState<FilterOptions>({
    productType: [],
    screenSize: [],
    cpuFamily: [],
    ram: [],
    storage: [],
    price: filterItems["minStock"] ? parseInt(filterItems["minStock"]) : 0,
    stock: 0,
  });

  const handleFilterChange = (
    filterName: keyof FilterOptions,
    value: string
  ) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[filterName].includes(value)) {
      updatedFilters[filterName] = updatedFilters[filterName].filter(
        (item: string) => item !== value
      );
    } else {
      updatedFilters[filterName].push(value);
    }
    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    const queryParams: { [key: string]: string } = {};

    Object.keys(filters).forEach((key) => {
      if (Array.isArray(filters[key])) {
        if (filters[key].length > 0) {
          queryParams[key] = filters[key].join(",");
        }
      } else if (filters[key]) {
        queryParams[key] = filters[key];
      }
    });

    const queryString = new URLSearchParams(queryParams).toString();

    router.push(`/products?${queryString}`);
  };

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
      {filterSections.map(
        (section) =>
          filterItems[section.accessor]?.split("#").length && (
            <div
              key={section.accessor}
              className="flex flex-col p-4 border-b border-black"
            >
              <button
                className="font-medium flex justify-between items-center"
                onClick={() => {
                  setSubmenuOpen({
                    ...submenuOpen,
                    [section.accessor]: !submenuOpen[section.accessor],
                  });
                }}
              >
                <h1>{section.header}</h1>
                <HiOutlineChevronDown
                  className={`text-gray-700 transition-transform duration-300 ${
                    submenuOpen[section.accessor] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`flex flex-col px-4 gap-2 transition-height duration-300 ease-in-out overflow-hidden ${
                  submenuOpen[section.accessor]
                    ? "max-h-[1000px] py-4"
                    : "max-h-0"
                }`}
              >
                {filterItems[section.accessor]
                  ?.split("#")
                  .map((item: string) => (
                    <div
                      key={item}
                      className="flex font-medium text-sm items-center "
                    >
                      <input
                        type="checkbox"
                        checked={
                          Array.isArray(filters[section.accessor]) &&
                          filters[section.accessor].includes(item)
                        }
                        onChange={() =>
                          handleFilterChange(section.accessor, item)
                        }
                        className="mr-3"
                      />
                      {item + " " + section.unit}
                    </div>
                  ))}
              </div>
            </div>
          )
      )}

      <div className="flex flex-col p-4 border-b border-black gap-4 pb-10">
        <label
          htmlFor="default-range"
          className="font-medium flex justify-between items-center"
        >
          Price ( &euro; )
        </label>
        <div className="flex items-center gap-2">
          <h1 className="w-16">{filters.price}</h1>
          <input
            id="default-range"
            type="range"
            min={filterItems["minPrice"]}
            max={filterItems["maxPrice"]}
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: parseInt(e.target.value) })
            }
            className="w-full h-2 rounded-lg accent-[#a2c661] cursor-pointer"
          ></input>
          {filterItems["maxPrice"]}
        </div>
      </div>
      <div className="flex flex-col p-4 border-b border-black gap-4 pb-10">
        <label
          htmlFor="default-range"
          className="font-medium flex justify-between items-center"
        >
          Stock min.
        </label>
        <div className="flex items-center gap-2">
          <h1 className="w-16">{filters.stock}</h1>
          <input
            id="default-range"
            type="range"
            min={filterItems["minStock"]}
            max={filterItems["maxStock"]}
            value={filters.stock}
            onChange={(e) =>
              setFilters({ ...filters, stock: parseInt(e.target.value) })
            }
            className="w-full h-2 rounded-lg accent-[#a2c661] cursor-pointer"
          ></input>
          {filterItems["maxStock"] || "100"}
        </div>
      </div>
      <div className="w-full flex justify-end mt-5">
        <button
          className="flex px-8 py-1 mr-4 bg-[#a2c661] text-white font-bold rounded-full hover:bg-green-500 hover:text-white"
          onClick={applyFilters}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Filter;
