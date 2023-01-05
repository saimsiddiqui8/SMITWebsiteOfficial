import "./styles.css"
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsGlobe2 } from "react-icons/bs"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">

          <path d="M 0,700 C 0,700 0,350 0,350 C 100.75,323.57142857142856 201.5,297.14285714285717 332,335 C 462.5,372.85714285714283 622.7500000000001,475 753,467 C 883.2499999999999,459 983.5,340.85714285714283 1093,303 C 1202.5,265.14285714285717 1321.25,307.57142857142856 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#0d6db7" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

        <div style={{ backgroundColor: "#0D6DB7" }}>


          <div className="text-center" id="logos">
            <span className="mx-3" id="logo">
              <a target="_blank"id="a" href="https://www.facebook.com/SaylaniMassTraining">
              <BsFacebook />
              </a>
            </span>

            <span className="mx-3" id="logo">
              <a target="_blank" id="a" href="https://www.saylaniwelfare.com/en">
              <BsGlobe2 />
              </a>
            </span>

            <span className="mx-3" id="logo">
              <a target="_blank" id="a" href="https://twitter.com/OfficialSwit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <BsTwitter />
              </a>
            </span>

            <span className="mx-3" id="logo">
              <a target="_blank" id="a" href="https://www.instagram.com/officialswit/?hl=en">
              <RiInstagramLine />
              </a>
            </span>

            <span className="mx-3" id="logo">
              <a target="_blank" id="a" href="https://www.youtube.com/c/saylaniwelfareinternationaltrust">
              <FaYoutube />
              </a>
            </span>
          </div>

          <div className="links text-center  pt-4 text-light">
            <span><Link id="a"style={{textDecoration: "none"}} to="/" className="mx-3">Home</Link></span>

            <span><Link id="a"style={{textDecoration: "none"}} to="/courses" className="mx-3">Courses</Link></span>

            <span><Link id="a"style={{textDecoration: "none"}} to="/about" className="mx-3">About Us</Link></span>

            <span><Link id="a"style={{textDecoration: "none"}} to="/contact" className="mx-3">Contact Us</Link></span>

            <span><Link id="a"style={{textDecoration: "none"}} to="/admissions" className="mx-3">Admission Form</Link></span>
          </div>
<hr style={{color: "white"}}/>
          <div className="text-center text-light pb-1">
          <p >
          ©2023 Muhammad Saim Ali Siddiqui | All Rights Reserved
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;