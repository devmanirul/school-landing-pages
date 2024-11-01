import skillData from "../constant/skillData.constant";
import SkillCard from "./SkillCard";

const NewSkill = () => {
  return (
    <section className="max-w-6xl mx-auto p-2 lg:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-3 lg:gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base md:text-3xl text-gary_text">
          Learn a new skill in two hours{" "}
        </h1>
      </div>
      {/* card container section */}
      <article className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-8 gap-y-3 lg:gap-y-14 mb-4 lg:mb-24">
        {/* card 1 */}
        {skillData.map((item) => (
          <SkillCard key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
};
export default NewSkill;
