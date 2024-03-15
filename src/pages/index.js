import AboutSection from "../components/HomePage/AboutSection";
import HeroSection from "../components/HomePage/HeroSection";
import Layout from "../components/Layout";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import StatsSection from "../components/StatsSection";
import ReviewSection from "../components/ReviewSection";
import JoinSection from "../components/JoinSection";
import Newsletter from "../components/Newsletter";
import BrandLogos from "../components/BrandLogos";
import VideoSlider from "../components/VideoSlider";

const Index = () => {
  return (
    <Layout
      title="The Global Home for Site Reliability Engineers"
      isHomePage={true}
    >
      <HeroSection />
      {/* <BrandLogos /> */}

      <AboutSection />
      {/* <StatsSection /> */}
      <ReviewSection />
      <JoinSection />
      <BlogSection />
      <VideoSlider />
      {/* <FAQSection /> */}
      {/* <Newsletter /> */}
    </Layout>
  );
};

export default Index;
