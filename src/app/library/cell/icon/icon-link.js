import Link from 'next/link';
import Icon from './icon';

export default function IconLink(props)
{
    return (
        <Link href={props.iconLink.link}>
            <Icon icon={{iconName: props.iconLink.iconName}} />
            {props.iconLink.text}
        </Link>
    )
}