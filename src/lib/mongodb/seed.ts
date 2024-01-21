import mongodb from '@/lib/mongodb/database';
import { promises as fs } from 'fs';
import { ProductsType } from '@/types/products';

const PRODUCTS_PATH = 'src/lib/mongodb/data/products.json';

const seedDatabase = async () => {
    await mongodb.connect();
    console.log('Seeding data...');
    const product = mongodb.db('ecommerce').collection('product');

    try {
        const productsFile = await fs.readFile(PRODUCTS_PATH, 'utf-8');
        if (!productsFile) {
            throw new Error();
        }
        const seedProducts: ProductsType = JSON.parse(productsFile);

        await product.deleteMany({});
        const insertedProducts = await product.insertMany(seedProducts);
        console.log(`${insertedProducts.insertedCount} document(s) successfully inserted.\n`);
    } catch (error: any) {
        console.error(error.stack);
    } finally {
        await mongodb.close();
    }
};

seedDatabase();
