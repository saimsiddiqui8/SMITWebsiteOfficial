import { useState } from "react";
import ContextHeading from "../contextHeading/ContextHeading";
import ThemeButton from "../ThemeBtn/Button";
import { useNavigate } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';
import { db } from "../../config/firebase";
import { addDoc, collection } from 'firebase/firestore'
import { CheckCircleOutlined } from "@ant-design/icons"
import { Input, notification } from "antd";
import "./style.css"


const certRef = collection(db, "certificateVerification")

const Login = () => {
    const [names, setNames] = useState("")
    const [fatherNames, setfatherNames] = useState("")
    const [no, setNo] = useState("")
    const [course, setCourse] = useState("")
    const [batch, setBatch] = useState("")
    const [courseDuration, setCourseDuration] = useState("")
    const [from, setFrom] = useState("")
    const [till, setTill] = useState("")
    const navigate = useNavigate()

    const openNotificationSuccess = () => {
        notification.open({
            message: 'Hey Admin!',
            duration: 1,
            description: "Data Saved Successfully.",
            icon: <CheckCircleOutlined style={{ color: 'lightgreen' }} />,
        });
    };

    const signOut = () => {
        window.localStorage.removeItem("isLoggedIn")
        navigate("/admin")
    }

    const addCertVerify = async () => {
        const concatName = `${names} s/o ${fatherNames}`
        const concatCourses = `${course} (Batch-${batch})`

        // converting all data in upper case 
        const concatNames = concatName.toUpperCase()
        const concatNo = no.toUpperCase()
        const concatCourse = concatCourses.toUpperCase()
        const concatCourseDuration = courseDuration.toUpperCase()
        const concatFrom = from.toUpperCase()
        const concatTill = till.toUpperCase()

        const data = {
            name: concatNames,
            no: concatNo,
            course: concatCourse,
            courseDuration: concatCourseDuration,
            from: concatFrom,
            till: concatTill,
        }
        addDoc(certRef, data);
        openNotificationSuccess();
    }

    return (
        <>
            <div id="log">
                <ThemeButton data={<LogoutOutlined style={{ fontSize: "30px" }} />} classes="mt-4 me-5" clickFunc={signOut} />
            </div>
            <ContextHeading contentOne="Hey" coloredHeading="Admin" contentTwo="!" />

            {/* add CertificateVerification Data  */}
            <section>
                <div className="text-center">
                    <h5 className="mt-5">Add Candidate Certificate Verification Data:</h5>
                    <Input className="w-25 mt-2" allowClear maxlength="18" value={names} onChange={event => setNames(event.target.value)} placeholder='Candicate Name' /> <br />
                    <Input className="w-25 mt-2" allowClear maxlength="18" value={fatherNames} onChange={event => setfatherNames(event.target.value)} placeholder='Candicate Father Name' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="17" value={no} onChange={event => setNo(event.target.value)} placeholder='Candicate Roll Number (Most Important)' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="30" value={course} onChange={event => setCourse(event.target.value)} placeholder='Candicate selected Course' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="2" value={batch} onChange={event => setBatch(event.target.value)} placeholder='Candicate batch number' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="9" value={courseDuration} onChange={event => setCourseDuration(event.target.value)} placeholder='Candicate Course Duration' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="9" value={from} onChange={event => setFrom(event.target.value)} placeholder='Course started from' /> <br />
                    <Input className="w-25 mt-3" allowClear maxlength="9" value={till} onChange={event => setTill(event.target.value)} placeholder='Course ended till' /> <br />
                    <ThemeButton data="Add Data" classes="mt-4" clickFunc={addCertVerify} />
                </div>
            </section>
            <div className="end" >
            </div>
        </>
    )
}
export default Login;