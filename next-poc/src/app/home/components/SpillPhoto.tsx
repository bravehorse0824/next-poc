import Image from "next/image";

export default function SpillPhoto({ content }: { content: any }) {
  return (
    <>
      <div className="relative flex flex-col w-full items-center">
        <div className="absolute w-full h-[800px] overflow-hidden ">
          <Image
            className="flex w-full"
            src={content.Photo?.data.attributes.url as string}
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full text-white mt-[800px] bg-[#080808] items-center">
        <div className="flex justify-between max-w-[1680px] w-full h-[450px]">
          {content.Contet?.map((item: any) => (
            <div key={item.id} className="flex w-1/3 p-10 flex-col">
              <h1 className=" font-semibold text-4xl">{item.Title1}</h1>
              <h1 className="text-xl my-10">{item?.Description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
