import AlloyIcon from "../icon/icon";

export default function AlloyButtonIcon(props)
{
    return (
        <button className={props.buttonIcon.className}>
            <AlloyIcon icon={{iconName: props.buttonIcon.iconName}} />
            {props.buttonIcon.text}
        </button>
    )
}