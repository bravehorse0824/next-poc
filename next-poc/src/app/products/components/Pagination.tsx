export default function Pagination() {
  const array = [...Array(10)].map((_, i) => i + 1);
  return (
    <div className="flex items-center gap-3 mt-4">
      <button className="flex to-start text-gray-400">
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180 translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button className="flex previous text-gray-400 mr-3">
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180 translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      {array.map(
        (item, index) =>
          index < 4 && (
            <button
              key={item}
              className="flex w-7 h-7 rounded-full border border-black text-center items-center justify-center text-sm hover:bg-[#a2c661] hover:border-transparent hover:text-white "
            >
              {item}
            </button>
          )
      )}
      {array.length > 4 && (
        <>
          <div className="flex w-7 h-7 text-center items-center justify-center text-sm">
            ...
          </div>
          <button className="flex w-7 h-7 rounded-full border border-black text-center items-center justify-center text-sm hover:border-transparent hover:text-white hover:bg-[#a2c661]">
            {array.length}
          </button>
        </>
      )}
      <button className="flex next ml-3">
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
      <button className="flex to-end ">
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180 -translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
}
