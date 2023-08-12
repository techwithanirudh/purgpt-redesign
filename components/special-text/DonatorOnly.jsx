const DonatorOnly = ({ children}) => {
    return (
        <span className="text-transparent w-full text-left font-bold bg-clip-text bg-gradient-to-r from-fuchsia-200 via-fuchsia-500 to-fuchsia-200">{children}</span>
    )
}

export default DonatorOnly;