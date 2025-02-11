import React, { useEffect, useRef, useState } from 'react';
import VIDEO from "./Video.mp4";

const RefExample = () => {
    const eleRef = useRef();
    const videoRef = useRef();
    const [play, setPlay] = useState(false);

    console.log(videoRef);

    useEffect(() => {
            if (eleRef.current) {
            eleRef.current.style.color = "teal";
            eleRef.current.innerText = "React Ref";
        }
    }, []); 

    let playORpause = () => {
        if (play) {
            videoRef.current?.pause(); 
            console.log(play);
            setPlay(false);
        } else {
            videoRef.current?.play();
            console.log(play);
            setPlay(true);
        }
    };

    return (
        <div>
            <h1 ref={eleRef}>Refexample</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
        </div>
    );
};

export default RefExample;
