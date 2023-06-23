import { postCountriesFromDb } from "@/queries/postCountries";
import React, { useState, ChangeEvent } from "react";

const Create = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputImage, setInputImage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputImage(e.target.value);
  };

  const handleSubmit = () => {
    postCountriesFromDb(inputValue, inputImage);
  };

  return (
    <main>
      <h1>New</h1>
      <input type="text" placeholder="Country" value={inputValue} onChange={handleInputChange} />
      <input type="url" placeholder="Image URL" value={inputImage} onChange={handleImageChange} />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </main>
  );
};

export default Create;
