export default function Input({ name, placeholder, isPassword=false }: { name: string, placeholder: string, isPassword?: boolean}) {
    return (
        <input name={name} type={isPassword ? "password" : "text"} className="w-full p-[15px] rounded-xl shadow-md text-gray-800 border-2 outline-gray-500 smoothe" placeholder={placeholder} />
    )
}