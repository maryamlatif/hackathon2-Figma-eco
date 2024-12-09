"use client";
import React, { useState } from "react";
import Image from "next/image";

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems = [
  { name: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/po.png" },
  { name: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/yum.png" },
  { name: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/bur.png" },
  { name: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/ice.png" },
  { name: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/mild.png" },
  { name: "Sllice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/beef.png" },
  { name: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/fresh.png" },
  { name: "Mushaom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/burger.png" },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <section className="bg-black text-white py-16 mt-48 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-[#FF9F0D] text-2xl mb-2">Choose & Pick</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-[#FF9F0D]" : "text-[#FF9F0D] hover:bg-orange-500"
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src="/menu2.png"
            alt="Featured Dish"
            width={500}
            height={500}
            className="md:w-1/2 rounded-lg object-cover"
          />
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <p className="text-[#FF9F0D] font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
