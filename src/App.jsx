import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/header/banner/Banner";
import CounterRating from "./components/header/counter&rating/Counter&Rating";
import Navbar from "./components/header/navbar/Navbar";
import Products from "./components/main/productsLists/products/Products";
import GetStarted from "./components/main/getStarted/GetStarted";
import Pricing from "./components/main/pricing/Pricing";
import ReadytoTransform from "./components/main/ReadytoTransform/ReadytoTransform";
import FooterSection from "./components/footer/FooterSection";
import { ToastContainer } from "react-toastify";

const fetchPromise = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

function App() {
  const productPromise = fetchPromise();
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="font-display">
      <header>
        <Navbar cartCount={cartCount}></Navbar>
        <Banner></Banner>
        <CounterRating></CounterRating>
      </header>
      <main>
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center mb-8 text-center gap-4">
          <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
          <p className="font-normal text-sm text-[#627382]">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="max-w-[1120px] h-[200px] mx-auto flex flex-col justify-center items-center text-center shadow-xl rounded-xl mb-[100px]">
              <span className="loading loading-bars loading-xl flex  mx-auto mb-7"></span>
            </div>
          }
        >
          <Products
            productPromise={productPromise}
            cartCount={cartCount}
            setCartCount={setCartCount}
          ></Products>
        </Suspense>

        <GetStarted></GetStarted>
        <Pricing></Pricing>
        <ReadytoTransform></ReadytoTransform>
      </main>
      <FooterSection> </FooterSection>

       <ToastContainer />
    </div>
  );
}

export default App;
