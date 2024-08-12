import React from "react";

import { Link } from "react-router-dom";

interface ContentCreatorCardProps {
  id: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
}

export const ContentCreatorCard: React.FC<ContentCreatorCardProps> = ({
  id,
  name,
  url,
  description,
  imageURL,
}) => {
  return (
    <div
      className="relative flex w-[500px] flex-col gap-y-2 overflow-hidden rounded-lg border-2 border-gray-400 bg-black p-8 text-white sm:w-[600px]"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 mb-6 flex w-full flex-row items-center justify-between">
        <span className="text-3xl font-bold">{name}</span>
        <div className="flex flex-row items-center gap-x-4">
          <Link to={`/${id}`}>
            {/* <button className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-600">
              <span className="text-md font-bold uppercase tracking-wider text-white">
                View
              </span>
            </button> */}
            <img src="/info.svg" className="h-[25px] w-[25px]" />
          </Link>
          <Link to={`/edit/${id}`}>
            {/* <button className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-600">
              <span className="text-md font-bold uppercase tracking-wider text-white">
                Edit
              </span>
            </button> */}
            <img src="/edit.svg" className="h-[25px] w-[25px]" />
          </Link>
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="relative inline-flex items-center gap-x-4 border-green-500 hover:border-b-2">
          <img src="/yt.svg" className="h-[40px] w-[40px]" />
          <span className="text-lg text-white">
            {"@" + url.split("@").pop()}
          </span>
        </div>
      </a>
      <p className="relative z-10 text-xl text-white">{description}</p>
    </div>
  );
};
