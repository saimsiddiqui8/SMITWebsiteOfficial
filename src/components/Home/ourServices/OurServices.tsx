import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from "antd"
import { GiClassicalKnowledge } from 'react-icons/gi';

const OurServices: React.FC = () => {
    return (
        <>
            <Row id='row' className='justify-content-evenly text-center mt-5 ps-5'>

                <Col className='mt-2' lg={4} md={6} sm={12}>
                    <Card id='cards' hoverable >
                        <span id='cardLogo'><GiClassicalKnowledge /></span>
                        <h4 >IT Labs</h4>
                        <p>SMIT have Air Conditioned IT labs which consist of High end tenhonology computers and devices for the students</p>
                    </Card>
                </Col>

                <Col className='mt-2' lg={4} md={6} sm={12}>
                    <Card id='cards' hoverable >
                        <span id='cardLogo'><GiClassicalKnowledge /></span>
                        <h4 >Instructors</h4>
                        <p className='pb-3'>We have qualified experienced teaching staff which are working in the IT industry from years.</p>
                    </Card>
                </Col>

                <Col className='mt-2' lg={4} md={6} sm={12}>
                    <Card id='cards' hoverable >
                        <span id='cardLogo'><GiClassicalKnowledge /></span>
                        <h4 >Techonologies</h4>
                        <p>We are currently training our students on the latest cutting edge techonologies and the requirments of industries</p>
                    </Card>
                </Col>
            </Row>


        </>

    );
}

export default OurServices;


