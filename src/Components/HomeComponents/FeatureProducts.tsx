import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { FaArrowRight } from "react-icons/fa6";
import {Link, Links} from "react-router-dom";
const FeatureProducts = () => {
  const data = [
    {
      _id: "1",
      brand: "BMW",
      model: "Camry",
      year: 2024,
      price: 25000,
      category: "Sedan",
      description: "A reliable family sedan with modern features.",
      quantity: 0,
      inStock: false,
      createdAt: "2024-12-21T09:52:29.245Z",
      updatedAt: "2024-12-21T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
    {
      _id: "2",
      brand: "Toyota",
      model: "Corolla",
      year: 2023,
      price: 22000,
      category: "Sedan",
      description: "Compact and efficient sedan for city driving.",
      quantity: 10,
      inStock: true,
      createdAt: "2023-10-15T09:52:29.245Z",
      updatedAt: "2023-10-15T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
    {
      _id: "3",
      brand: "Ford",
      model: "F-150",
      year: 2022,
      price: 35000,
      category: "Truck",
      description: "A powerful truck built for tough jobs and adventure.",
      quantity: 5,
      inStock: true,
      createdAt: "2022-08-20T09:52:29.245Z",
      updatedAt: "2022-08-20T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
    {
      _id: "4",
      brand: "Honda",
      model: "Civic",
      year: 2024,
      price: 27000,
      category: "Sedan",
      description: "A sleek and fuel-efficient sedan with advanced features.",
      quantity: 3,
      inStock: true,
      createdAt: "2024-01-05T09:52:29.245Z",
      updatedAt: "2024-01-05T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
    {
      _id: "5",
      brand: "Chevrolet",
      model: "Malibu",
      year: 2023,
      price: 24000,
      category: "Sedan",
      description: "A spacious and comfortable sedan for everyday driving.",
      quantity: 8,
      inStock: true,
      createdAt: "2023-07-18T09:52:29.245Z",
      updatedAt: "2023-07-18T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
    {
      _id: "6",
      brand: "Audi",
      model: "A4",
      year: 2023,
      price: 42000,
      category: "Luxury",
      description: "A premium sedan with luxurious features and performance.",
      quantity: 2,
      inStock: false,
      createdAt: "2023-09-12T09:52:29.245Z",
      updatedAt: "2023-09-12T13:40:43.571Z",
      __v: 0,
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    },
  ];

  return (
    <div className="px-2 md:px-0 ">
      <SectionTitle title="Feature Products" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((product) => (
            <div
              key={product._id}
              className=" border rounded-lg bg-neutral-800 md:h-[500px]"
            >
              <Link to="product-details">
              <img
                className="w-full md:h-80 object-cover cursor-pointer "
                src={product.image}
                alt={product.model}
              />
              </Link>
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl text-white ">
                  {" "}
                  {product.brand} {product.model}
                </h2>
                <p className="text-sm text-neutral-100 ">
                  {product.category} | {product.year}
                </p>
                <p className="mt-2 text-neutral-100">{product.description}</p>
              </div>
              <div className="px-6 pb-4 flex justify-between items-center">
                <span className="text-xl font-semibold text-neutral-200">
                  ${product.price}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    product.inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-end mt-10">
          <Link to="/all-products">
            <button className="px-8 py-2 bg-primary text-white flex gap-2">
              View All <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
