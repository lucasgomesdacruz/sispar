
function Button({ text, className = "", type = "" }) {
    return (
        <button type={type} className={className}>
            {text}
        </button>
    );
}

export default Button;
