import { Approach } from "@/components/Approach";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroBridge } from "@/components/HeroBridge";
import { Process } from "@/components/Process";
import { Systems } from "@/components/Systems";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HeroBridge />
        <Approach />
        <Systems />
        <Process />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
