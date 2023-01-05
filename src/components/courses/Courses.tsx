import { useState } from 'react'
import ContextHeading from '../contextHeading/ContextHeading'
import { Divider, Steps } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Image from "../../assets/WebAndMobile.jpg"
import ImageTwo from "../../assets/Ai.jpg"
import ImageThree from "../../assets/graphicDesigning.jpg"
import ImageFour from "../../assets/mobReparing.jpg"
import "./styles.css"
import { Button, Modal } from 'antd';
import ThemeButton from '../ThemeBtn/Button';

// import Image from "../../assets/"
function Courses() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContextHeading contentOne="Courses" contentTwo="Offer " coloredHeading="We " classes="mt-5" />
      <Container>
        <div className='text-center mt-4' > <a id='heading'>WEB AND MOBILE HYBRID APP DEVELOPMENT</a> </div>
        <Row id='webMob' style={{borderRadius: "45px"}}>

          <Col lg={6}>
            <img id='webMobImg' className="container rounded pt-5 pb-5" src={Image} alt="" />
          </Col>
          <Col lg={6}>
            <h3 className='text-center mt-4' style={{ color: "#0D6DB7" }} >DURATION: ONE YEAR (MERN STACK)</h3>
            <p className='text-center'>2 Modules</p>
            <Steps
              current={10}
              direction="vertical"
              items={[

                {
                  title: 'HTML5, CSS3',
                  description: 'HTML describes the structure of a Web page, while CSS describe the presentation of Web.',
                },
                {
                  title: 'JavaScript (ES6)',
                  description: 'JavaScript is a scripting language designed for creating web-centric applications.',
                },

                {
                  title: 'React',
                  description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'
                },

                {
                  title: 'Node.js',
                  description: 'Node.js is an open source server environment. It uses JavaScript on the server'
                },
                {
                  title: 'Express.js',
                  description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
                },

                {
                  title: 'MongoDB',
                  description: 'MongoDB, the most popular NoSQL database, is an open-source document-oriented database.',
                },
              ]}
            />
            <ThemeButton data='More Info' classes='ms-5 my-3' clickFunc={() => setOpen(true)} />
            <Modal
              title="Web And Mobile Hybrid App Development MERN stack"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>

            </Modal>
          </Col>
        </Row>
      </Container>
      <br /><br />

      <Container>
        <div className='text-center mt-4' > <a id='heading'>WEB AND MOBILE HYBRID APP DEVELOPMENT</a> </div>
        <Row id='' className='rounded' style={{borderRadius: "45px"}}>

          <Col lg={6}>
            <img id='webMobImg' className="container rounded pt-3 pb-5" src={ImageTwo} alt="" />
          </Col>
          <Col lg={6}>
            <h3 className='text-center mt-4' style={{ color: "#0D6DB7" }} >DURATION: ONE YEAR (MERN STACK)</h3>
            <p className='text-center'>2 Modules</p>
            <Steps
              current={10}
              direction="vertical"
              items={[

                {
                  title: 'HTML5, CSS3',
                  description: 'HTML describes the structure of a Web page, while CSS describe the presentation of Web.',
                },
                {
                  title: 'JavaScript (ES6)',
                  description: 'JavaScript is a scripting language designed for creating web-centric applications.',
                },

                {
                  title: 'React',
                  description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'
                },

                {
                  title: 'Node.js',
                  description: 'Node.js is an open source server environment. It uses JavaScript on the server'
                },
                {
                  title: 'Express.js',
                  description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
                },

                {
                  title: 'MongoDB',
                  description: 'MongoDB, the most popular NoSQL database, is an open-source document-oriented database.',
                },


              ]}
            />

            <ThemeButton data='More Info' classes='ms-5 my-3' clickFunc={() => setOpen(true)} />
            <Modal
              title="Web And Mobile Hybrid App Development MERN stack"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>

          </Col>
        </Row>
      </Container>
      <br /><br />

      <Container>
        <div className='text-center mt-4' > <a id='heading'>WEB AND MOBILE HYBRID APP DEVELOPMENT</a> </div>
        <Row id='webMob' style={{borderRadius: "45px"}} >

          <Col lg={6}>
            <img id='webMobImg' className="container rounded pt-5 pb-5" src={ImageThree} alt="" />
          </Col>
          <Col lg={6}>
            <h3 className='text-center mt-4' style={{ color: "#0D6DB7" }} >DURATION: ONE YEAR (MERN STACK)</h3>
            <p className='text-center'>2 Modules</p>
            <Steps
              current={10}
              direction="vertical"
              items={[

                {
                  title: 'HTML5, CSS3',
                  description: 'HTML describes the structure of a Web page, while CSS describe the presentation of Web.',
                },
                {
                  title: 'JavaScript (ES6)',
                  description: 'JavaScript is a scripting language designed for creating web-centric applications.',
                },

                {
                  title: 'React',
                  description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'
                },

                {
                  title: 'Node.js',
                  description: 'Node.js is an open source server environment. It uses JavaScript on the server'
                },
                {
                  title: 'Express.js',
                  description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
                },

                {
                  title: 'MongoDB',
                  description: 'MongoDB, the most popular NoSQL database, is an open-source document-oriented database.',
                },


              ]}
            />

            <ThemeButton data='More Info' classes='ms-5 my-3' clickFunc={() => setOpen(true)} />
            <Modal
              title="Web And Mobile Hybrid App Development MERN stack"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>

          </Col>
        </Row>
      </Container>

      <br /><br />

      <Container>
        <div className='text-center mt-4' > <a id='heading'>WEB AND MOBILE HYBRID APP DEVELOPMENT</a> </div>
        <Row className='rounded'>

          <Col lg={6}>
            <img id='webMobImg' className="container rounded pt-5 pb-5" src={ImageFour} alt="" />
          </Col>
          <Col lg={6}>
            <h3 className='text-center mt-4' style={{ color: "#0D6DB7" }} >DURATION: ONE YEAR (MERN STACK)</h3>
            <p className='text-center'>2 Modules</p>
            <Steps
              current={10}
              direction="vertical"
              items={[

                {
                  title: 'HTML5, CSS3',
                  description: 'HTML describes the structure of a Web page, while CSS describe the presentation of Web.',
                },
                {
                  title: 'JavaScript (ES6)',
                  description: 'JavaScript is a scripting language designed for creating web-centric applications.',
                },

                {
                  title: 'React',
                  description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'
                },

                {
                  title: 'Node.js',
                  description: 'Node.js is an open source server environment. It uses JavaScript on the server'
                },
                {
                  title: 'Express.js',
                  description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
                },

                {
                  title: 'MongoDB',
                  description: 'MongoDB, the most popular NoSQL database, is an open-source document-oriented database.',
                },


              ]}
            />

            <ThemeButton data='More Info' classes='ms-5 my-3' clickFunc={() => setOpen(true)} />
            <Modal
              title="Web And Mobile Hybrid App Development MERN stack"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>

          </Col>
        </Row>
      </Container>
      <br /><br />
    </>
  );
}

export default Courses