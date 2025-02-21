
function Button({ onClick, icon, text, className = "", type = "" }) {
    return (
        <button onClick={onClick} type={type} className={className}>
            <span>{icon}</span> {text}
        </button>
    );
}

export default Button;
