import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeButton from '../button/Button';
import Image from '../../assets/bashirFarooqi.jpg'

const OurVision: React.FC = () => {
    return (
        <>
            <Container id="ourVisionDiv" className='mb-5 pb-5'>
                <Row id='row' className=' mt-5  pt-1 ps-5'>

                    <Col lg={6}>
                        <img id='founder' className="container" src={Image} alt="" />
                    </Col>

                    <Col lg={6}>
                        <h1 className=' my-5' id='heading'> Our goal is to <span id='span2'>develop</span> more than <span id='span2'>1 million
                        </span> IT experts across the country.</h1>

                        <div id="parent">Providing Free Education To All.<div id="border"></div></div>

                        <p className='mt-2'>We are committed to developing more than 1 million software developers, which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan.</p>

                        <ThemeButton classes='mb-5' data="Apply Now" />
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default OurVision;
