import Headers from "@components/Headers";
import Products from "@components/Products";
import Clients from "@components/Clients";
import Portofolio from "@components/Portofolio";
import Testimonial from "layout/Testimonial";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="h-auto">
      <div className="h-screen">
        <Headers />
      </div>
      <Products />
      <Clients />
      <Portofolio />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
