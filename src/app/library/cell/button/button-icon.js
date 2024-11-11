import AlloyIcon from "../icon/icon";

export default function AlloyButtonIcon(props)
{
    const handleClick = () => {
        props.onClick(props.buttonIcon.name);
    };
    return (
        <button
        className={`${props.buttonIcon.className} ${props.buttonIcon.active}`}
        type={props.buttonIcon.type}
        onClick={handleClick}
    >
        <AlloyIcon icon={props.buttonIcon.icon} />
        <span className="px-2">{props.buttonIcon.name}</span>
    </button>
    )
}