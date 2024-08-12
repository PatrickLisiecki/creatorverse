import { useState, useEffect } from "react";

import { ContentCreatorCard } from "../components/ContentCreatorCard";

import { supabase } from "../client";

export const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const getAllCreators = async () => {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        console.error(error);
      }

      if (data) {
        setCreators(data);
      }
    };

    getAllCreators();
  }, []);

  return (
    <div className="mx-auto grid min-h-[400px] grid-cols-1 gap-6 bg-gray-800 py-12 sm:grid-cols-2">
      {creators &&
        creators.map((creator) => {
          return (
            <ContentCreatorCard
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          );
        })}
    </div>
  );
};
