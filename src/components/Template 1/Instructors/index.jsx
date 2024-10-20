import instructorData from "../constant/instructor.constant";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* header */}
      <h3 className="text-3xl font-semibold text-center">
        Meet Out Instructor
      </h3>
      <div className="w-full flex flex-row justify-between py-16">
        {instructorData.map((view) => (
          <div key={view.id} className="">
            {/* Passing all props to ReviewCard */}
            <InstructorCard
              img={view.img}
              name={view.name}
              rank={view.rank}
              description={view.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Instructor;
