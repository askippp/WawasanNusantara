import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import ListArtikel from "@/components/sections/ListArtikerl";
import ListProvinsi from "@/components/sections/ListProvinsi";

export default function Home() {
   return (
     <main>
       <HeroSection />
         <AboutUs />
         <ListArtikel />
         <ListProvinsi />
      </main>
   );
}
