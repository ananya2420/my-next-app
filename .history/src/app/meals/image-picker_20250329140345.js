
export default function ImagePicker({label,name}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' id={name} accept="image/png, image/jpeg" name={name}/>
            </div>
        </div>
    )
}