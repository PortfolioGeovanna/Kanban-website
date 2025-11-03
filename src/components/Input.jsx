export default function Input ({ placeholder, label, type }){
    return (
        <div className="flex flex-col w-fi py-3">
            <label>{label}</label>
            <input 
                className="bg-white p-2 rounded-md shadow-md w-fit"
                type={type} 
                placeholder={placeholder} 
            />
        </div>
    )
}