import { useState } from 'react';
import './RegisterNow.jsx'
import Image from '../../assets/smitLogo.jpg';
import "./register.css"
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, Tabs, DatePicker, Upload, message } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';
import ThemeButton from '../ThemeBtn/Button';
import { db } from '../../config/firebase.jsx';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { FloatButton } from 'antd';
import createPdfDownload from './PdfFile.jsx';

const admissionsnRef = collection(db, 'admissions');
const formsDataRef = collection(db, 'admissionFormsDetails');
const { TabPane } = Tabs;


const RegisterNow = () => {


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

  // const [myArrayData, setmyArrayData] = useState([])

  // useEffect(() => {
  //   const getArrayData = async() => {
  //     const myArrData = await getDocs(formsDataRef)
  //     let arrData = [];
  //     myArrData.forEach((doc) => {
  //     let dbData = doc.data();
  //     arrData.push(dbData)
  //     setmyArrayData(arrData[0]);
  //   });
  //   }
  // getArrayData()
  // }, [])

  // let c = myArrayData.cities;
  // ADMISSION form dropdown values 
  // console.log(myArrayData);

  const cities = ["karachi", "hyderabad", "faisalabad"]
  const courses = ["Artificial Intelligence", "Web And Mobile App Dev", "Graphics Designing", "Video Animation", "Mobile Reparing", "CCNA"];
  const lastQualifications = ["Grades 5-8", "Matriciulation", "Intermediate", "Undergraduate", "Graduate", "Masters", "PHD", "Other"];
  const doHaveLaptop = ["Yes", "No"];
  const genders = ["male", "female"];

  // all values of select (from drop down list)
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [lastQualification, setLastQualification] = useState('');
  const [haveLaptop, sethaveLaptop] = useState('');
  const [gender, setGender] = useState('');

  // all valus from input allowClear field
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cnic, setCNIC] = useState('');
  const [fatherCnic, setFatherCNIC] = useState('');
  const [address, setAddress] = useState('');

  // CURD (Create, Update, Read, Delete) data using Firebase FireStore


  // {Will always create a number of 6 digits and it ensures the first digit will never be 0. }
  let num = Math.floor(100000 + Math.random() * 900000);
  var myString = num.toString();
  let rollNo = (`SMIT-${myString}`)
  // get data from admission form
  const admissionForm = {
    name,
    gender,
    fatherName,
    course,
    haveLaptop,
    city,
    phoneNumber,
    email,
    cnic,
    fatherCnic,
    address,
    lastQualification,
    rollNo,
  }


  // setting / sending data to firestore 
  const handleSubmit = () => {
    if ((name && gender && course && city && fatherName && email && phoneNumber
      && cnic && fatherCnic && address && lastQualification && haveLaptop && rollNo) == "") {

      alert("Please Input allowClear all field values")
      return;

    } else {
      try {
        addDoc(admissionsnRef, admissionForm);
        openSuccessMessage()
      } catch (error) {
        alert(error.message)
      }
    }
  }

  // getting / recieving all data from firestore 
  // { getting value from download CNIC }
  const [downloadCnic, setDownloadCNIC] = useState('');


  const getData = async () => {
    // applying query / filter 
    const queryForDownloadCNIC = query(admissionsnRef, where("cnic", "==", downloadCnic));
    const querySnapshot = await getDocs(queryForDownloadCNIC)

    // creating a condition if the require value is saved / available if firebase fireStore 


    // creating array for pushing it outside forEach 
    let items = []
    querySnapshot.forEach((doc) => {
      let nameData = doc.data();
      items.push(nameData);
    });

    //  making constants 
    const downloadname = items[0].name
    const downloadfatherName = items[0].fatherName
    const downloadcourse = items[0].course
    const downloadcnic = items[0].cnic
    const downloadrollNo = items[0].rollNo

    // now inserting values in pdf
    createPdfDownload(downloadname, downloadfatherName, downloadcourse, downloadrollNo, downloadcnic)
    if (items = undefined) {
      alert("ni hy ")
    }
  }

  return (
    <div>
      <div className='text-center mt-3 mb-4'>
        <img src={Image} alt="" className='image-fluid' id='logoImg' />
        <h4 className='text-center mt-4'>Course <span id='touch'>Registration</span> Form</h4>

      </div>
      <Tabs centered>
        <TabPane tab="New Application" key="1">
          <Form>
            <Container className='w-75'>
              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="city">Select City:</label>
                    <Select
                      value={city}
                      onChange={event => setCity(event)}
                    >
                      {cities.map((city, index) => {
                        return <Select.Option value={city} key={index}></Select.Option>
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="city">Select Course:</label>
                  <Form.Item>
                    <Select
                      value={course}
                      onChange={event => setCourse(event)}
                      defaultValue="none">
                      {courses.map((course, index) => {
                        return <Select.Option value={course} key={index}></Select.Option>
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Item>
                    <label  htmlFor="fullName">Full Name:</label>
                    <Input allowClear value={name} onChange={event => setName(event.target.value)} id='fullName' placeholder='Full name' />
                  </Form.Item>
                </Col>

                <Col>
                  <label htmlFor="fatherName">Father Name:</label>
                  <Form.Item>
                    <Input allowClear value={fatherName} onChange={event => setFatherName(event.target.value)} id='fatherName' placeholder='Father Name' />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="email">Email:</label>
                    <Input allowClear value={email} onChange={event => setEmail(event.target.value)} id='email' placeholder='Email' />
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <Form.Item>
                    <Input allowClear value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} id='phoneNumber' placeholder='Phone Number' />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <Form.Item>
                    <label htmlFor="CNIC">CNIC:</label>
                    <Input allowClear value={cnic} onChange={event => setCNIC(event.target.value)} id='CNIC' placeholder='CNIC' />
                  </Form.Item>
                </Col>
                <Col>
                  <label htmlFor="FatherCNIC">Father's CNIC:</label>
                  <Form.Item>
                    <Input allowClear value={fatherCnic} onChange={event => setFatherCNIC(event.target.value)} id='FatherCNIC' placeholder='Father CNIC' />
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
                    <Select id='gender'
                      value={gender}
                      onChange={event => setGender(event)}

                    >
                      {genders.map((gender, index) => {
                        return <Select.Option value={gender} key={index}></Select.Option>
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <label htmlFor="Address">Address:</label>
              <Form.Item>
                <Input allowClear value={address} onChange={event => setAddress(event.target.value)} id='Adderss' placeholder='Address' />
              </Form.Item>

              <Form.Item>
                <label htmlFor="LastQualification">Last qualification:</label>
                <Select
                  value={lastQualification}
                  onChange={event => setLastQualification(event)}
                >
                  {lastQualifications.map((lastQualification, index) => {
                    return <Select.Option value={lastQualification} key={index}></Select.Option>
                  })}
                </Select>
              </Form.Item>

              <label htmlFor="DoYouHaveALaptop">Do you have a Laptop?:</label>
              <Form.Item>

                <Select
                  value={haveLaptop}
                  onChange={event => sethaveLaptop(event)}
                >
                  {doHaveLaptop.map((haveLaptop, index) => {
                    return <Select.Option value={haveLaptop} key={index}></Select.Option>
                  })}
                </Select>
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
              <ThemeButton clickFunc={handleSubmit} data='SUBMIT' classes='w-100 mt-4 mb-5 text-center' />
            </Container>
          </Form>
          <FloatButton.BackTop />
        </TabPane>


        <TabPane tab="Results" key="2">
          <center>
            <Container className='mb-5 pb-5 mt-4'>
              <Form.Item>
                <Input allowClear id='rollNo' className='w-50' placeholder='Roll Number' />
              </Form.Item>
              <ThemeButton data='SEARCH' classes='w-50 mb-5 text-center' />
            </Container>
          </center>
        </TabPane>


        <TabPane tab="Download ID Card" key="3">
          <center>
            <Container className='mb-5 pb-5 mt-4'>
              <Form.Item>
                <Input allowClear value={downloadCnic} onChange={event => setDownloadCNIC(event.target.value)} id='downloadID' className='w-50' placeholder='CNIC' />
              </Form.Item>
              <ThemeButton data='DOWNLOAD' clickFunc={getData} classes='w-50 mb-5 text-center' />
              {/* clickFunc={() => createPdfDownload("Muhammad Saim", "Karachi", "Web And Mob", "SMIT-34254", "42101-1675344-7")}   */}
            </Container>
          </center>
        </TabPane>
      </Tabs>
    </div >

  );
};

export default RegisterNow;