
export default function ImagePicker({label,name}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <div>
                <input type='file' />
            </div>
        </div>
    )
}