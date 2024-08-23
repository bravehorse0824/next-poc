import Image from "next/image";

export default function VideoLink({ content }: { content: any }) {
  return (
    <>
      <div className="relative flex flex-col w-full items-center">
        <div className="absolute w-full h-[800px] overflow-hidden ">
          <Image
            className="flex w-full"
            src={content.Background?.data?.attributes?.url as string}
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full p-20 pb-0 h-[735px] max-w-[1380px] z-10 items-end justify-end">
        <h1 className="text-7xl font-light">{content.Title}</h1>
        <h1 className="text-xl mt-6 ml-40">{content.LinkLabel}</h1>
      </div>
    </>
  );
}
