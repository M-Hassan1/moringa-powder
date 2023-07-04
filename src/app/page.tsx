import NavBarPage from "@/Components/view/NavBer/NavBar-For-Pc";
import HomePage from "@/Components/view/HeroSection/HomePage/PageHome";

import AboutPage from "@/Components/view/HeroSection/AboutPage/AboutPage";

import Footer from "@/Components/view/Footer/FooterFile/Footer";
import BenefitsPage from "@/Components/view/HeroSection/Benefits/BenefitsPage";


export default function Home() {
  return (
  <>
        <NavBarPage />
      
      <HomePage />
      <AboutPage />
      <BenefitsPage />
      <Footer />
      </>
  )
}
