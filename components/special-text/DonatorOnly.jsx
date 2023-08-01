const DonatorOnly = ({ children}) => {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-100 to-fuchsia-500">{children}</span>
    )
}

export default DonatorOnly;