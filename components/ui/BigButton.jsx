const BigButton = ({children, className}) => {
    return (
        <button className={className + ' text-lg text-white transition-all m-4 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg hover:shadow-2xl hover:shadow-purple-500/50'}>{children}</button>
    )
}

export default BigButton;