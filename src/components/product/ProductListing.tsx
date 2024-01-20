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
            <Image src={image} alt={`${title} image`} width={300} height={300} priority />
            <header className={styles.header}>
                <h1 className={styles.h1}>{title}</h1>
                <h3 className={styles.h3}>{subtitle}</h3>
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
