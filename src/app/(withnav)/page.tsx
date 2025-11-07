import Footer from "@/components/footer";
import HomeHeader from "@/components/home/header";
import HomeProduct from "@/components/home/products";
import HomeResponce from "@/components/home/responce";
import Navbar from "@/components/layout/header/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HomeHeader />
      <HomeProduct />
      <HomeResponce />
      <Footer />
    </div>
  );
}
