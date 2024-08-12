import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { supabase } from "../client";

export const ViewCreator = () => {
  const [creator, setCreator] = useState(null);

  const { creatorId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", creatorId);

      if (error) {
        console.error(error);
      }

      if (data) {
        setCreator(data[0]);
      }
    };

    getCreator();
  }, [creatorId]);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", creatorId);

    if (error) {
      console.error(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="mx-auto my-10 w-1/2">
      <div className="flex flex-row gap-x-12">
        {creator && (
          <>
            <div className="h-[340px] w-[400px] overflow-hidden rounded-lg border-2 border-green-500">
              <img
                src={creator.imageURL}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-w-[400px] flex-col gap-y-4">
              <span className="text-4xl font-bold tracking-wider text-white">
                {creator.name}
              </span>
              <p className="max-w-[400px] text-lg text-white">
                {creator.description}
              </p>
              <a href={creator.url} target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-x-4 rounded-lg hover:bg-green-500 hover:p-2">
                  <img src="/yt.svg" className="h-[40px] w-[40px]" />
                  <span className="text-lg text-white">
                    {"@" + creator.url.split("@").pop()}
                  </span>
                </div>
              </a>
            </div>
          </>
        )}
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-10">
        <button
          onClick={() => navigate(`/edit/${creatorId}`)}
          className="w-1/4 rounded bg-green-500 p-4 hover:bg-green-600"
        >
          <span className="text-xl font-bold uppercase tracking-wider text-white">
            Edit
          </span>
        </button>
        <button
          onClick={handleDelete}
          className="w-1/4 rounded bg-red-500 p-4 hover:bg-red-600"
        >
          <span className="text-xl font-bold uppercase tracking-wider text-white">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};
