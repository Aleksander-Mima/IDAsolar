import Hero from "@/components/sections/Hero";
import MadeInItaly from "@/components/sections/MadeInItaly";
import PanelStructure from "@/components/sections/PanelStructure";
import EnergySystems from "@/components/sections/EnergySystems";
import WhyIdaSolar from "@/components/sections/WhyIdaSolar";
import Benefits from "@/components/sections/Benefits";
import CtaBanner from "@/components/sections/CtaBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingCards from "@/components/sections/PricingCards";
import EnergyStorage from "@/components/sections/EnergyStorage";
import RecentArticles from "@/components/sections/RecentArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <MadeInItaly />
      <PanelStructure />
      <EnergySystems />
      <WhyIdaSolar />
      <Benefits />
      <CtaBanner />
      <HowItWorks />
      <PricingCards />
      <EnergyStorage />
      <RecentArticles />
    </>
  );
}
