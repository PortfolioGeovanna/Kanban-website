export default function Card ({children}) {
    return (
        <div className="bg-[var(--pink-light)] py-2 px-4 rounded-md w-fit h-fit flex ">
            {children}
        </div>
    )
}