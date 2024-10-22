import schoolLogo from "../../../../assets/template1/navbar/profile.png";
import search from "../../../../assets/template1/navbar/search.png";
import hamburger from "../../../../assets/template1/navbar/hamburger.png";
// import userMobile from "../../assets/images/navbar/Frame 3.png";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-4 md:px-0 py-7">
      {/* left section */}
      <section
        className="flex items-center
       gap-4 lg:gap-0"
      >
        <figure className="block lg:hidden">
          <img src={hamburger} alt="" />
        </figure>
        <figure>
          <img src={schoolLogo} alt="" />
        </figure>
      </section>

      {/* middle section */}
      <section className="hidden lg:block">
        <ul className="font-Open_Sans font-semibold text-base flex gap-6">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Courses
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instructor
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Schedule
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </li>
        </ul>
      </section>
      {/* right section */}
      <section className="hidden lg:flex flex-row items-center gap-6">
        <figure className="cursor-pointer">
          <img src={search} alt="" />
        </figure>
        <a href="#" className="font-Source_Code_Pro text-green font-semibold">
          Login
        </a>
        <button className="bg-green rounded-md font-Source_Code_Pro text-white font-semibold py-3 px-6">
          <a href="#">Register</a>
        </button>
      </section>
      {/* for mobile */}
      {/* <figure className="block lg:hidden">
        <img src={userMobile} alt="" />
      </figure> */}
    </div>
  );
};

export default Navbar;
