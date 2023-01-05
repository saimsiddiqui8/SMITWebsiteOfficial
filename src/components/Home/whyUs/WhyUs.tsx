import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Image from '../../../assets/whyUs.png'
import "./styles.css"
import {AiOutlineLaptop} from "react-icons/ai"
import {SlDiamond} from "react-icons/sl"
import {FaGraduationCap} from "react-icons/fa"
import {GiSkills} from "react-icons/gi"
import {GiProgression} from "react-icons/gi"
const WhyUs: React.FC = () => {
  return (
    <>
     <Container>
                <Row id='row' className='mb-5'>

                    <Col lg={6} className="mt-5">
                        <img className="container mt-5" height="80%" src={Image} alt="" />
                    </Col>

                    <Col lg={5} id="whyUsText" className="mt-5">
                      <h1 className='fw-bold display-5 mt-4 mt-5 mb-5'> <span style={{color: "#8CC53F"}}>I</span>Why Choose SMIT?</h1>
                        <div id="whyUsHeading" className='3'> <FaGraduationCap id='diamondLogo' /> Technical Education.</div>
                        <p className='mt-2'>We provide technical education because we want youth to be technically strong so to make Pakistan economy strong.</p>
                         
                        <div id="whyUsHeading" className='mt-5 pt-3'> <SlDiamond id='diamondLogo' /> Challenge Yourself.</div>
                        <p className='mt-2 '>Sometimes we all need that extra push. Enviornment we provide keeps you motivated</p>
                         
                         
                        <div id="whyUsHeading" className='mt-5 pt-3'> <GiProgression id='diamondLogo' /> Built skills and your career.</div>
                        <p className='mt-2 '>Empress your employeers with a certificate that documents your learning.</p>
                        {/* <ThemeButton classes='mb-5' data="Apply Now" /> */}
                    </Col>
                </Row>

            </Container>
    </>
  )
}

export default WhyUs;