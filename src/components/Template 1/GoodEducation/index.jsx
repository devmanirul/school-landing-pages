import goodEducationAvarter from "../../../assets/template1/goodEducation/goodEducatonAvarter.png";
import jobUnderline from "../../../assets/template1/goodEducation/jobUnderline.png";
import { BsBook } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";

const GoodEducation = () => {
  return (
    <div className="max-w-6xl mx-auto py-5 md:py-20 flex flex-col gap-14">
      {/* heading */}
      <div className="text-3xl font-semibold">
        We Bring The Good Education To Life
      </div>
      {/* good education details */}
      <div className="md:w-[1086px] flex flex-col md:flex-row gap-5 md:gap-28">
        {/* left */}
        <div className="relative">
          <div className="cursor-pointer overflow-hidden rounded-[28px] rounded-br-[72px] group pr-10 md:pr-0">
            <img
              src={goodEducationAvarter}
              alt=""
              className="object-cover group-hover:scale-125 duration-500 group-hover:-translate-x-16 group-hover:translate-y-16"
            />
          </div>
          {/* job opportunities */}
          <div className="flex flex-col justify-start items-center gap-2 absolute bottom-10 right-0 lg:-right-12 bg-white p-2 z-10 shadow-2xl rounded-lg border">
            <div className="flex flex-col gap-1">
              <div className="bg-green-100 p-3 rounded-full">
                <PiBag className="text-green-600" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-green-600 font-bold text-center text-xl">
                  Job
                </span>
                <img src={jobUnderline} alt="" className="h-1" />
              </div>
            </div>
            <h3 className="font-medium text-sm">Opportunities</h3>
          </div>
        </div>
        {/* right start */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-5xl font-bold leading-[60px]">
            Let Your Education Do The Walking
          </h3>
          <div className="flex flex-col gap-3">
            {/* one */}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="bg-green-100 p-4 rounded-full">
                <BsBook className="text-green-600" />
              </div>
              <h3 className="font-medium text-lg">
                Free E-book, Videos and kits
              </h3>
            </div>
            {/* two */}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="bg-green-100 p-4 rounded-full">
                <AiOutlineFieldTime className="text-green-600" />
              </div>
              <h3 className="font-medium text-lg">Learn at your own pace</h3>
            </div>
            {/* three */}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="bg-green-100 p-4 rounded-full">
                <PiBag className="text-green-600" />
              </div>
              <h3 className="font-medium text-lg">
                Collaborate with different learners around the globe
              </h3>
            </div>
            {/* four */}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="bg-green-100 p-4 rounded-full">
                <MdOutlinePeopleAlt className="text-green-600" />
              </div>
              <h3 className="font-medium text-lg">
                Top instructors around the globe
              </h3>
            </div>
          </div>
        </div>
        {/* right end */}
      </div>
    </div>
  );
};
export default GoodEducation;
