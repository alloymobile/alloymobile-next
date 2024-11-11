

export default function AlloyButton(props){
    const handleClick = () => {
        props.onClick(props.button.name);
    };
    return(
        <button
            className={`${props.button.className} ${props.button.active}`}
            type={props.button.type}
            onClick={handleClick}
        >
            <span className="px-2">{props.button.name}</span>
        </button>
    )
}