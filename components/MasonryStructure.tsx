"use client";
import React from "react";
import Masonry from "@mui/lab/Masonry";
import Card from "@/components/Card";

const data = [
  {
    id: 1,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-1.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 2,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-2.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 3,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-3.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 4,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-4.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 5,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-5.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 6,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-6.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 7,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-7.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 8,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-8.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 9,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-9.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
  {
    id: 10,
    title: "Villa on Hollywood Boulevard",
    location: "Los Angeles",
    price: "$119/night",
    image: "/Assets/Hotels/Hotel-10.jpg",
    rating: 4.5,
    reviewCount: 20,
  },
];

const MasonryStructure = () => {
  return (
    <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {data.map((item, i) => (
        <div className="col-span-1" key={i}>
          <Card data={item} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryStructure;
