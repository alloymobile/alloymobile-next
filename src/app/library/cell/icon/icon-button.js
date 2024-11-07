import Icon from "./icon";

export default function IconButton(props)
{
    return (
        <button className={props.iconButton.className}>
            <Icon icon={{iconName: props.iconButton.iconName}} />
            {props.iconButton.text}
        </button>
    )
}