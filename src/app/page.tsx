import Footer from "../components/ui/footer";
import Navbar from "@/components/sections/navbar";
import Services from "@/components/sections/services";
import PreviousWorks from "@/components/sections/previous-works";
import Hero from "@/components/sections/hero";
import Recents from "@/components/sections/recents";
import Reviews from "@/components/sections/reviews";
import Blog from "@/components/sections/blog";
import Bannner from "@/components/sections/banner";




export default function Home() {
  return (<>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Services />

      <PreviousWorks />

      <Recents />
      <Reviews />
      <Blog />
      <Bannner />
    </main >
    <Footer />
  </>
  );
}
