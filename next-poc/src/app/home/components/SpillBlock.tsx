import Image from "next/image";

export default function SpillBlock({ content }: { content: any }) {
  return (
    <div className="flex flex-col gap-5 w-full py-20 px-40 max-w-[1680px] text-black">
      <div className="flex">
        <div className="absolute w-300 h-300">
          <Image
            className="flex w-full"
            src={content.Image?.data.attributes.url as string}
            alt="logo"
            width={900}
            height={700}
          />
        </div>
        <div className="bg-gray-100 flex justify-end rounded-3xl w-full p-5 mt-44 h-[450px] items-end">
          <div className="flex w-1/2 flex-col items-end">
            <h1 className=" font-semibold text-5xl">{content.Title}</h1>
            <h1 className="text-2xl pl-4 text-end my-10">{content.Content}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
