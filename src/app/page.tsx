import Header from "./components/header";
import About from "./About/page";

import Chefpage from "./components/chefs";

import Fooditem from "./components/fooditem";

import DocumentFood from "./components/document";
import ClientReview from "./components/clientreviews";




import ErrorPage from "./components/error";


import Signup from "./components/signup";

import CheckoutPage from "./components/checkout";
import Menu from "./components/menu";
import ErrorPages from "./components/error";
import FaqData from "./components/Faq";
import ShoppingCart from "./components/shoping";
import Blog from "./components/blog";

const Homepage = () => {
  return (
    <div className="min-h-screen h-full w-full bg-black">
      <Header />
      <About />
      <Fooditem />
   
      <Menu />
      <Chefpage />

      <ClientReview />
      <DocumentFood />

      <Signup />
      <ErrorPages />
      <ErrorPage />
      <FaqData />
      <ShoppingCart />
      <CheckoutPage/>
      <Blog/>
    </div>
  );
};

export default Homepage;

  
  
  
  
  

