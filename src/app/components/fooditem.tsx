import Image from "next/image";


export default function ChooseFoodItem() {
    return (
      <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center py-10">
        {/* Section Title */}
        <div className="text-center">
          <h1 className="text-[#FF9F0D] text-xl italic">Food Category</h1>
          <h2 className="text-2xl mt-2 font-medium">
          <span className="text-[#FF9F0D] text-2xl ">Ch</span>oose Food Item</h2>
        </div>
  
        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-10 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/food1.png"
              alt="Fast Food Dish"
              width={45}
              height={48}
              className="w-full h-48 object-cover"
            />
             <div className="absolute left-5 top-4 bg-white text-[#FF9F0D] bg-opacity-100 p-2 flex flex-col items-start rounded-md" >
    <p className=" font-semibold text-xl">Save 30%</p></div>
    <div className="absolute  left-4 top-20 bg-[#FF9F0D] bg-opacity-90  flex flex-col items-start p-2 rounded-lg">
    <p className="text-white  text-lg">Fast Food Dish</p></div>
          </div>
  
          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden ">
            <Image
              src="/food2.png"
              alt="Burger"
              width={45}
              height={48}
              className="w-full h-48 object-cover"
            />
          </div>
  
          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/food3.png"
              alt="Salad"
              width={45}
              height={48}
              className="w-full h-48 object-cover"
            />
          </div>
  
          {/* Card 4 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/food4.png"
              alt="Dessert"
              width={45}
              height={48}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  