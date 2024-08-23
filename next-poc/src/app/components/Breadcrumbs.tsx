import Link from "next/link";
import React from "react";

interface Item {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  items: Array<Item>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul className="flex space-x-2">
          {items.map((item: any, index: number) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">|</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-black ${
                    index + 1 == items.length ? "" : "font-bold"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="text-black text-4xl mt-3">
        {items[items.length - 1].label}
      </h1>
    </div>
  );
};

export default Breadcrumbs;
