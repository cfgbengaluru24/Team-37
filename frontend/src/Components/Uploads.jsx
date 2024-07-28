
// import React, { useState } from "react";
// import {
//   AiFillEdit,
//   AiFillLeftCircle,
//   AiFillRightCircle,
// } from "react-icons/ai";
// import { BsFillCloudUploadFill } from "react-icons/bs";
// import { toast, Toaster } from "react-hot-toast";

// const Uploads = () => {
//   const [reportDetails, setReportDetails] = useState({
//     name: "",
//     dateTime: "",
//     address: "",
//     area: "",
//     imageDataURL: ""
//   });
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [userData, setUserData] = useState(null);

//   const saveToDatabase = async (data) => {
//     console.log('Saving user data to the database...');
//     await fetch("http://localhost:8000/api/insert", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("Success:", result);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const validateDetails = () => {
//     if (
//       !reportDetails.name ||
//       !reportDetails.dateTime ||
//       !reportDetails.address ||
//       !reportDetails.area
//     ) {
//       toast.error("Please fill all the fields");
//     } else {
//       handleDataUpload();
//     }
//   };

//   const handleDataUpload = async () => {
//     console.log(reportDetails);
//     const formData = new FormData();
//     formData.append("name", reportDetails.name);
//     formData.append("dateTime", reportDetails.dateTime);
//     formData.append("address", reportDetails.address);
//     formData.append("area", reportDetails.area);
//     formData.append("imageDataURL", reportDetails.imageDataURL);

//     try {
//       const res = await fetch("http://localhost:8000/upload", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       console.log(data);
//     } catch (err) {
//       toast.error(err.message);
//       console.error(err);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const selectedFiles = e.target.files;
//     console.log(selectedFiles[0]);
//     if (selectedFiles) {
//       const previews = [];

//       for (let i = 0; i < selectedFiles.length; i++) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           if (e.target) {
//             previews.push(e.target.result);
//             if (previews.length === selectedFiles.length) {
//               setImagePreviews(previews);
//             }
//           }
//         };
//         reader.onloadend = () => {
//           console.log(reader.result);
//           setReportDetails({ ...reportDetails, imageDataURL: reader.result });
//         };
//         reader.readAsDataURL(selectedFiles[i]);
//       }
//     }
//   };

//   // Navigate to the previous image with looping
//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     } else {
//       setCurrentImageIndex(imagePreviews.length - 1); // Wrap around to the last image
//     }
//   };

//   // Navigate to the next image with looping
//   const nextImage = () => {
//     if (currentImageIndex < imagePreviews.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     } else {
//       setCurrentImageIndex(0); // Wrap around to the first image
//     }
//   };

//   const handleChange = (e) => {
//     setReportDetails({ ...reportDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (
//       !reportDetails.name ||
//       !reportDetails.dateTime ||
//       !reportDetails.address ||
//       !reportDetails.area
//     ) {
//       toast.error("Please fill all the fields");
//       return;
//     }

//     const data = {
//       name: reportDetails.name,
//       dateTime: reportDetails.dateTime,
//       address: reportDetails.address,
//       area: reportDetails.area,
//       imageDataURL: reportDetails.imageDataURL,
//     };

//     setUserData(data);
//     saveToDatabase(data);
//   };

//   return (
//     <>
//       <Toaster />
//       <div className="bg-gray-400 min-h-screen relative pt-24 md:pt-24 pb-10 xl:pt-16 xl:pb-0 w-full flex items-center justify-center bg-cover bg-center">
//         <div className="uploadContent relative z-20 w-full lg:mx-40 flex items-center justify-center space-x-8 px-2">
//           <div className="uploadForm w-full bg-[rgba(255,255,255,0.1)] text-gray-700 flex flex-col lg:flex-row space-y-8 lg:space-y-0 rounded-xl p-4 md:p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]">
//             <div className="images relative flex items-center justify-center lg:order-2 lg:ml-8 lg:w-1/2 rounded-xl">
//               {!imagePreviews.length ? (
//                 <label
//                   className="w-full cursor-pointer flex flex-col items-center justify-center"
//                   htmlFor="uploadFile"
//                 >
//                   <BsFillCloudUploadFill className="text-[20rem] text-[rgba(255,255,255,0.5)]" />
//                   <input
//                     onChange={handleFileUpload}
//                     className="hidden"
//                     type="file"
//                     name="uploadFile"
//                     id="uploadFile"
//                     multiple
//                   />
//                   <p>Click on the above image to upload</p>
//                 </label>
//               ) : (
//                 <div className="relative carousel w-full h-80 rounded-box">
//                   <div className={`carousel-item w-full`}>
//                     <img
//                       className="w-full"
//                       src={imagePreviews[currentImageIndex]}
//                       alt={`Selected Image`}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="absolute w-full flex top-1/2 justify-between">
//                     <button onClick={prevImage}>
//                       <AiFillLeftCircle className="text-4xl ml-1 hover:scale-110 transition-all duration-300" />
//                     </button>
//                     <button onClick={nextImage}>
//                       <AiFillRightCircle className="text-4xl mr-1 hover:scale-110 transition-all duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className="uploadForm lg:order-1 lg:w-1/2 bg-[rgba(255,255,255,0.1)] text-gray-700 flex flex-col rounded-xl space-y-8 p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]">
//               <h2 className="text-center text-3xl font-semibold text-black">Upload Details</h2>
//               <input
//                 required
//                 className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
//                 type="text"
//                 placeholder="Enter the name"
//                 name="name"
//                 id="name"
//                 value={reportDetails.name}
//                 onChange={handleChange}
//               />
//               <input
//                 required
//                 className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
//                 type="datetime-local"
//                 placeholder="Enter the date and time"
//                 name="dateTime"
//                 id="dateTime"
//                 value={reportDetails.dateTime}
//                 onChange={handleChange}
//               />
//               <input
//                 required
//                 className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
//                 type="text"
//                 placeholder="Enter the address"
//                 name="address"
//                 id="address"
//                 value={reportDetails.address}
//                 onChange={handleChange}
//               />
//               <input
//                 required
//                 className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
//                 type="text"
//                 placeholder="Enter the area"
//                 name="area"
//                 id="area"
//                 value={reportDetails.area}
//                 onChange={handleChange}
//               />
//               <button className="btn btn-neutral" onClick={handleSubmit} >
//                 {false && (
//                   <span className="loading loading-spinner loading-md"></span>
//                 )}
//                 <span>Upload</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Uploads;


import React, { useState } from "react";
import {
  AiFillEdit,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";

const Uploads = () => {
  const [reportDetails, setReportDetails] = useState({
    name: "",
    dateTime: "",
    address: "",
    area: "",
    imageDataURL: ""
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userData, setUserData] = useState(null);

  const saveToDatabase = async (data) => {
    console.log('Saving user data to the database...');
    await fetch("http://localhost:8000/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const validateDetails = () => {
    if (
      !reportDetails.name ||
      !reportDetails.dateTime ||
      !reportDetails.address ||
      !reportDetails.area
    ) {
      toast.error("Please fill all the fields");
    } else {
      handleDataUpload();
    }
  };

  const handleDataUpload = async () => {
    console.log(reportDetails);
    const formData = new FormData();
    formData.append("name", reportDetails.name);
    formData.append("dateTime", reportDetails.dateTime);
    formData.append("address", reportDetails.address);
    formData.append("area", reportDetails.area);
    formData.append("imageDataURL", reportDetails.imageDataURL);

    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      toast.success("Image uploaded successfully!");
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  const handleFileUpload = (e) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles[0]);
    if (selectedFiles) {
      const previews = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            previews.push(e.target.result);
            if (previews.length === selectedFiles.length) {
              setImagePreviews(previews);
            }
          }
        };
        reader.onloadend = () => {
          console.log(reader.result);
          setReportDetails({ ...reportDetails, imageDataURL: reader.result });
        };
        reader.readAsDataURL(selectedFiles[i]);
      }
    }
  };

  // Navigate to the previous image with looping
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(imagePreviews.length - 1); // Wrap around to the last image
    }
  };

  // Navigate to the next image with looping
  const nextImage = () => {
    if (currentImageIndex < imagePreviews.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0); // Wrap around to the first image
    }
  };

  const handleChange = (e) => {
    setReportDetails({ ...reportDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !reportDetails.name ||
      !reportDetails.dateTime ||
      !reportDetails.address ||
      !reportDetails.area
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const data = {
      name: reportDetails.name,
      dateTime: reportDetails.dateTime,
      address: reportDetails.address,
      area: reportDetails.area,
      imageDataURL: reportDetails.imageDataURL,
    };

    setUserData(data);
    saveToDatabase(data);
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-400 min-h-screen relative pt-24 md:pt-24 pb-10 xl:pt-16 xl:pb-0 w-full flex items-center justify-center bg-cover bg-center">
        <div className="uploadContent relative z-20 w-full lg:mx-40 flex items-center justify-center space-x-8 px-2">
          <div className="uploadForm w-full bg-[rgba(255,255,255,0.1)] text-gray-700 flex flex-col lg:flex-row space-y-8 lg:space-y-0 rounded-xl p-4 md:p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]">
            <div className="images relative flex items-center justify-center lg:order-2 lg:ml-8 lg:w-1/2 rounded-xl">
              {!imagePreviews.length ? (
                <label
                  className="w-full cursor-pointer flex flex-col items-center justify-center"
                  htmlFor="uploadFile"
                >
                  <BsFillCloudUploadFill className="text-[20rem] text-[rgba(255,255,255,0.5)]" />
                  <input
                    onChange={handleFileUpload}
                    className="hidden"
                    type="file"
                    name="uploadFile"
                    id="uploadFile"
                    multiple
                  />
                  <p>Click on the above image to upload</p>
                </label>
              ) : (
                <div className="relative carousel w-full h-80 rounded-box">
                  <div className={`carousel-item w-full`}>
                    <img
                      className="w-full"
                      src={imagePreviews[currentImageIndex]}
                      alt={`Selected Image`}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="absolute w-full flex top-1/2 justify-between">
                    <button onClick={prevImage}>
                      <AiFillLeftCircle className="text-4xl ml-1 hover:scale-110 transition-all duration-300" />
                    </button>
                    <button onClick={nextImage}>
                      <AiFillRightCircle className="text-4xl mr-1 hover:scale-110 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="uploadForm lg:order-1 lg:w-1/2 bg-[rgba(255,255,255,0.1)] text-gray-700 flex flex-col rounded-xl space-y-8 p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]">
              <h2 className="text-center text-3xl font-semibold text-black">Upload Details</h2>
              <input
                required
                className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
                type="text"
                placeholder="Enter the name"
                name="name"
                id="name"
                value={reportDetails.name}
                onChange={handleChange}
              />
              <input
                required
                className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
                type="datetime-local"
                placeholder="Enter the date and time"
                name="dateTime"
                id="dateTime"
                value={reportDetails.dateTime}
                onChange={handleChange}
              />
              <input
                required
                className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
                type="text"
                placeholder="Enter the address"
                name="address"
                id="address"
                value={reportDetails.address}
                onChange={handleChange}
              />
              <input
                required
                className="outline-none placeholder:text-gray-700 bg-transparent border-b p-2 border-gray-700"
                type="text"
                placeholder="Enter the area"
                name="area"
                id="area"
                value={reportDetails.area}
                onChange={handleChange}
              />
              <button className="btn btn-neutral" onClick={handleSubmit} >
                {false && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
                <span>Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uploads;

