import React, { useEffect, useRef } from 'react';

function Camera() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Get access to the webcam
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = {
                video: true
            };

            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error("Error accessing the webcam: ", err);
            });
        }
    }, []);

    return <video ref={videoRef} />;
}

export default Camera;
