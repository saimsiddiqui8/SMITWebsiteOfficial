import React from 'react';
import './RegisterNow.tsx'
import Image from '../assets/logo.jpg';
import "./register.css"
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, Tabs, DatePicker, Upload } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import ThemeButton from '../components/button/Button';
const { TabPane } = Tabs;

const RegisterNow: React.FC = () => {
  return (
    <div>
      <div className='text-center mt-3 mb-4'>
        <img src={Image} alt="" className='image-fluid' id='logoImg' />
        <h4 className='text-center mt-4'>Course Registration Form</h4>

      </div>
      <Tabs centered>
        <TabPane tab="New Application" key="1">
          <div>
            <Container className='w-75'>
              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="city">Select City</label>
                    <Select>
                      <Select.Option value="none">Select city</Select.Option>
                      <Select.Option value="karachi">Karachi</Select.Option>
                      <Select.Option value="hyderabad">Hyderabad</Select.Option>
                      <Select.Option value="faisalabad">Faisalabad</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="city">Select course</label>
                  <Form.Item>
                    <Select>
                      <Select.Option value="demo">Not Available</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>



              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="email">Email:</label>
                    <Input id='email' placeholder='Email' />
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <Form.Item>
                    <Input id='phoneNumber' placeholder='Phone Number' />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="CNIC">CNIC:</label>
                    <Input id='CNIC' placeholder='CNIC' />
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="FatherCNIC">Father's CNIC:</label>
                  <Form.Item>
                    <Input id='FatherCNIC' placeholder='Father CNIC' />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="city">Date Of Birth:</label>
                  <Form.Item>
                    <DatePicker className='w-100' />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <label htmlFor="gender">Gender:</label>
                    <Select id='gender'>
                      <Select.Option value="none">Select gender</Select.Option>
                      <Select.Option value="none">Male</Select.Option>
                      <Select.Option value="karachi">Female</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <label htmlFor="Address">Address:</label>
              <Form.Item>
                <Input id='Adderss' placeholder='Address' />
              </Form.Item>

              <label htmlFor="LastQualification">Last qualification:</label>
              <Form.Item>
                <Input id='LastQualification' placeholder='Last qualification' />
              </Form.Item>

              <label htmlFor="DoYouHaveALaptop">Do you have a Laptop?:</label>
              <Form.Item>
                <Input id='DoYouHaveALaptop' placeholder='Do you have a Laptop?' />
              </Form.Item>


              {/* img upload  */}
              <div>
                <ol>
                  <li>With white or blue background</li>
                  <li>File type: jpg, jpeg, png</li>
                  <li>File size must be less than 1MB</li>
                  <li>Upload your recent passport size picture</li>
                  <li>Your Face should be clearly visible without any Glasses</li>
                </ol>
              </div>

              <label htmlFor="uploadImg">Upload</label> <br />
              <Form.Item valuePropName="fileList">
                <Upload id='uploadImg' action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>


              {/* ending terms and conditions  */}
              <ol>
                <li>I hereby, solemnly declare that the data and facts mentioned herein are true and correct to the best of my knowledge. Further, I will abide by all the established and future regulations and policies of SWIT</li>
                <li>I hereby accept the responsibilities of good conduct and guarantee that I will not be involved in any other activity, political or ethical, but learning during my stay in the program.</li>
                <li>Defiance will render my admission canceled at any point in time.</li>
                <li>
                  Upon completion, of the course, I will complete the required project by SWIT.</li>
                <li>It's mandatory for female students to wear abaya/hijab in the class</li>
              </ol>
              <ThemeButton data='SUBMIT' classes='w-100 mt-4 mb-5 text-center' />
            </Container>
          </div>


        </TabPane>
        <TabPane tab="Download ID Card" key="2">
          <center>
            <Container>
              <Form.Item>
                <Input id='downloadID' className='w-50' placeholder='CNIC' />
              </Form.Item>
              <ThemeButton data='DOWNLOAD' classes='w-50 mb-5 text-center' />
            </Container>
          </center>
        </TabPane>


        <TabPane tab="Results" key="3">
          <center>
            <Container>
              <Form.Item>
                <Input id='rollNo' className='w-50' placeholder='Roll Number' />
              </Form.Item>
              <ThemeButton data='SEARCH' classes='w-50 mb-5 text-center' />
            </Container>
          </center>
        </TabPane>
      </Tabs>
    </div >
  );
};

export default RegisterNow;