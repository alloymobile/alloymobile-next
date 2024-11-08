import Link from 'next/link';
import Icon from './icon';

export default function IconLink(props)
{
    return (
        <Link href={props.iconLink.link} className={props.iconLink.className}>
            <Icon icon={props.iconLink.icon} />
            {props.iconLink.text}
        </Link>
    )
}