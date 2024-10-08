import Footer from "../components/ui/footer";
import Navbar from "@/components/sections/navbar";
import Services from "@/components/sections/services";
import PreviousWorks from "@/components/sections/previous-works";
import Hero from "@/components/sections/hero";
import Recents from "@/components/sections/recents";
import Reviews from "@/components/sections/reviews";
import Blog from "@/components/sections/blog";
import Bannner from "@/components/sections/banner";
import ProjectForm from "@/components/sections/project-form";




export default function Home() {
  return (<>
    <header className="sticky top-0 z-50">
      <Navbar />
    </header>
    <main>
      <Hero />
      <Services />
      <PreviousWorks />
      <ProjectForm />
      <Recents />
      <Reviews />
      <Blog />
      <Bannner />
    </main >
    <Footer />
  </>
  );
}
