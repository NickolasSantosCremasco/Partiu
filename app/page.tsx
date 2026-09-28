import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/navbar/Navbar";
import HowItWorks from "./components/howItWorks/howItWorks";
import RequestForm from "./components/requestForm/RequestForm";
import Example from "./components/example/Example"
import WhyExists from "./components/whyExists/WhyExists";
import FinalCTA from "./components/FinalCTA/FinalCTA";


export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection/>
    
      <HowItWorks/>
      
      <RequestForm/>

      <Example/>

      <WhyExists/>

      <FinalCTA/>
    </main>
  );
}
