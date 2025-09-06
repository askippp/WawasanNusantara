import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import ListArtikel from "@/components/sections/ListArtikel";
import ListProvinsi from "@/components/sections/ListProvinsi";
import Footer from "@/components/Footer";

export default function Home() {
   return (
     <main>
       <HeroSection />
       <AboutUs />
       <ListProvinsi />
       <ListArtikel />
       <Footer />
     </main>
   );
}
