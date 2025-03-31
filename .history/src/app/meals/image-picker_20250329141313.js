'use client';

import { useRef } from "react";

export default function ImagePicker({label,name}){

    useRef
    function handlePickClick(){

    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' id={name} accept="image/png, image/jpeg" name={name}/>
                <button onClick={handlePickClick}>pick an Image</button>
            </div>
        </div>
    )
}