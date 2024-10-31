/* eslint-disable react/prop-types */
const InstructorCard = ({ img, name, rank, description }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-1 border px-10 py-10 w-[350px] h-[370px]">
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
  );
};
export default InstructorCard;
