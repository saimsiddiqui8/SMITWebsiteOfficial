import { useState } from "react";
import { Form, Input, message, notification } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import ThemeButton from "../ThemeBtn/Button";
import { Container } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import ContextHeading from "../contextHeading/ContextHeading";

const Admin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const authe = getAuth();
  const navigate = useNavigate()


  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';



  const openMessage = () => {
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

  const loggedIn = () => {

    const openNotificationSuccess = () => {
        notification.open({
            message: 'Hey Admin!',
            duration: 1,
            description: "Successfully logged In.",
            icon: <CheckCircleOutlined style={{ color: 'lightgreen' }} />,
        });
    };
    const openNotification = () => {
        notification.open({
            message: 'Cannot Find Your AdminAccount',
            description: "Authentication failed! Try again.",
            icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        });
    };

      signInWithEmailAndPassword(authe, Email, Password)
          .then(async(userCredential) => {
            const user = userCredential.user;
            openMessage();
            navigate("/adminDashboard")
            window.localStorage.setItem("isLoggedIn", true)
            openNotificationSuccess()
            
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              openNotification()
          });
  }

  return (
      <>
          <ContextHeading contentOne="SMIT" coloredHeading="Administration" contentTwo="Login" classes="mt-5" />
          <Container className="text-center w-50 mt-5 pt-5">
              <Form
              
                  name="basic"
                  initialValues={{
                      remember: true,
                  }}
                  autoComplete="off"
              >
                  <Form.Item
                      name="username"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your AdminID!',
                          },
                      ]}
                  >
                      <Input id="input" onChange={(e) => setEmail(e.target.value)}
                          value={Email}
                      />
                      <i>AdminID</i>
                  </Form.Item>

                  <Form.Item
                      name="password"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your password!',
                          },
                      ]}
                  >
                      <Input.Password
                      id="input2"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                      <i>Password</i>
                  </Form.Item>
              </Form>
              <ThemeButton data="Login" classes="mt-3" clickFunc={loggedIn} />
              <div className="end"></div>
          </Container>
      </>
  );
};

export default Admin

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "slider/");
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  







//   <input
//   type="file"
//   onChange={(event) => {
//     setImageUpload(event.target.files[0]);
//   }}
// />
// <button onClick={uploadFile}> Upload Image</button>
// {imageUrls.map((url) => {
//   console.log(url);
//   return <img src={url} />;
// })}