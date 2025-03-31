
export default function ImagePicker({label,name}){

    function handlePickClick(){

    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' id={name} accept="image/png, image/jpeg" name={name}/>
                <button onClick={handlePick}>pick an Image</button>
            </div>
        </div>
    )
}