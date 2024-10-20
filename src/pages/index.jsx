import GoodEducation from "../components/Template 1/GoodEducation";
import Instructor from "../components/Template 1/Instructors";
import QualityEducation from "../components/Template 1/QualityEducation";
import Reviews from "../components/Template 1/Reviews";

const Home = () => {
  return (
    <div className="text-black">
      <QualityEducation />
      <GoodEducation />
      <Reviews />
      <Instructor />
    </div>
  );
};
export default Home;
