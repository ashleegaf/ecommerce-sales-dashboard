'use client';

import Image from 'next/image';
import styles from '@/styles/components.module.css';

interface IProductListing {
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
}

const ProductListing: React.FC<IProductListing> = ({ title, subtitle, image, tags }) => {
    return (
        <>
            <Image src={image} alt={`${title} image`} width={200} height={200} priority />
            <header className={styles.header}>
                <h3>{title}</h3>
                <h5 className={styles.h5}>{subtitle}</h5>
            </header>
            <div className={styles.tagContainer}>
                {tags.map((tag) => (
                    <div className={styles.tag} key={tag}>
                        {tag}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductListing;
