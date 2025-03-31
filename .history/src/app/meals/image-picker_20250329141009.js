
export default function ImagePicker({label,name}){

    function handle
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' id={name} accept="image/png, image/jpeg" name={name}/>
                <button>pick an Image</button>
            </div>
        </div>
    )
}