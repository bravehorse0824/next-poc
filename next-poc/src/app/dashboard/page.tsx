import React from "react";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";

const items = [
  { href: "/home", label: "Home" },
  { href: "/sales", label: "Sales" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Home() {
  return (
    <div className="flex flex-col px-44 w-full h-full bg-white gap-20">
      <Breadcrumbs items={items} />

      <div className="text-black">
        <div className="flex gap-6">
          <button className="flex w-1/3 rounded-2xl border-[4px] border-[#a2c661] items-start justify-between">
            <div className="flex m-10 flex-col gap-4">
              <div className="flex text-3xl font-bold">New Bid</div>
              <div className="flex text-start">
                Request the best quote for products available from out
                distribution partners.
              </div>
            </div>
            <div className="relative right-2 top-[calc(100%_-_54px)]">
              <div className="rounded-full border-[4px] border-[#a2c661] w-12 h-12"></div>
            </div>
          </button>
          <button className="flex w-1/3 rounded-2xl border-[4px] border-[#a2c661] items-start justify-between">
            <div className="flex m-10 flex-col  gap-4">
              <div className="flex text-3xl font-bold">My Orders</div>
              <div className="flex text-start">
                View and manage the status of your orders and your order
                history.
              </div>
            </div>
            <div className="relative right-2 top-[calc(100%_-_54px)]">
              <div className="rounded-full border-[4px] border-[#a2c661] w-12 h-12"></div>
            </div>
          </button>
          <button className="flex w-1/3 rounded-2xl border-[4px] border-[#a2c661] items-start justify-between">
            <div className="flex m-10 flex-col  gap-4">
              <div className="flex text-3xl font-bold">My Profile</div>
              <div className="flex text-start">
                View and manage all information related to your profile.
              </div>
            </div>
            <div className="relative right-2 top-[calc(100%_-_54px)]">
              <div className="rounded-full border-[4px] border-[#a2c661] w-12 h-12"></div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-14">
        <div className="flex">
          <Image
            src="/images/dashboard/account.jpg"
            alt="account"
            width={3000}
            height={3000}
            layout="intrinsic "
            className="w-full h-auto"
          />
        </div>
        <div className="flex">
          <Image
            src="/images/dashboard/history.jpg"
            alt="account"
            width={3000}
            height={3000}
            layout="intrinsic"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="mb-28 overflow-x-auto">
        <Image
          src="/images/dashboard/offers.jpg"
          alt="account"
          width={3000}
          height={3000}
          layout="intrinsic"
          className="h-auto"
        />
      </div>
    </div>
  );
}
