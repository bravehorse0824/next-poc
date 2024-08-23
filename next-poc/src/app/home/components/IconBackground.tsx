import Image from "next/image";

export default function IconBackground({ content }: { content: any }) {
  return (
    <>
      {" "}
      <div className="relative flex flex-col w-full items-center p-[1px]">
        <div className="absolute w-full h-[800px] overflow-hidden border-b-4 border-green-500">
          <Image
            className="flex w-full"
            src={content.Background?.data[0].attributes.url as string}
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-16 w-full p-10 pb-10 h-[735px] max-w-[1380px] z-10 ">
        <div className="flex flex-col w-1/2 ">
          <h1 className="text-7xl font-medium">{content.Title}</h1>
          <h1 className="text-xl mt-6">{content.SubTitle}</h1>
        </div>
        <div className="flex w-1/2 justify-between gap-16">
          {content?.IconsLinks?.map((item: any) => (
            <div key={item.id} className="flex flex-col justify-between w-1/3">
              <div className="flex justify-center mb-10">
                <Image
                  src={item.Icon.data.attributes.url ?? "Default Link Label"}
                  width={100}
                  height={100}
                  alt={"Link Label"}
                />
              </div>
              <button className="flex w-30 rounded-full border-2 text-xl border-[#a2c661]  text-center items-center justify-center p-2 hover:bg-[#a2c661] hover:text-white  ">
                {item.LinkLabel ?? "Default Link Label"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
