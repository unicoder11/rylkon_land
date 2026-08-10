import { Approach } from "@/components/Approach";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroBridge } from "@/components/HeroBridge";
import { MidCta } from "@/components/MidCta";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Systems } from "@/components/Systems";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <HeroBridge />
        <Approach />
        <Proof />
        <Systems />
        <Process />
        <MidCta />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
