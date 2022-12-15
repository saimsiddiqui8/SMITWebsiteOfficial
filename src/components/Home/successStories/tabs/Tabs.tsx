// import './style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'antd';

const App: React.FC = () => {
    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
            >











                <Tab eventKey="" title="Web and Mob. Hybrid App Development">
                    <Container>
                        <Row id='row' className='justify-content-evenly text-center mt-5 ps-5'>

                            <Col hoverable className='mt-2' lg={4} md={6} sm={12}>
                                
                                <iframe className='shadow' src="https://player.vimeo.com/video/137857207" title="Vimeo video" allowFullScreen></iframe>
                               
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Instructors</h4>
                                    <p className='pb-3'>We have qualified experienced teaching staff which are working in the IT industry from years.</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Techonologies</h4>
                                    <p>We are currently training our students on the latest cutting edge techonologies and the requirments of industries</p>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </Tab>

























                <Tab eventKey="profile" title="Graphic Designing">
                    <Container>
                        <Row id='row' className='justify-content-evenly text-center mt-5 ps-5'>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >IT Labs</h4>
                                    <p>SMIT have Air Conditioned IT labs which consist of High end tenhonology computers and devices for the students</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Instructors</h4>
                                    <p className='pb-3'>We have qualified experienced teaching staff which are working in the IT industry from years.</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Techonologies</h4>
                                    <p>We are currently training our students on the latest cutting edge techonologies and the requirments of industries</p>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>








                <Tab eventKey="longer-tab" title="Artifical Intelegence">
                    <Container>
                        <Row id='row' className='justify-content-evenly text-center mt-5 ps-5'>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >IT Labs</h4>
                                    <p>SMIT have Air Conditioned IT labs which consist of High end tenhonology computers and devices for the students</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Instructors</h4>
                                    <p className='pb-3'>We have qualified experienced teaching staff which are working in the IT industry from years.</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Techonologies</h4>
                                    <p>We are currently training our students on the latest cutting edge techonologies and the requirments of industries</p>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>






                <Tab eventKey="contact" title="Techno Kidz" >
                    <Container>
                        <Row id='row' className='justify-content-evenly text-center mt-5 ps-5'>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >IT Labs</h4>
                                    <p>SMIT have Air Conditioned IT labs which consist of High end tenhonology computers and devices for the students</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Instructors</h4>
                                    <p className='pb-3'>We have qualified experienced teaching staff which are working in the IT industry from years.</p>
                                </Card>
                            </Col>

                            <Col className='mt-2' lg={4} md={6} sm={12}>
                                <Card id='cards' hoverable >
                                    <h4 >Techonologies</h4>
                                    <p>We are currently training our students on the latest cutting edge techonologies and the requirments of industries</p>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>





            </Tabs>
        </>
    );
}

export default App;
