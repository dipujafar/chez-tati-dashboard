import Container from "@/components/shared/Container";
import HeroSection from "./HeroSection";
import TrendingProducts from "./TrendingProducts";
import CustomerExprience from "./CustomerExprience";
import Feedbacks from "./Feedbacks";

const HomePageContainer = () => {
  return (
    <>
      <hr />
      <Container className="space-y-28">
        <HeroSection></HeroSection>
        <TrendingProducts></TrendingProducts>
        <CustomerExprience></CustomerExprience>
        {/* <Feedbacks></Feedbacks> */}
      </Container>
    </>
  );
};

export default HomePageContainer;
