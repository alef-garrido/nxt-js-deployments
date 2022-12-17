import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

// styling object declaration
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

// typescript definition
interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
    );
};



