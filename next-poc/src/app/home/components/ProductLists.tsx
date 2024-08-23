import Image from "next/image";
import ArrowDown from "@/app/components/icons/ArrowDown";

export default function ProductLists({ content }: { content: any }) {
  return (
    <>
      <div className="flex flex-col mt-16 w-full p-20 max-w-[1680px] z-10 text-black">
        <h1 className="text-7xl font-medium">{content.Title}</h1>
        <h1 className="text-xl mt-6 ml-40">{content.SubTitle}</h1>
      </div>
      <div className="flex flex-col p-20 w-full gap-10 max-w-[1680px]">
        <div className="flex gap-10">
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[0].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[0].Title}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[1].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[1].Title}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[2].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[2].Title}
            </h1>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[3].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[3].Title}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[4].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[4].Title}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 border-2 border-black rounded-3xl justify-between">
            <Image
              className="flex w-full"
              src={content.Products?.[5].Photo.data.attributes.url as string}
              alt="logo"
              width={1900}
              height={1700}
            />
            <h1 className="text-center text-black font-bold text-3xl">
              {content.Products?.[5].Title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1680px] items-center mb-10">
        <h1 className="flex text-black mb-3"> load more products</h1>
        <button className="flex w-10 h-10 p-2 rounded-full border-2 border-[#a2c661]  text-center items-center justify-center text-sm  hover:border-transparent hover:text-white hover:bg-[#a2c661]">
          <ArrowDown className="fill-[#a2c661] hover:fill-white" />
        </button>
      </div>
    </>
  );
}
