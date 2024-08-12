import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { supabase } from "../client";

export const AddCreator = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("creators").insert({
      name: name,
      url: url,
      description: description,
      imageURL: imageURL,
    });

    if (error) {
      console.error(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="mx-auto my-10 w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-wider text-white">
          Add New Creator
        </h2>
        <div className="mb-4">
          <label
            className="text-md block font-bold uppercase tracking-wider text-white"
            htmlFor="name"
          >
            Name
          </label>
          <p className="mb-2 text-sm italic text-gray-300">
            Enter the name of the creator.
          </p>
          <input
            type="text"
            id="name"
            className="w-full rounded border border-gray-300 p-4 focus:outline-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Creator's name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="text-md block font-bold uppercase tracking-wider text-white"
            htmlFor="imageURL"
          >
            Image URL
          </label>
          <p className="mb-2 text-sm italic text-gray-300">
            Include the full image URL including http/https.
          </p>
          <input
            type="text"
            id="imageURL"
            className="w-full rounded border border-gray-300 p-4 focus:outline-green-500"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="text-md block font-bold uppercase tracking-wider text-white"
            htmlFor="description"
          >
            Description
          </label>
          <p className="mb-2 text-sm italic text-gray-300">
            Provide a brief description of the creator.
          </p>
          <textarea
            id="description"
            className="max-h-[300px] w-full rounded border border-gray-300 p-4 focus:outline-green-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            className="text-md block font-bold uppercase tracking-wider text-white"
            htmlFor="url"
          >
            YouTube Link
          </label>
          <p className="mb-2 text-sm italic text-gray-300">
            Include the full YouTube channel link including http/https.
          </p>
          <input
            type="text"
            id="url"
            className="w-full rounded border border-gray-300 p-4 focus:outline-green-500"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            placeholder="YouTube link"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full rounded bg-green-500 px-4 py-3 hover:bg-green-600"
          >
            <span className="text-xl font-bold uppercase tracking-wider text-white">
              Add Creator
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
