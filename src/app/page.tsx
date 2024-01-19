'use client';

import { useEffect, useState } from 'react';
import Chart from '@/components/visualization/Chart';
import ProductListing from '@/components/product/ProductListing';
import Table from '@/components/visualization/Table';
import { useGetProductsQuery } from '@/lib/redux/productsApi';
import { IProduct } from '@/types/products';

const PRODUCT_ID = 'B007TIE0GQ';

const DashboardPage = () => {
    const { data: product, isLoading, isError } = useGetProductsQuery(PRODUCT_ID);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        if (product) {
            setSelectedProduct(product.data);
        }
    }, [product]);

    if (isLoading) {
        return 'Loading...';
    } else if (isError) {
        return 'Error loading products. Please try again later.';
    } else if (!selectedProduct) {
        return 'Product not found.';
    }

    return (
        <main className='dashboard'>
            <section className='listing-container'>
                <ProductListing
                    title={selectedProduct.title}
                    subtitle={selectedProduct.subtitle}
                    image={selectedProduct.image}
                    tags={selectedProduct.tags}
                />
            </section>
            <div>
                <section className='chart-container'>
                    <Chart product={selectedProduct} />
                </section>
                <section className='table-container'>
                    <Table product={selectedProduct} />
                </section>
            </div>
        </main>
    );
};

export default DashboardPage;
