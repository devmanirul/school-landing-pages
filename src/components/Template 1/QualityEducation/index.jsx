import bannerRight from "../../../assets/template1/banner/bannerRight.png";
import bannerGirl from "../../../assets/template1/banner/bannerGirl.png";
import bannerUser from "../../../assets/template1/banner/bannerUser.png";
import userLogo from "../../../assets/template1/banner/userLogo .png";
import problemSolving from "../../../assets/template1/banner/problemSolving.png";
import liveChat from "../../../assets/template1/banner/chat.png";
// import groupReading from "../../assets/images/banner/group-reading.png";
// import book from "../../assets/images/banner/book.png";
// import handOnActivities from "../../assets/images/banner/hand-on-activity.png";

const Banner = () => {
  return (
    <>
      <section className="max-w-7xl lg:mx-auto h-full lg:h-[605px] flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-0 rounded-none md:rounded-[50px] bg-banner_bg_color relative  lg:mb-20 py-14 md:py-0 px-4 lg:px-0 md:m-4 ">
        {/* left side */}
        <aside className="w-full md:w-6/12 flex flex-col gap-12 p-4 md:pl-14 z-20">
          <h1 className="font-Poppins font-bold text-3xl lg:text-6xl leading-[48px] lg:leading-[90px]">
            Quality <span className="text-green">Education</span> By Any Means
            Necessary.
          </h1>
          <button className="w-fit bg-green rounded-md font-Source_Code_Pro text-white font-semibold py-5 px-10 outline-none">
            <a href="#">Get Started</a>
          </button>
        </aside>
        {/* right Section */}
        <section className="relative w-full md:w-6/12 flex justify-center md:justify-end p-10 md:pr-10 right-20 z-10">
          {/* left absolute position */}
          <div className="w-28 md:w-36  z-20 lg:w-64 absolute top-1/2 left-0 p-1 md:p-4 bg-white rounded-xl flex flex-col items-center gap-1 md:gap-3 border">
            <p className="text-center font-Poppins font-semibold text-[10px] lg:text-xl ">
              Learn from best <span className="text-green">instructors</span>
              around the globe
            </p>
            <figure className="flex ">
              <img src={bannerUser} alt="" />
            </figure>
          </div>
          {/* main image */}
          <figure className="group cursor-pointer overflow-hidden rounded-[40px] rounded-br-[100px]">
            <img
              src={bannerGirl}
              alt=""
              className="object-cover group-hover:scale-125   duration-500 group-hover:-translate-x-16 group-hover:translate-y-16"
            />
          </figure>
          {/* right absolute position */}
          <div className="w-20 md:w-24 lg:w-32 absolute top-[60%]  lg:top-[65%] right-8 md:right-2  lg:right-4 p-2 lg:p-3 bg-white rounded-xl flex flex-col items-center gap-1 md:gap-3 z-20">
            <figure className="flex ">
              <img src={userLogo} alt="" />
            </figure>
            <p className="text-center font-Poppins font-semibold text-sm lg:text-2xl text-green">
              15k
            </p>

            <p className="text-center font-Poppins font-medium text-[7px] lg:text-xs ">
              Amazing students around the globe
            </p>
          </div>
        </section>
        {/* right bar section */}
        <figure className="absolute inset-y-0  h-full right-[70px]">
          <img
            className="rounded-r-none md:rounded-r-[50px] h-full"
            src={bannerRight}
            alt=""
          />
        </figure>
        {/* feature article section for mobile*/}
        <article className="max-w-7xl  mx-auto md:hidden grid grid-cols-2 justify-center items-center gap-2 z-30">
          {/* problem solving section */}
          <section className=" flex items-center gap-1 p-1 bg-[#DDFFFF] rounded-md">
            <div className="w-8 h-8">
              <img src={problemSolving} alt="" />
            </div>
            <p className="font-Poppins text-[11px]">Problem Solvi</p>
          </section>

          {/* live chat section */}
          <section className="bg-green-600 flex items-center gap-1 p-1 bg-modified_green rounded-md">
            <figure className="w-8 h-8">
              <img src={liveChat} alt="" />
            </figure>
            <p className="font-Poppins text-[11px]">Live Chat</p>
          </section>
          {/* Group Reading section */}
          {/* <section className=" flex items-center gap-1 p-1 bg-modified_green rounded-md">
            <figure className="w-8 h-8">
              <img src={groupReading} alt="" />
            </figure>
            <p className="font-Poppins text-[11px]">Group Reading</p>
          </section> */}

          {/* 10k Courses section */}
          {/* <section className=" flex items-center gap-1 p-1 bg-modified_green rounded-md">
            <figure className="w-8 h-8">
              <img src={book} alt="" />
            </figure>
            <p className="font-Poppins text-[11px]">10k Courses</p>
          </section> */}
          {/* <div className="col-span-2 flex  py-2 justify-center items-center"> */}
          {/* Hand-on activities section */}
          {/* <section className=" w-fit flex justify-center items-center gap-1 p-1 bg-modified_green rounded-md">
              <figure className="w-8 h-8">
                <img src={handOnActivities} alt="" />
              </figure>
              <p className="font-Poppins text-[11px]">Hand-on Activities</p>
            </section> */}
          {/* </div> */}
        </article>
      </section>
      {/* article section for desktop and tablet */}
      <article className=" max-w-7xl m-4 lg:mx-auto hidden md:flex justify-between md:gap-2 lg:gap-12 pb-36">
        {/* problem solving section */}
        <section className="flex items-center md:gap-2  lg:gap-2 md:px-2 lg:px-6 py-2 bg-modified_green rounded-md">
          <figure>{/* <img src={problemSolving} alt="" /> */}</figure>
          <p className="font-Poppins">Problem Solving</p>
        </section>
        {/* live chat section */}
        <section className="flex items-center md:gap-1  lg:gap-2 md:px-2 lg:px-6 py-2 bg-modified_green rounded-md">
          <figure>{/* <img src={liveChat} alt="" /> */}</figure>
          <p className="font-Poppins">Live Chat</p>
        </section>
        {/* Group Reading section */}
        <section className="flex items-center md:gap-1  lg:gap-2 md:px-2 lg:px-6 py-2 bg-modified_green rounded-md">
          <figure>{/* <img src={groupReading} alt="" /> */}</figure>
          <p className="font-Poppins">Group Reading</p>
        </section>

        {/* 10k Courses section */}
        <section className="flex items-center md:gap-1  lg:gap-2 md:px-2 lg:px-6 py-2 bg-modified_green rounded-md">
          <figure>{/* <img src={book} alt="" /> */}</figure>
          <p className="font-Poppins">10k Courses</p>
        </section>

        {/* Hand-on activities section */}
        <section className="flex items-center md:gap-1  lg:gap-2 md:px-2 lg:px-6 py-2 bg-modified_green rounded-md">
          <figure>{/* <img src={handOnActivities} alt="" /> */}</figure>
          <p className="font-Poppins">Hand-on activities</p>
        </section>
      </article>
    </>
  );
};

export default Banner;
