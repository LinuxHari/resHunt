
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
// import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <main className="dark:bg-black">
        <Hero />
        <Features />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;