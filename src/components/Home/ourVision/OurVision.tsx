import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeButton from '../../ThemeBtn/Button';
import Image from '../../../assets/bashirFarooqi.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import ContextHeading from '../../contextHeading/ContextHeading';

const OurVision: React.FC = () => {
    return (
        <>
            <div className='overflow-hidden' style={{ marginTop: "7rem", marginBottom: "5rem" }} >
                <Row id='row' className='text-light'>
                    <Col lg={6}>
                        <motion.div
                            transition={{ duration: 2 }}
                            whileHover={{ scale: 0.8 }}
                        >
                            <img src={Image} id="founder" height="100%" width="100%" alt="" />
                        </motion.div>
                    </Col>
                    <Col lg={5} className="ps-5">
                        <motion.div
                        animate={{ x: 0, scale:1  }}
                        initial={{ x:200, scale:0 }}
                        >
                        <h1 className='fw-bold display-5 mt-4 mb-5'> <span style={{ color: "#8CC53F" }}>I</span>Our Vision</h1>
                        <h1 className='mt-4  mb-5' id='headi'> We want to make Pakistan an IT Hub
                            to make our economy strong.</h1>
                        {/* <div id="parent">Providing Free Education To All.<div id="border"></div></div> */}
                        <p className='mt-2'>We are committed to developing more than 1 million software developers,  which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan.</p>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default OurVision;
