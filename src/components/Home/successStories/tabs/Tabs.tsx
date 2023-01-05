import './style.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

const Tabs = ({ videoSourceOne, videoSourceTwo, videoSourceThree }: { videoSourceOne: string, videoSourceTwo: string, videoSourceThree: string, }) => {
    return (
        <>
            <Container>
                <Row id='row' className='justify-content-evenly text-center mt-5'>

                    <Col  className='mt-2' lg={4} md={6} sm={12}>
                        <Player poster="/assets/poster.png" src={videoSourceOne}>
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>

                    <Col className='mt-2' lg={4} md={6} sm={12}>
                        <Player poster="/assets/poster.png" src={videoSourceTwo}>
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>

                    <Col className='mt-2' lg={4} md={6} sm={12}>
                        <Player poster="/assets/poster.png" src={videoSourceThree}>
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default Tabs;
