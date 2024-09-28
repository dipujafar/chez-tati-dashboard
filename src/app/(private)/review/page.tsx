import ReviewContainer from "@/components/(private)/review/ReviewContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";

const ReviewPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-10">
        <ReviewContainer></ReviewContainer>
      </Container>
    </div>
  );
};

export default ReviewPage;
