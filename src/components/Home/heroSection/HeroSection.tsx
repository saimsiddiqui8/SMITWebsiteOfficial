import './style.css';
import Image from '../../../assets/Asset 3.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeButton from '../../ThemeBtn/Button';
import ContextHeading from '../../contextHeading/ContextHeading';
import OurVision from '../ourVision/OurVision';
import OurServices from '../ourServices/OurServices';
import Slides from '../slider/Slider';
import SuccessStories from '../successStories/Success';
import Review from '../testimonials/Review';
import WhyUs from '../whyUs/WhyUs';
import { Link } from 'react-router-dom';
import { FloatButton } from 'antd';
import { motion } from 'framer-motion';
// import News from '../announcements/Announcements';






const HeroSection: React.FC = () => {
    return (
        <>
            <div id='cont'>
                <Container className='text-light'>
                    <Row className='ps-5 overflow-hidden'>
                        <Col lg={5} id='heroText'>
                            <motion.div
                                animate={{ x: 0, scale:1  }}
                                initial={{ x:-200, scale:0 }}
                                transition={{ duration: 2}}
                            >
                                <h1 className='fw-bold my-5' id='head'>Be <span id='span'>Educated</span> So That You  Can Change The <span id='span'>World</span>.</h1>

                                <div id="parent">Providing Free Education To All.<div id="border"></div></div>
                                <p className='mt-2'>Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan.</p>

                                <Link to="/admissions">
                                    <ThemeButton classes='mt-2' data="Apply Now" />
                                </Link>
                            </motion.div>
                        </Col>

                        <Col lg={6}>
                            <motion.div
                             animate={{ x: 0, scale:1  }}
                             initial={{ x:500, scale:0 }}
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 2}}
                            >
                            <img id='heroImg' className="container pt-5" style={{ width: "120%" }} src={Image} alt="" />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg width="100%" height="1%" id="svg" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,400 C 0,400 0,200 0,200 C 85.41944349020955,177.04912401236686 170.8388869804191,154.09824802473375 238,162 C 305.1611130195809,169.90175197526625 354.0638955685332,208.6561319134318 426,216 C 497.9361044314668,223.3438680865682 592.9055307454483,199.27722432153897 652,195 C 711.0944692545517,190.72277567846103 734.3139814496736,206.23497080041224 789,197 C 843.6860185503264,187.76502919958776 929.838543455857,153.7828924768121 1012,140 C 1094.161456544143,126.21710752318792 1172.331844726898,132.63345929233938 1243,146 C 1313.668155273102,159.36654070766062 1376.834077636551,179.68327035383032 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#0d6db7" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

            {/* 1th section  */}
            <Container>
                <section>
                    <Slides />
                </section>
            </Container>

            {/* 2nd section  */}
            <section>
                <div style={{ backgroundColor: "#0D6DB7", borderRadius: "40px" }}>
                    <OurVision />
                </div>
            </section>

            {/* 3rd section  */}
            <section>
                <Container>
                    <WhyUs />
                </Container>
            </section>

            {/* 4rd section  */}
            <div style={{ backgroundColor: "#0D6DB7", borderRadius: "40px" }}>
                <Container>
                    <section>
                        <ContextHeading classes='text-center text-light  pb-5 pt-5' contentOne='Our Success Students Stories..' />
                        <SuccessStories />
                    </section>
                </Container>
            </div>

            {/* 5th section  */}
            <Container>
                <section>
                    <div className='ms-5 ps-5'>
                        <h1 className='fw-bold'>About Saylani Free Services..</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt porro a <br />  nulla dolorem odio magnam quisquam, blanditiis facilis corrupti minima rem <br /> porro tempore ut cum accusamus numquam placeat! explicabo. Voluptas</p>
                    </div>
                    <OurServices />
                </section>
            </Container>

            <FloatButton.BackTop className='floatBtn' style={{ backgroundColor: "#0D6DB7" }} />

        </>
    );
}

export default HeroSection;
