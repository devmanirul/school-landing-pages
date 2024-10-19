/* eslint-disable react/prop-types */
const ReviewCard = ({ img, name, rank, description }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-5">
        {/* Rendering the image */}
        <img src={img} alt={name} className="w-16 h-16" />
        <div className="flex flex-col gap-1">
          {/* Using props for dynamic content */}
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-green-600 font-medium text-xl">{rank}</p>
        </div>
      </div>
      {/* Rendering the description */}
      <p>{description}</p>
    </div>
  );
};

export default ReviewCard;
