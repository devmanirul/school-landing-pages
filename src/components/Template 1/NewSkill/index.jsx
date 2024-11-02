import { useRef } from "react";
import skill1 from "../../../assets/template1/NewSkill/NewSkill1.png";
import skill2 from "../../../assets/template1/NewSkill/NewSkill2.png";
import skill3 from "../../../assets/template1/NewSkill/NewSkill3.png";
import starImg from "../../../assets/template1/NewSkill/starImg.png";
import groupLogo from "../../../assets/template1/NewSkill/groupLogo.png";
import arrowLeft from "../../../assets/template1/NewSkill/leftArrow.png";
import arrowRight from "../../../assets/template1/NewSkill/rightArrow.png";
import Slider from "react-slick";

const NewSkill = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="max-w-6xl mx-auto p-2 lg:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-3 lg:gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base md:text-3xl text-gary_text">
          Learn a new skill in two hours{" "}
        </h1>
      </div>
      {/* card container section */}
      <article className="mb-4 lg:mb-24 relative">
        <Slider
          className="w-full"
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {/* design */}
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            <img src={skill1} alt="" className="" />
            {/* top content */}
            <article className="flex justify-between items-start mt-3">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                {"All You need in Business Strategy"}
              </h1>
              <aside className="flex justify-start items-center gap-1 w-2/12">
                <figure className="w-full">
                  <img src={starImg} alt="" className="h-5 w-5" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">{"4.5"}</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            <img src={skill2} alt="" className="" />
            {/* top content */}
            <article className="flex justify-between items-start  mt-3">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                {"All You need in Business Strategy"}
              </h1>
              <aside className="flex justify-start items-center gap-1 w-2/12">
                <figure className="w-full">
                  <img src={starImg} alt="" className="h-5 w-5" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">{"4.5"}</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            <img src={skill3} alt="" className="" />
            {/* top content */}
            <article className="flex justify-between items-start mt-3">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                {"All You need in Business Strategy"}
              </h1>
              <aside className="flex justify-start items-center gap-1 w-2/12">
                <figure className="w-full">
                  <img src={starImg} alt="" className="h-5 w-5" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">{"4.5"}</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>

          {/* card 1 */}
          {/* {skillData.map((item) => (
            <SkillCard key={item.id} {...item} />
          ))} */}
        </Slider>
        {/* arrow left */}
        <figure
          onClick={previous}
          className="absolute left-7 top-[30%] cursor-pointer"
        >
          <img src={arrowLeft} alt="" />
        </figure>
        {/* right left */}
        <figure
          onClick={next}
          className="absolute right-7 top-[30%] cursor-pointeryyy"
        >
          <img src={arrowRight} alt="" />
        </figure>
      </article>
    </section>
  );
};
export default NewSkill;
