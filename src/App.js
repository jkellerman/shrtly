import FeatureSection from "./components/FeatureSection";
import GlobalStyles from "./components/Global.styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <LinkShortener />
      <FeatureSection />
    </>
  );
};

export default App;
