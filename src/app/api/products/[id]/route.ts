import mongodb from '@/lib/mongodb/database';
import { IProduct } from '@/types/products';

interface IParams {
    params: { id: string };
}

export async function GET(request: Request, { params }: IParams) {
    const connectedDb = await mongodb.connect();
    try {
        const products = connectedDb.db('ecommerce').collection<IProduct>('product');
        const selectedProduct = await products.findOne({ productId: params.id });
        return Response.json({ data: selectedProduct }, { status: 201 });
    } catch (error) {
        return new Response(`Error retrieving products.`, {
            status: 404,
        });
    } finally {
        await connectedDb.close();
    }
}
