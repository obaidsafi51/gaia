import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center flex-col">
        <img src="/logo.png" alt="logo" />
        <h1 className="uppercase text-5xl semibold">gaia</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
