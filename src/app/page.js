import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Category from "./sections/Category/Category";
import Hero from "./sections/Hero/Hero";
import ProductByCategory from "./sections/ProductByCategory/ProductByCategory";
import RecentProducts from "./sections/RecentProducts/RecentProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <RecentProducts />
      <ProductByCategory />
      <Footer />
    </div>
  );
}
