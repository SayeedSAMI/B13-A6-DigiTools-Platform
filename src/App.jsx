import "./App.css";
import Banner from "./components/header/banner/Banner";
import CounterRating from "./components/header/counter&rating/Counter&Rating";
import Navbar from "./components/header/navbar/Navbar";

function App() {
  return (
    <div className="font-display">
      <header>
        <Navbar></Navbar>
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
      </main>
    </div>
  );
}

export default App;
