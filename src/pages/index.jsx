import Favourite from "../components/Template 1/Favourite";
import GoodEducation from "../components/Template 1/GoodEducation";
import Instructor from "../components/Template 1/Instructors";
import Banner from "../components/Template 1/Banner";
// import QualityEducation from "../components/Template 1/QualityEducation";
import Reviews from "../components/Template 1/Reviews";
import Footer from "../components/Template 1/Shared/Footer";
import Navbar from "../components/Template 1/Shared/Navbar";
import StairCase from "../components/Template 1/StairCase";
import PopularCourse from "../components/Template 1/PopularCourse";
import NewSkill from "../components/Template 1/NewSkill";

const Home = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Banner />
      <Favourite />
      <PopularCourse />
      <NewSkill />
      <GoodEducation />
      <Reviews />
      <Instructor />
      <StairCase />
      <Footer />
    </div>
  );
};
export default Home;
