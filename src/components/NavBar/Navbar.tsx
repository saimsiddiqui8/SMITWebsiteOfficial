import { useState } from 'react'
import Image from "../../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeButton from '../ThemeBtn/Button';
import { AiOutlineAlignRight } from 'react-icons/ai'
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { Modal, Form, Input } from 'antd';
import LoadingBar from 'react-top-loading-bar'
import { getDocs, query, where, collection } from 'firebase/firestore'
import { db } from '../../config/firebase';
import { notification } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import certificatePDF from "./certificatePDF"
import {motion} from 'framer-motion'

const NavBar: React.FC = () => {
    const [progress, setProgress] = useState(0)
    const [certificateval, setCertificateval] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const progressBar = () => {
        setTimeout(() => {
            setProgress(20)
        }, 50);
        setTimeout(() => {
            setProgress(40)
        }, 100);
        setTimeout(() => {
            setProgress(60)
        }, 200);
        setTimeout(() => {
            setProgress(80)
        }, 250);
        setTimeout(() => {
            setProgress(100)
        }, 300);
    }

    const gotoAdmission = () => {
        navigate("/admissions")
        setProgress(100)
    }



    // certificate 



    const createPdf = async (certificateval: string) => {

        const openNotificationDataEmpty = () => {
            notification.open({
                message: 'Input data Empty found',
                description:
                    'Please enter number to verify your certificate',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        };
        if (certificateval == '') {
            openNotificationDataEmpty()
        }


        // creating a condition if the require value is saved / available if firebase fireStore 
        const certificateVerification = collection(db, 'certificateVerification');
        const queryForCertificateVerify = query(certificateVerification, where("no", "==", certificateval));
        const querySnapshot = await getDocs(queryForCertificateVerify)


        const openNotification = () => {
            notification.open({
                message: 'No Certificate data Found',
                description:
                    'The number you entered is incorrect. Please contact SMIT department.',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        };
        const openNotificationofVerified = () => {
            const btn = (
                <>
                    <ThemeButton data='DOWNLOAD' clickFunc={() => certificatePDF(holderName, holderNumber, holderCourse, holderCourseDuration, holderFrom, holderTill)} />
                </>
            );
            notification.open({
                message: 'Certificate Verified',
                description:
                    'Your Certificate has been verified you can download it.',
                icon: <CheckCircleOutlined style={{ color: "lightgreen" }} />,

                btn,
                duration: 0,
            });
        };


        // creating array for pushing it outside forEach 
        let items: any = []
        querySnapshot.forEach((doc) => {
            let certificateNo = doc.data();
            items.push(certificateNo);
        });

        //  making constants 
        const getCertificateNo = items[0]
        const holderName = getCertificateNo.name;
        const holderNumber = getCertificateNo.no;
        const holderCourse = getCertificateNo.course;
        const holderCourseDuration = getCertificateNo.courseDuration;
        const holderFrom = getCertificateNo.from;
        const holderTill = getCertificateNo.till;


        if (holderNumber == undefined) {
            openNotification()
        } else {
            openNotificationofVerified()
        }


    }

    return (
        <>
            <LoadingBar
                color='#0788eb'
                loaderSpeed={100}
                transitionTime={100}
                waitingTime={500}
                shadow={false}
                height={4}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Navbar id='navBar' className="px-0 text-light" expand="lg">
                <Container>
                    <Link className="text-decoration-none " to="/admin">
                        <motion.div
                        animate={{ x: 0,  }}
                        initial={{ x:-250, }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 1}}
                        >
                        <img className="container" src={Image} style={{ width: '110px', height: "50px" }} alt="" />
                        </motion.div>
                    </Link>
                    <Navbar.Toggle className='text-center' aria-controls="basic-navbar-nav">
                        <AiOutlineAlignRight className='mt-2' style={{ fontSize: "2rem" }} />
                    </Navbar.Toggle>
                    <motion.div
                     animate={{ x: 0,  }}
                     initial={{ x:-250, }}
                     transition={{ duration: 1}}
                    >
                    <Navbar.Collapse className='text-center' id="basic-navbar-nav">
                    
                        <Nav className="ms-auto">
                            <Link id="a" onClick={() => progressBar()} className="text-decoration-none text-dark ms-3 mt-2 mt-2 me-2" to="/">Home</Link>
                            <Link id="a" onClick={() => progressBar()} className="text-decoration-none text-dark ms-3 mt-2 me-2" to="/courses">Courses</Link>
                            <Link id="a" onClick={() => progressBar()} className="text-decoration-none text-dark ms-3 mt-2 me-2" to="/about">About Us</Link>
                            <Link id="a" onClick={() => progressBar()} className="text-decoration-none text-dark ms-3 mt-2 me-2" to="/contact">Contact Us</Link>
                            {/* <div className="ms-3 me-1"> <ThemeButton data='Register Now' /></div> */}
                            {/* <div className="ms-3 me-1"> <ThemeButton data='Admission Form' /></div> */}
                            <div className="ms-3 me-1">
                                <button onClick={() => gotoAdmission()} id="AdmissionBtn">ADMISSION FORM</button>
                            </div>
                            <ThemeButton data="Verify Certificate" clickFunc={() => setOpen(true)} />
                            <Modal
                                title="VERIFICATION OF CERTIFICATE"
                                centered
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}
                                open={open}
                                footer={null}
                                className="w-75"
                            >
                                <Form.Item className='container'>
                                    <label className='mt-3'>Enter Code Written on certificate to verify :</label> <br />
                                    <Input value={certificateval} onChange={event => setCertificateval(event.target.value)} className=' mt-2' id='fullName' placeholder='Enter code...' /> <br />
                                    <label >E.g (SMIT/2000/AB/99) :</label>
                                </Form.Item>
                                <ThemeButton clickFunc={() => createPdf(certificateval)} data="Search" classes="w-100 mt-3" />
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                    </motion.div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;