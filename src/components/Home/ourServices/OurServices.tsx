import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "antd";
import { GiTeacher } from 'react-icons/gi';
import { FaCode } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';
import ImageOne from "../../../assets/imagez.png"
import ImageTwo from "../../../assets/ImageTwo.png"
import ImageThree from "../../../assets/ImageThree.png"

const OurServices: React.FC = () => {
    return (
        <>
            <Row className=' mt-5 ps-5'>
                <Col className='mt-2' lg={4} md={10} sm={12}>
                    <Card id='cards' hoverable >
                        <Row>
                            <Col lg={6} sm={12}>
                                <img src={ImageOne} alt="" />
                            </Col>

                            <Col lg={6} sm={12} className="CardData">
                                <h6 className='mt-4 fw-bold'>Free Education</h6>
                                <p className='mt-3'> Lorem ipsum dolor sit amet consectet saigmfn Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa.</p>
                            </Col>
                        </Row>
                        {/* <span id='cardLogo'><RiComputerFill /></span>
                        <h4 >Free Education</h4>
                        <p>SMIT is a initiative of Saylani International Welfate Trust. It provide free of cost education to the youth.</p> */}
                    </Card>
                </Col>

                <Col className='mt-2' lg={4} md={10} sm={12}>
                    <Card id='cards' hoverable >
                        <Row>
                            <Col lg={6} sm={12}>
                                <img src={ImageTwo} alt="" />
                            </Col>

                            <Col lg={6} sm={12} className="CardData">
                                <h6 className='mt-4 fw-bold'>IT Labs</h6>
                                <p className='mt-3'> Lorem ipsum dolor sit amet consectet saigmfn Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa.</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col className='mt-2' lg={4} md={10} sm={12}>
                    <Card id='cards' hoverable >
                        <Row>
                            <Col lg={6} sm={12}>
                                <img src={ImageThree} alt="" />
                            </Col>
                            <Col lg={6} sm={12} className="CardData">
                                <h6 className='mt-4 fw-bold'>Techonologies</h6>
                                <p className='mt-3'> Lorem ipsum dolor sit amet consectet saigmfn Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa.</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>


        </>

    );
}

export default OurServices;


