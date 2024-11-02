import underline from "../../../assets/template1/reviews/underline.png";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import ReviewCard from "./ReviewCard";
import reviewData from "../constant/reviews.constant";

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0 md:py-10">
      {/* header */}
      <h3 className="text-3xl font-semibold text-center lg:block hidden">
        Reviews
      </h3>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 py-5 md:py-16">
        {/* left start */}
        <div className="w-4/12 flex flex-row md:flex-col gap-5 md:gap-10">
          {/* left top */}
          <div className="flex flex-col gap-0.5 md:gap-3">
            <h3 className="text-xl md:text-5xl font-bold">What Our</h3>
            <div className="flex flex-row gap-2 md:gap-5">
              <div className="">
                <span className="text-green-600 font-bold text-center text-xl md:text-5xl">
                  Staudents
                </span>
                <img src={underline} alt="" className="" />
              </div>
              <h3 className="text-xl md:text-5xl font-bold">Stay </h3>
            </div>
            <h3 className="text-xl md:text-5xl font-bold">About Us</h3>
          </div>
          {/* left bottom */}
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <div className="p-0.5 md:p-3 border border-green-600 rounded-full">
              <RiArrowLeftSLine className="h-10 w-10 text-green-600" />
            </div>
            <div className="p-0.5 md:p-3 border border-green-600 rounded-full">
              <RiArrowRightSLine className="h-10 w-10 text-green-600" />
            </div>
          </div>
        </div>
        {reviewData.map((view) => (
          <div key={view.id} className="md:w-8/12 md:p-4">
            {/* Passing all props to ReviewCard */}
            <ReviewCard
              img={view.img}
              name={view.name}
              rank={view.rank}
              description={view.description}
            />
          </div>
        ))}

        {/* left end */}
        {/* right start */}
        {/* right end */}
      </div>
    </div>
  );
};
export default Reviews;
