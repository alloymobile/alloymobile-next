import Icon from "../icon/icon";

export default function AlloyButtonIcon(props)
{
    return (
        <button className={props.buttonIcon.className}>
            <Icon icon={{iconName: props.buttonIcon.iconName}} />
            {props.buttonIcon.text}
        </button>
    )
}