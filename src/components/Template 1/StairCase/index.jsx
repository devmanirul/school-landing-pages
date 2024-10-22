import staircase1 from "../../../assets/template1//staircase/staircase1.png";
import staircaseBg from "../../../assets/template1//staircase/staircaseBg.png";
import gifImg from "../../../assets/template1/staircase/stairGif.gif";
const StairCase = () => {
  const divStyle = {
    backgroundImage: `url(${staircaseBg})`, // Use the imported image or URL

    backgroundSize: "cover", // Adjusts the size of the image
    backgroundPosition: "center", // Centers the image
  };
  return (
    <div style={divStyle} className="bg-black/50 z-30 w-full mt-10 relative">
      <div className="">
        <div className="flex flex-row absolute bottom-0 object-cover overflow-hidden z-0">
          <img src={gifImg} alt="" className="" />
          <img src={gifImg} alt="" className="" />
          <img src={gifImg} alt="" className="" />
        </div>
        {/* main staircase */}
        <div
          className="max-w-6xl mx-auto flex flex-row justify-end relative bg-cover bg-center z-10"
          style={{
            backgroundImage: `url('../../../assets/template1//staircase/staircaseBg.png')`,
          }}
        >
          {/* left */}
          <div className="w-6/12 absolute left-0 -top-16">
            <img src={staircase1} alt="" className="" />
          </div>
          {/* right */}
          <div className="w-6/12 py-10 flex flex-col gap-7">
            <h1 className="text-white font-bold text-5xl leading-tight">
              You don’t have to see the whole staircase just take the first step
            </h1>
            <p className="text-white">
              Amet in a suspendisse convallis eget, Amet in a suspendisse
              convallis egetAmet in a{" "}
            </p>
            <div className="flex flex-row gap-5 pt-20">
              <button className="bg-green-500 py-3 px-5 text-white rounded-md">
                Get Started
              </button>
              <button className="bg-white py-3 px-5 text-green-700 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StairCase;
