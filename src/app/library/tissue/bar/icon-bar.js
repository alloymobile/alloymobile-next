import AlloyIcon from "../../cell/icon/icon";


export default function AlloyIconBar(props)
{
    return (
        <div className={props.iconBar.className}>
            {props.iconBar.icons.map((icon, index) => (
                <AlloyIcon key={index} icon={icon} />
            ))}
        </div>
    )
}
