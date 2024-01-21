import { type ObjectId } from "mongodb";

export interface IReview {
    customer: string;
    review: string;
    score: number;
}

export interface ISale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface IProduct {
    _id: ObjectId;
    productId: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: IReview[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: ISale[];
}

export type ProductsType = IProduct[];
