import Image from 'next/image';
import styles from './AddButton.module.sass';
import icons from '@/public/icons';
import Link from 'next/link';
import { FC } from 'react';

interface AddButtonProps {
    href: string;
}

const AddButton: FC<AddButtonProps> = ({ href }) => {
    return (
        <Link href={href} className={styles.root}>
            <Image src={icons.plus} alt="plus" />
        </Link>
    )
}

export default AddButton