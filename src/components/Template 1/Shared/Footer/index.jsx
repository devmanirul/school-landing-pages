import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000000] flex flex-col-reverse md:flex-col px-4 md:px-0">
      <div className="md:max-w-6xl mx-auto py-5 md:py-28 flex flex-row justify-between md:gap-24">
        {/* Footer left */}
        <div className=" md:w-3/12 lg:block hidden">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-semibold text-white">WiSchool</h3>
            <p className="text-white">
              We are not here to sell you products, we sell value through our
              expertise.
            </p>
            {/* icons area */}
            <div className="flex flex-row gap-3 items-center">
              <FaFacebook className="text-green-700 w-6 h-6" />
              <AiFillTwitterCircle className="text-green-700 w-7 h-7" />
              <FaInstagram className="text-green-700 w-6 h-6" />
              <FaLinkedinIn className="text-green-700 w-6 h-6" />
            </div>
          </div>
        </div>
        {/* Footer left end */}
        <div className="md:w-9/12 flex flex-row justify-between gap-1 md:gap-14 md:pt-2">
          {/* home */}
          <div className="w-2.5/12 flex flex-col gap-3">
            <p className="text-white">Home</p>
            <p className="text-white">Services</p>
            <p className="text-white">Training</p>
            <p className="text-white">Resources</p>
            <p className="text-white">About Us</p>
          </div>
          {/* SME */}
          <div className="w-2.5/12 flex flex-col gap-3">
            <p className="text-white">SME</p>
            <p className="text-white">Solution</p>
            <p className="text-white">Reviews</p>
            <p className="text-white">Blog</p>
          </div>
          {/* Contact Us */}
          <div className="w-6/12 md:w-3/12 flex flex-col gap-3">
            <p className="text-white">Contant Us</p>
            <p className="text-white">Place A Call</p>
            <p className="text-white">Email</p>
            <p className="text-white">wischool@gmail.com</p>
          </div>
          {/* Job opening */}
          <div className=" flex flex-col gap-3 lg:block hidden">
            <p className="text-white">Job Opening</p>
            <p className="text-white">News</p>
            <p className="text-white">Research</p>
          </div>
          {/* Terms */}
          <div className=" flex flex-col gap-3 lg:block hidden">
            <p className="text-white">Uk Privacy Policy</p>
            <p className="text-white">Terms Of Use</p>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="flex flex-col mx-auto justify-center items-center md:w-8/12 gap-4 py-5 md:py-10">
        <h3 className="text-xl md:text-3xl font-bold text-white">
          Subscribe to get latest updates
        </h3>
        <div className="flex flex-row">
          {/* input */}
          <input
            type="text"
            placeholder="Your Email Address"
            className="bg-white text-green-500 py-3 pl-2 md:pl-2 md:px-5 outline-none"
          />
          {/* button */}
          <button className="bg-green-500 py-3 px-5 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
