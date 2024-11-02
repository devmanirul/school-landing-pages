/* eslint-disable react/prop-types */
const InstructorCard = ({ img, name, rank, description }) => {
  return (
    <div className="w-4/12">
      <div className="">
        <div className="flex flex-col items-center gap-5 md:gap-1 border px-10 py-10 w-[275px] md:w-[350px] md:h-[370px]">
          {/* Rendering the image */}
          <img src={img} alt={name} className="w-16 h-16" />
          <div className="flex flex-col items-center gap-1 hover:hidden">
            {/* Using props for dynamic content */}
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-green-600 font-medium text-xl">{rank}</p>
          </div>
          {/* Rendering the description */}
          <p className="text-center">{description}</p>
        </div>
      </div>
      {/* <div className="hover:block hidden">
        <img src={img} alt={name} className="w-full h-full" />
        <p className="">slidfhosaehf</p>
      </div> */}
    </div>
  );
};
export default InstructorCard;
