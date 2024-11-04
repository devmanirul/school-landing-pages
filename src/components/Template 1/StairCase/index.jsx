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
    <div
      style={divStyle}
      className="bg-black/80 z-50 w-full mt-10 relative px-5 md:px-0 py-0 md:py-8"
    >
      {/* gif img */}
      <div className="w-full flex-row absolute bottom-0 object-cover overflow-hidden lg:block hidden ">
        <img src={gifImg} alt="" className="w-full h-36 z-10 opacity-80" />
        {/* Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-500 via-gray-500 to-transparent opacity-80"></div>
      </div>
      <div className="">
        {/* main staircase */}
        <div className="">
          <div className="md:max-w-6xl mx-auto flex flex-row md:justify-end relative bg-cover md:bg-center z-30">
            {/* left */}
            <div className="absolute left-0 md:-top-24 lg:block hidden">
              <img src={staircase1} alt="" className="" />
            </div>
            {/* right */}
            <div className="md:w-6/12 p py-5 md:py-10 flex flex-col gap-7">
              <h1 className="text-white font-bold text-2xl md:text-5xl text-center md:text-start leading-tight">
                You don’t have to see the whole staircase just take the first
                step
              </h1>
              <p className="text-white text-center md:text-start">
                Amet in a suspendisse convallis eget, Amet in a suspendisse
                convallis egetAmet in a Amet in a suspendisse
              </p>
              <div className="flex flex-row justify-center md:justify-normal gap-5 md:pt-20">
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
    </div>
  );
};
export default StairCase;

// parant div
// children -- > 1st background img
// children -- > 2nd background gif
// children -- > 3rd background over lap black color
// children -- > 4th uper design
