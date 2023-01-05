import './contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'antd';
import { ImLocation2 } from 'react-icons/im';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import ThemeButton from '../ThemeBtn/Button';
import { Input } from 'antd';
import { useState } from 'react';
import { Button, message } from 'antd';
const { TextArea } = Input;
var Recaptcha = require('react-recaptcha');

// const realTimeDataBase = () => {

// }
const ContactUs = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openSuccessMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Uploading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Uploaded!',
        duration: 2,
      });
    }, 1000);
  };

  const openErrorMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Uploading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'warning',
        content: 'Please fill all data!',
        duration: 1,
      });
    }, 1000);
  };

  const [verified, setVerified] = useState(false)
  const verify = (value: object) => {
    console.log("Captach val: " + value);
    console.log(value);

    setVerified(true)
  }
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  let name: string, value: string;
  const GetUserData = (event: any) => {
    name = event.target!.name;
    value = event.target!.value;

    setUser({ ...user, [name]: value })
  }
  const PostData = async (e: any) => {
    e.preventDefault()

    const { firstName, lastName, email, subject, message } = user;

    if (firstName && lastName && email && subject && message) {
      const responce: object = await fetch("https://saylaniwelfaremasstraining-default-rtdb.firebaseio.com/ContactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            subject,
            message,
          })
        }
      );

      if (responce) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        openSuccessMessage();
      }
    } else {
      openErrorMessage()
    }
  }

  return (
    <>

      {/* Heading Section  */}
      <section>
        <div className='text-center mt-5 pt-5 mb-4' > <a id='ContactUsHeading'>CONTACT US</a> </div>
        <h1 className='mt-1 mb-4 pb-3 text-center display-4 fw-bold'>Get In <span id='touch'>Touch</span></h1>
      </section>

      {/* information section  */}
      <section>
        <Container>
          <Row id='row' className='justify-content-evenly text-center mt-5 ps-5' >

            <Col className='mt-2' lg={3} md={6} sm={12}>
              <Card id='contactCards' hoverable style={{ border: '1px solid #0873B9', backgroundColor: "#0873B9", borderRadius: "40px" }} className="text-light p-4">
                <h1 className='display-4' style={{ color: "white" }}><ImLocation2 /></h1>
                <h3 className='mb-4'>Campus Location</h3>
                <p>2nd Floor, Mumtaz Mobile Mall, Gulshan Chowrangi</p>
              </Card>
            </Col>

            <Col className='mt-2' lg={3} md={6} sm={12}>
              <Card id='contactCards' hoverable style={{ border: '1px solid #0873B9', backgroundColor: "#0873B9", borderRadius: "40px" }} className="text-light p-4">
                <h1 className='display-4' style={{ color: "white" }}><FaClock /></h1>
                <h3 className='mb-4'>Working Hours</h3>
                <p>1Monday to Friday 09:00 to 18:30 <br /> Saturday 15:30</p>

              </Card>
            </Col>

            <Col className='mt-2' lg={3} md={6} sm={12}>
              <Card id='contactCards' hoverable style={{ border: '1px solid #0873B9', backgroundColor: "#0873B9", borderRadius: "40px" }} className="text-light p-4">
                <h1 className='display-4' style={{ color: "white" }}><MdMarkEmailUnread /></h1>
                <h3 className='mb-4'>Message Us</h3>
                <p>education@saylaniwelfare.com <br /> <BsFacebook /> /SaylaniMassTraining</p>
              </Card>
            </Col>
          </Row>

        </Container>
      </section>

      {/* contact form section  */}
      <section>
        <Container id='formSection'>
          <div className='text-center pt-5 mt-5 px-3' > <a id='ContactUsHeading'>CONTACT FORM</a> </div>
          <h1 className='mt-4  text-center display-4 fw-bold'>We Want To <span id='touch'>Hear</span> From  You</h1>
          <p className='text-center'>Please fill out the form on this section to contact us. Or call between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>

          <Form className='p-5' method='POST'>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control onChange={GetUserData} value={user.firstName} name="firstName" type="email" placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control onChange={GetUserData} value={user.lastName} name="lastName" type="email" placeholder="Enter first name" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control onChange={GetUserData} value={user.email} name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Enter Subject:</Form.Label>
              <Form.Control onChange={GetUserData} value={user.subject} name="subject" type="text" placeholder="Enter subject" />
            </Form.Group>
            <br />
            <Form.Label>Enter Message:</Form.Label>
            <TextArea onChange={GetUserData} value={user.message} name="message" rows={4} placeholder="Enter your message..." maxLength={120} />
            <br />

            <div className='mt-4'>
            <Recaptcha
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              render="explicit"
              onChange={verify}
            />
            </div>
            <div className="text-center mt-5 mb-5 pb-5 pt-3">
              {contextHolder}
              <ThemeButton data='Submit' classes='px-3' disable={verified} clickFunc={PostData} />
            </div>
          </Form>
        </Container>
      </section>


    </>
  )
}

export default ContactUs