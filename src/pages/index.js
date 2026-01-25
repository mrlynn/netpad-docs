import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import PillarsSection from '@site/src/components/PillarsSection';
import AIShowcase from '@site/src/components/AIShowcase';
import StatsSection from '@site/src/components/StatsSection';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NetPad is a comprehensive, open-source platform for creating MongoDB-connected data entry forms, workflows, search interfaces, and data management applications—all without writing code.">
      <main>
        <HeroSection />
        <PillarsSection />
        <AIShowcase />
        <StatsSection />
      </main>
    </Layout>
  );
}
