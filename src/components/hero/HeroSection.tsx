import './style.css';
import Image from '../../assets/Asset.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeButton from '../button/Button';
import ContextHeading from '../../components/contextHeading/ContextHeading';
import OurVision from '../../components/ourVision/OurVision';
import OurServices from '../ourServices/OurServices';
import Slides from '../slider/Slider';
import TabMenu from '../successStories/Success';
import SuccessStories from '../successStories/Success';
import News from '../announcements/Announcements';

const HeroSection: React.FC = () => {
    return (
        <Container>
            <Row id='row' className=' mt-5 ps-5'>
                <Col lg={5}>
                    <h1 className=' pt-5 my-5' id='heading'>Be <span id='span'>Educated</span> So That You  Can Change The <span id='span'>World</span>.</h1>

                    <div id="parent">Providing Free Education To All.<div id="border"></div></div>

                    <p className='mt-2'>Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan.</p>

                    <ThemeButton classes='mt-2' data="Apply Now" />
                </Col>

                <Col lg={6}>
                    <img id='heroImg' className="container  my-3 pe-5" src={Image} style={{ width: "120%" }} alt="" />
                </Col>
            </Row>

            {/* 1th section  */}
            <section>
                <Slides />
            </section>

            {/* 1th B section  */}
        <section>
            <News />
        </section>

            {/* 2nd section  */}
            <section>
                <ContextHeading content="Our Success Stories" classes="my-5 text-center" />
                <SuccessStories />
            </section>

            {/* 3rd section  */}
            <section>
                <ContextHeading classes='mt-5 pt-5 pb-3 mb-5 text-center' content="Our Vision" />
                <OurVision />
            </section>


            {/* 4th section  */}
            <section>
                <ContextHeading classes='text-center my-5 pt-5 pb-3' content='Our Services' />
                <OurServices />
            </section>



        </Container>

    );
}

export default HeroSection;
