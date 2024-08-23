import React from "react";
import Image from "next/image";
import landingJson from "../data/landing.json";
import SpillBlock from "./components/SpillBlock";
import SpillPhoto from "./components/SpillPhoto";
import ProductLists from "./components/ProductLists";
import VideoLink from "./components/VideoLink";
import Block3Col from "./components/Block3Col";
import IconBackground from "./components/IconBackground";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-10">
      <div className="relative flex flex-col w-full items-center">
        <div className="absolute w-full h-[800px] overflow-hidden border-b-4 border-green-500">
          <Image
            className="flex w-full"
            src={landingJson.attributes.FeaturedImage.data.attributes.url}
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col mt-16 w-full p-20 pb-0 h-[735px] max-w-[1380px] z-10 ">
          <h1 className="text-7xl font-light">Ultraslim PCs</h1>
          <h1 className="text-xl mt-6 ml-40">Run your business with style</h1>
        </div>
        {landingJson.attributes.Content.map((component) => {
          switch (component.__component) {
            case "blocks.spill-block":
              return <SpillBlock content={landingJson.attributes.Content[0]} />;

            case "blocks.spill-photo":
              return <SpillPhoto content={landingJson.attributes.Content[1]} />;
            case "blocks.product-lists":
              return (
                <ProductLists content={landingJson.attributes.Content[2]} />
              );
            case "blocks.video-link":
              return <VideoLink content={landingJson.attributes.Content[3]} />;
            case "blocks.block3-col":
              return <Block3Col content={landingJson.attributes.Content[4]} />;
            case "blocks.icon-background":
              return (
                <IconBackground content={landingJson.attributes.Content[5]} />
              );
          }
        })}
      </div>
    </div>
  );
}
