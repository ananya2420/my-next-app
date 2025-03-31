'use client';

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0]; // Fixed typo

    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor={name} className="text-lg font-semibold text-gray-700">
        {label}
      </label>

      {/* Image Preview Box */}
      <div className="w-48 h-48 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-white">
        {!pickedImage && <p className="text-gray-500">No image picked yet.</p>}
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="The image selected by the user."
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Button to Pick Image */}
      <button
        type="button"
        onClick={handlePickClick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Pick an Image
      </button>
    </div>
  );
}
