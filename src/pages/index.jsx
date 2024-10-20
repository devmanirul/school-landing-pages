import GoodEducation from "../components/Template 1/GoodEducation";
import Instructor from "../components/Template 1/Instructors";
import QualityEducation from "../components/Template 1/QualityEducation";
import Reviews from "../components/Template 1/Reviews";
import Footer from "../components/Template 1/Shared/Footer";
import StairCase from "../components/Template 1/StairCase";

const Home = () => {
  return (
    <div className="text-black">
      <QualityEducation />
      <GoodEducation />
      <Reviews />
      <Instructor />
      <StairCase />
      <Footer />
    </div>
  );
};
export default Home;
