import React from 'react'
import Image from '../assets/Error.jpg'
import ThemeButton from './ThemeBtn/Button';
import { Link } from "react-router-dom"
function Error404() {
    return (
        <>
            <div className="text-center mb-5">
                <img className="container mt-5 mb-4" style={{ width: "35%" }} src={Image} alt="" />
                <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED OR IS <br /> TEMPORARILY  UNAVAILABLE</p>
                <Link to="/">
                    <ThemeButton data='BACK TO HOMEPAGE' classes='mt-2 mb-5 pb-5'/>
                </Link>
            </div>
        </>
    )
}

export default Error404;

// import { useState, useEffect } from "react";
// import { ref, uploadBytes, getDownloadURL, listAll, } from "firebase/storage";
// import { storage } from "../../config/firebase";
// import { v4 } from "uuid"
// IMG UPLOAD 

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




  
      {/* <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button> */}