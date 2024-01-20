'use client';

import { useEffect, useState } from 'react';
import Chart from '@/components/visualization/Chart';
import ProductListing from '@/components/product/ProductListing';
import Table from '@/components/visualization/Table';
import { useGetProductsQuery } from '@/lib/redux/productsApi';
import { IProduct } from '@/types/products';
import styles from '@/styles/page.module.css';

const PRODUCT_ID = 'B007TIE0GQ';

const DashboardPage = () => {
    const { data: product, isLoading, isError } = useGetProductsQuery(PRODUCT_ID);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        if (product) {
            setSelectedProduct(product.data);
        }
    }, [product]);

    if (isLoading || !selectedProduct) {
        return 'Loading...';
    } else if (isError) {
        return 'Error loading products. Please try again later.';
    }

    return (
        <main className={styles.dashboard}>
            <section className={styles.listing}>
                <ProductListing
                    title={selectedProduct.title}
                    subtitle={selectedProduct.subtitle}
                    image={selectedProduct.image}
                    tags={selectedProduct.tags}
                />
            </section>
            <section className={styles.visualizations}>
                <section>
                    <Chart product={selectedProduct} />
                </section>
                <section className={styles.tableContainer}>
                    <Table product={selectedProduct} />
                </section>
            </section>
        </main>
    );
};

export default DashboardPage;
