import { Approach } from "@/components/Approach";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { EngagementModel } from "@/components/EngagementModel";
import { Examples } from "@/components/Examples";
import { Failures } from "@/components/Failures";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroBridge } from "@/components/HeroBridge";
import { Mechanism } from "@/components/Mechanism";
import { MidCta } from "@/components/MidCta";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Systems } from "@/components/Systems";
import { Thesis } from "@/components/Thesis";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <HeroBridge />
        <Thesis />
        <Approach />
        <Mechanism />
        <Proof />
        <Systems />
        <Failures />
        <Examples />
        <Process />
        <EngagementModel />
        <MidCta />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
