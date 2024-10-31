/* eslint-disable react/prop-types */
import starImg from "../../../../assets/template1/popularCourse/starImg.png";
import groupLogo from "../../../../assets/template1/popularCourse/groupLogo.png";
const CourseCard = ({ title, image, star, students, price, weeks }) => {
  return (
    <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg hover:-translate-y-10 duration-500">
      <figure>
        <img
          src={image}
          alt=""
          className="w-full rounded-tr-md rounded-tl-md "
        />
      </figure>
      {/* content section */}
      <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
        {/* top content */}
        <article className="flex justify-between items-start">
          <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
            {title}
          </h1>
          <aside className="flex justify-start items-center gap-1">
            <figure>
              <img src={starImg} alt="" className="" />
            </figure>
            <p className="font-Poppins text-[8px] lg:text-base">{star}</p>
          </aside>
        </article>
        {/* bottom content */}
        <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
          <aside className="flex items-start gap-3">
            <p className="font-Poppins font-medium text-[10px] lg:text-base">
              {weeks} weeks
            </p>
            <div className="flex items-center gap-1 lg:gap-2">
              <figure>
                <img src={groupLogo} alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
              </figure>
              <p className="font-Poppins font-medium text-[10px] lg:text-base">
                {students}k Students
              </p>
            </div>
          </aside>
          <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
            {price}$
          </h1>
        </article>
      </section>
    </div>
  );
};

export default CourseCard;
