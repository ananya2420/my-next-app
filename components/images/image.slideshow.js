"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "./../assets/icon/burger.jpg";
import curryImg from "./../assets/icon/curry.jpg";
import dumplingsImg from "./../assets/icon/dumplings.jpg";
import macncheeseImg from "./../assets/icon/macncheese.jpg";
import pizzaImg from "./../assets/icon/pizza.jpg";
import schnitelImg from "./../assets/icon/schnitzel.JPG";
import tomatosaladImg from "./../assets/icon/tomatosalad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "A delicious, steamed dumplings" },
  { image: macncheeseImg, alt: "A delicious, Mac and cheese" },
  { image: pizzaImg, alt: "A delicious, pizza" },
  { image: schnitelImg, alt: "A delicious, schnitzel" },
  { image: tomatosaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0 absolute"
          }`}
          alt={image.alt}
          width={500}
          height={500}
        />
      ))}
    </div>
  );
}
