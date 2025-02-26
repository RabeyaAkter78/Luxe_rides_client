import React from "react";
import { IoCartOutline } from "react-icons/io5";
import SectionTitle from "../../Shared/SectionTitle";
import { message } from "antd";

const ProductDetails = () => {
  const data = [
    {
      _id: "1",
      name: "BMW Camry",
      brand: "BMW",
      model: "Camry",
      year: 2024,
      price: 25000,
      oldPrice: 27000,
      discount: "Save $2000",
      category: "Sedan",
      description: {
        short: "A reliable family sedan with modern features.",
        long: "The BMW Camry offers a balance of performance and comfort, featuring a fuel-efficient engine and an advanced safety system.",
        specifications: {
          dimensions: "4.8m x 1.8m x 1.4m",
          weight: "1500 kg",
          power: "180 HP",
          color: "Blue",
          warranty: "5 years",
        },
        features: [
          "Automatic transmission",
          "LED headlights",
          "Touchscreen infotainment",
        ],
      },
      quantity: 0,
      inStock: false,
      createdAt: "2024-12-21T09:52:29.245Z",
      updatedAt: "2024-12-21T13:40:43.571Z",
      image:
        "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
      reviews: [],
    },
    // {
    //   _id: "2",
    //   name: "Toyota Corolla",
    //   brand: "Toyota",
    //   model: "Corolla",
    //   year: 2023,
    //   price: 22000,
    //   oldPrice: 24000,
    //   discount: "Save $2000",
    //   category: "Sedan",
    //   description: {
    //     short: "Compact and efficient sedan for city driving.",
    //     long: "The Toyota Corolla is known for its excellent fuel efficiency and reliability, making it a top choice for urban commuters.",
    //     specifications: {
    //       dimensions: "4.6m x 1.75m x 1.45m",
    //       weight: "1400 kg",
    //       power: "170 HP",
    //       color: "White",
    //       warranty: "3 years",
    //     },
    //     features: [
    //       "Fuel-efficient engine",
    //       "Smart cruise control",
    //       "Automatic emergency braking",
    //     ],
    //   },
    //   quantity: 10,
    //   inStock: true,
    //   createdAt: "2023-10-15T09:52:29.245Z",
    //   updatedAt: "2023-10-15T13:40:43.571Z",
    //   image:
    //     "https://res.cloudinary.com/dpvqcjwud/image/upload/v1740380732/image2_g9xin7.jpg",
    //   reviews: [
    //     {
    //       name: "John Doe",
    //       rating: 5,
    //       comment: "Great car with excellent mileage!",
    //       img: "https://via.placeholder.com/100",
    //     },
    //   ],
    // },
  ];
  const handleAddToCart = () => {
    message.success("Product Added Successfully");
  };

  return (
    <div>
      <div>
        <div className="py-5 bg-neutral-100">
          <div className="container mx-auto my-5 px-4 md:px-0">
            <SectionTitle title="Product Details" />
            {data.map((item) => (
              <div key={item._id}>
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full ">
                  <div className="w-full md:w-[50%] p-2">
                    <div className=" order-0 md:order-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[600px] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-9 w-full md:w-[50%]">
                    <h1 className="text-6xl mdt:ext-3xl font-bold ">
                      {item.name}
                    </h1>
                    <h1 className="text-sm flex gap-2 text-red-700 mb-2">
                      <span className="text-md line-through  text-lg ">
                        {item.oldPrice}
                      </span>
                      {item.discount}
                    </h1>
                    <h1 className="text-2xl mdt:ext-3xl font-bold  ">
                      $ {item.price}
                    </h1>
                    <p className="my-8">{item?.description.short}</p>
                    <button
                      onClick={handleAddToCart}
                      className="px-4 md:px-10 py-2 md:py-3 text-lg font-semibold  flex justify-center items-center gap-3 border-2 border-neutral-400"
                    >
                      Add To Cart
                      <IoCartOutline />
                    </button>
                  </div>
                </div>
                <div className="mt-16 p-5 border ">
                  <h1 className="text-5xl mdt:ext-3xl font-bold ">
                    {item?.name}
                  </h1>
                  <p className="text-xl ">{item?.description.short}</p>
                  <p className="text-md">{item?.description.long}</p>
                  <ul className="">
                    <h1 className="text-4xl mdt:ext-3xl font-bold ">
                      Specification
                    </h1>
                    <li className="list-disc list-inside">
                      Dimensions: {item?.description.specifications.dimensions}
                    </li>
                    <li className="list-disc list-inside">
                      Weight: {item?.description.specifications.weight}
                    </li>
                    <li className="list-disc list-inside">
                      Power: {item?.description.specifications.power}
                    </li>
                    <li className="list-disc list-inside">
                      Color: {item?.description.specifications.color}
                    </li>
                    <li className="list-disc list-inside">
                      Warranty: {item?.description.specifications.warranty}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
