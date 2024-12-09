import Image from "next/image";

const Aboutpage = () => {
  return (
    <div className="bg-black text-white min-h-screen mt-[0px] flex ">
      {/* Left Section */}
      <section className="w-1/2 p-8 ml-8 mt-2">
        <h3 className="italic mt-2" >About Us</h3>
       
        <h1 className="text-4xl font-bold">  <span className="text-orange-500 text-4xl">We </span>Create the best <br/>foody product</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
          elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
          mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <ul className="mt-4 space-y-3  pl-5">
          <li><span className="text-yellow-400 text-2xl mr-3">&#10004; </span>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li><span className="text-yellow-400 text-2xl mr-3">&#10004; </span> Quisque diam pellentesque bibendum non dui volutpat fringilla.</li>
          <li><span className="text-yellow-400 text-2xl mr-3">&#10004; </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button className="p-8 px-6 py-3 mt-5 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-600">
            Read More
          </button>
      </section>


      <section className="w-1/2 p-8 flex flex-col items-center mt-4">
   
        <Image
          src="/egg.png"
          alt="Egg"
          width={550}
          height={300}
          className="rounded-lg object-cover mb-4"
        />
\
        <div className="flex space-x-4">
          <Image
            src="/sauce.png"
            alt="Sauce"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/bread.png"
            alt="Bread"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        
      </section>
    </div>
  );
};

export default Aboutpage;
