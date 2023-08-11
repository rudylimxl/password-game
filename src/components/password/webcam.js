import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useRef
// import vision from "@google-cloud/vision";

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  //vision
  //   async function visionApi() {
  //     // Imports the Google Cloud client library
  //   const vision = require("@google-cloud/vision");

  //     // Creates a client
  //   const client = new vision.ImageAnnotatorClient();

  //     // Performs label detection on the image file
  //     const [result] = await client.labelDetection(imgSrc);
  //     const labels = result.labelAnnotations;
  //     console.log("Labels:");
  //     labels.forEach((label) => console.log(label.description));
  //   }

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    console.log(imgSrc);
    setImgSrc(null);
    // visionApi();
  };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} />
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;
