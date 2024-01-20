import { promises as fs } from 'fs';
import { ProductsType } from '@/types/products';

interface IParams {
    params: { id: string };
}

const PRODUCTS_LOCATION = 'src/server/data/products.json';

export async function GET(request: Request, { params }: IParams) {
    try {
        const file = await fs.readFile(PRODUCTS_LOCATION, 'utf-8');
        if (!file) {
            throw new Error();
        }
        const data: ProductsType = JSON.parse(file);
        const selectedProduct = data.find((product) => product.id === params.id);
        return Response.json({ data: selectedProduct }, { status: 201 });
    } catch (error) {
        return new Response(`Error retrieving products.`, {
            status: 404,
        });
    }
}
