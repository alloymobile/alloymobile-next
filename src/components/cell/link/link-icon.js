import React from 'react';
import Link from 'next/link';
import AlloyIcon from '../icon/icon';

export default function AlloyLinkIcon(props)
{
    return (
        <Link href={props.linkIcon.href} className={`${props.linkIcon.className} ${props.linkIcon.active}`}>
            <AlloyIcon icon={props.linkIcon.icon} />
            <span className="px-2">{props.linkIcon.name}</span>
        </Link>
    )
}