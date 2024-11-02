/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import marketing from "../../../assets/template1/favorite/favourite1.png";
import design from "../../../assets/template1/favorite/favourite2.png";
import programming from "../../../assets/template1/favorite/favourite3.png";
import technology from "../../../assets/template1/favorite/favourite4.png";
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
    <section className=" md:max-w-6xl m-4 lg:mx-auto mb-8 lg:mb-24 p-4 md:p-0">
      {/* heading */}
      <div className="flex justify-between items-start gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-medium md:font-semibold text-base md:text-3xl text-gary">
          Choose Favourite course from top categories
        </h1>
        <a
          className=" font-Poppins font-normal text-sm md:text-2xl text-gary"
          href="#"
        >
          See all
        </a>
      </div>
      {/* course and image desktop section */}
      <div className="gap-8 relative">
        <Slider
          className=""
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {/* marketing */}
          <div className="group overflow-hidden w-72 h-full mx-auto pl-1">
            <div className="relative rounded-lg object-cover">
              <img
                src={marketing}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="bg-black/50 absolute inset-0"></div>
            </div>

            {/* contant container */}
            <div className="absolute px-3 -bottom-52 group-hover:bottom-3 duration-1000 w-72">
              <h1 className="text-xl font-extrabold text-white">Marketing</h1>
              <p className="mt-2 mb-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati blanditiis reiciendis dignissimos possimus.
                Voluptatum suscipit dolorum quo, voluptates nobis architecto
                minima sint, debitis veritatis iste quos quam pariatur.
                Laboriosam tenetur iure ipsum pariatur! Dicta.
              </p>
            </div>
          </div>
          {/* design */}
          <div className="group overflow-hidden w-72 h-full mx-auto pl-1">
            <div className="relative rounded-lg object-cover">
              <img src={design} alt="" className="h-full w-full object-cover" />
              <div className="bg-black/50 absolute inset-0"></div>
              {/* <img src={design} alt="" /> */}
            </div>
            {/* contant container */}
            <div className="absolute px-3 -bottom-52 group-hover:bottom-3 duration-1000 w-72">
              <h1 className="text-xl font-extrabold text-white">Design</h1>
              <p className="mt-2 mb-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati blanditiis reiciendis dignissimos possimus.
                Voluptatum suscipit dolorum quo, voluptates nobis architecto
                minima sint, debitis veritatis iste quos quam pariatur.
                Laboriosam tenetur iure ipsum pariatur! Dicta.
              </p>
            </div>
          </div>
          {/* programming */}
          <div className="group overflow-hidden w-72 h-full mx-auto pl-1">
            <div className="relative rounded-lg object-cover">
              <img
                src={programming}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="bg-black/50 absolute inset-0"></div>
              {/* <img src={design} alt="" /> */}
            </div>
            {/* contant container */}
            <div className="absolute px-3 -bottom-52 group-hover:bottom-3 duration-1000 w-72">
              <h1 className="text-xl font-extrabold text-white">Programming</h1>
              <p className="mt-2 mb-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati blanditiis reiciendis dignissimos possimus.
                Voluptatum suscipit dolorum quo, voluptates nobis architecto
                minima sint, debitis veritatis iste quos quam pariatur.
                Laboriosam tenetur iure ipsum pariatur! Dicta.
              </p>
            </div>
          </div>
          {/* technology */}
          <div className="group overflow-hidden w-72 h-full mx-auto pl-1">
            <div className="relative rounded-lg object-cover">
              <img
                src={technology}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="bg-black/50 absolute inset-0"></div>
              {/* <img src={design} alt="" /> */}
            </div>
            {/* contant container */}
            <div className="absolute px-3 -bottom-52 group-hover:bottom-3 duration-1000 w-72">
              <h1 className="text-xl font-extrabold text-white">Technology</h1>
              <p className="mt-2 mb-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati blanditiis reiciendis dignissimos possimus.
                Voluptatum suscipit dolorum quo, voluptates nobis architecto
                minima sint, debitis veritatis iste quos quam pariatur.
                Laboriosam tenetur iure ipsum pariatur! Dicta.
              </p>
            </div>
          </div>
          {/* extra */}
          <div className="group overflow-hidden w-72 h-full mx-auto pl-1">
            <div className="relative rounded-lg object-cover">
              <img
                src={marketing}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="bg-black/50 absolute inset-0"></div>
            </div>
            {/* contant container */}
            <div className="absolute px-3 -bottom-52 group-hover:bottom-3 duration-1000 w-72">
              <h1 className="text-xl font-extrabold text-white">Marketing1</h1>
              <p className="mt-2 mb-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati blanditiis reiciendis dignissimos possimus.
                Voluptatum suscipit dolorum quo, voluptates nobis architecto
                minima sint, debitis veritatis iste quos quam pariatur.
                Laboriosam tenetur iure ipsum pariatur! Dicta.
              </p>
            </div>
          </div>
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
          className="absolute right-4 top-[40%] cursor-pointer"
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
