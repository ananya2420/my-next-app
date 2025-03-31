'use client';

import { useRef, useState } from "react";

export default function ImagePicker({label,name}){


    const [pickedImage,setPickedImage] = useState();
    const imageInput = useRef();
    function handlePickClick(){
        imageInput.current.click();

    }

    function handleImageChange(){
        
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' id={name} accept="image/png, image/jpeg" name={name} ref={imageInput}/>
                <button onClick={handlePickClick}>pick an Image</button>
            </div>
        </div>
    )
}