/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import marketing from "../../../assets/template1/favorite/favourite1.png";
// import design from "../../assets/images/favourite/Component 22.png";
// import programming from "../../assets/images/favourite/Component 25.png";
// import technology from "../../assets/images/favourite/Component 26 (1).png";
import arrowLeft from "../../../assets/template1/favorite/leftArrow.png";
import arrowRight from "../../../assets/template1/favorite/rigthArrow.png";
import React from "react";
import Slider from "react-slick";
import { useRef } from "react";

const Favourite = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="max-w-7xl m-4 lg:mx-auto mb-8 lg:mb-24 p-4 md:p-0">
      {/* heading */}
      <div className="flex justify-between items-start gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-medium md:font-semibold text-base md:text-3xl text-gary_text">
          Choose Favourite course from top categories
        </h1>
        <a
          className="text-nowrap font-Poppins font-normal text-sm md:text-2xl text-gary_text"
          href="#"
        >
          See all
        </a>
      </div>
      {/* course and image desktop section */}
      <div className="gap-8 relative">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <figure className="">
            <img src={marketing} alt="" />
          </figure>
          <figure className="">
            <img src={marketing} alt="" />
            {/* <img src={design} alt="" /> */}
          </figure>
          <figure className="">
            {/* <img src={programming} alt="" /> */}
            <img src={marketing} alt="" />
          </figure>
          <figure className="">
            {/* <img src={technology} alt="" /> */}
            <img src={marketing} alt="" />
          </figure>
        </Slider>
        {/* arrow left */}
        <figure
          onClick={previous}
          className="absolute left-4 top-[40%] cursor-pointer"
        >
          <img src={arrowLeft} alt="" />
        </figure>
        {/* right left */}
        <figure
          onClick={next}
          className="absolute right-12 top-[40%] cursor-pointer"
        >
          <img src={arrowRight} alt="" />
        </figure>
      </div>

      {/* course and image mobile section */}
      <div className="md:hidden flex justify-between gap-4 relative">
        <figure className="">
          <img src={marketing} alt="" />
        </figure>

        <figure className="">
          <img src={marketing} alt="" />
          {/* <img src={technology} alt="" /> */}
        </figure>
        <figure className="">
          <img src={marketing} alt="" />
          {/* <img src={programming} alt="" /> */}
        </figure>
      </div>
    </section>
  );
};

export default Favourite;
