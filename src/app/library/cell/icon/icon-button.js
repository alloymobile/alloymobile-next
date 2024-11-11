import AlloyIcon from "./icon";


export default function AlloyIconButton(props)
{
    return (
        <button className={props.iconButton.className}>
            <AlloyIcon icon={{iconName: props.iconButton.iconName}} />
        </button>
    )
}