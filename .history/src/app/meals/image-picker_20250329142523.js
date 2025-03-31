'use client';

import { useRef } from "react";

export default function ImagePicker({label,name}){


    
    const imageInput = useRef();
    function handlePickClick(){
        imageInput.current.click();

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