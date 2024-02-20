import { AutomatedComponents } from "./components/automated";
import { CeoComponents } from "./components/ceo";
import { DashboardComponents } from "./components/dashboard";
import { GlobalComponents } from "./components/global";
import { HeroComponents } from "./components/hero";
import { MarketersComponents } from "./components/marketers";
import { PublishComponents } from "./components/publish";
import { QuestionsComponents } from "./components/questions";
import { RanksComponents } from "./components/ranks";
import { SeoComponents } from "./components/seo/cards";

export default function Home() {
  return (
    <main className="container mx-auto">
      <GlobalComponents.Nav />
      <HeroComponents.Hero />
      <GlobalComponents.FeatureBackground bg_1="/assets/section-bg.png">
        <DashboardComponents.Dashboard />
      </GlobalComponents.FeatureBackground>
      <AutomatedComponents.Automated />
      <SeoComponents.Seo />
      <CeoComponents.Ceo />
      <GlobalComponents.FeatureBackground bg_1="/assets/section-bg.png">
        <RanksComponents.Ranks />
      </GlobalComponents.FeatureBackground>
      <CeoComponents.Ceo />
      <PublishComponents.Publish />
      <MarketersComponents.Marketers />
      <QuestionsComponents.Questions />
      <GlobalComponents.FooterIntro />
      <GlobalComponents.Footer />
    </main>
  );
}
