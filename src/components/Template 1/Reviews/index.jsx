import underline from "../../../assets/template1/reviews/underline.png";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import reviewImg1 from "../../../assets/template1/reviews/review1.png";
import reviewImg2 from "../../../assets/template1/reviews/review2.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
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
        {/* <Slider {...settings}> */}
          {/* card 1 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              {/* Rendering the image */}
              <img src={reviewImg1} alt={name} className="w-16 h-16" />
              <div className="flex flex-col gap-1">
                {/* Using props for dynamic content */}
                <h3 className="text-2xl font-bold">Mohh Jumah</h3>
                <p className="text-green-600 font-medium text-xl">
                  Senior Developer
                </p>
              </div>
            </div>
            {/* Rendering the description */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              {/* Rendering the image */}
              <img src={reviewImg2} alt={name} className="w-16 h-16" />
              <div className="flex flex-col gap-1">
                {/* Using props for dynamic content */}
                <h3 className="text-2xl font-bold">John Mark</h3>
                <p className="text-green-600 font-medium text-xl">
                  Data Analyst
                </p>
              </div>
            </div>
            {/* Rendering the description */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis
            </p>
        </div>
        {/* card 3 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              {/* Rendering the image */}
              <img src={reviewImg2} alt={name} className="w-16 h-16" />
              <div className="flex flex-col gap-1">
                {/* Using props for dynamic content */}
                <h3 className="text-2xl font-bold">John Mark</h3>
                <p className="text-green-600 font-medium text-xl">
                  Data Analyst
                </p>
              </div>
            </div>
            {/* Rendering the description */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis
            </p>
          </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};
export default Reviews;
