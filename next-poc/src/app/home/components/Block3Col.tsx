import Image from "next/image";

export default function Block3Col({ content }: { content: any }) {
  return (
    <>
      <div className="flex flex-col mt-16 w-full p-20 max-w-[1680px] z-10 text-black">
        <h1 className="text-7xl font-medium">{content.Title}</h1>
        <h1 className="text-xl mt-6 ml-40">{content.Subtitle}</h1>
      </div>
      <div className="flex flex-col p-20 w-full gap-10 max-w-[1680px]">
        <div className="flex gap-10">
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 bg-gray-100 rounded-3xl  text-black">
            <h1 className=" font-semibold text-5xl">
              {content?.Element?.[0]?.Title ?? "Default Title"}
            </h1>
            <h1 className="text-2xl mt-10">
              {content?.Element?.[0]?.Description ?? "Default Content"}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 aspect-square gap-3 justify-between">
            <Image
              className="flex w-full rounded-3xl  h-full"
              src={
                content?.Element?.[0]?.Photo.data.attributes.url ??
                "Default Title"
              }
              alt="logo"
              width={1900}
              height={1700}
            />
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 bg-gray-100 rounded-3xl  text-black">
            <h1 className=" font-semibold text-5xl">
              {content?.Element?.[1]?.Title ?? "Default Title"}
            </h1>
            <h1 className="text-2xl mt-10">
              {content?.Element?.[1]?.Description ?? "Default Content"}
            </h1>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col w-1/3 aspect-square gap-3 justify-between">
            <Image
              className="flex w-full rounded-3xl  h-full"
              src={
                content?.Element?.[1]?.Photo.data.attributes.url ??
                "Default Title"
              }
              alt="logo"
              width={1900}
              height={1700}
            />
          </div>
          <div className="flex flex-col w-1/3 p-10 aspect-square gap-3 bg-gray-100 rounded-3xl  text-black">
            <h1 className=" font-semibold text-5xl">
              {content?.Element?.[2]?.Title ?? "Default Title"}
            </h1>
            <h1 className="text-2xl mt-10">
              {content?.Element?.[2]?.Description ?? "Default Content"}
            </h1>
          </div>
          <div className="flex flex-col w-1/3 aspect-square gap-3 justify-between">
            <Image
              className="flex w-full rounded-3xl  h-full"
              src={
                content?.Element?.[2]?.Photo.data.attributes.url ??
                "Default Title"
              }
              alt="logo"
              width={1900}
              height={1700}
            />
          </div>
        </div>
      </div>
    </>
  );
}
