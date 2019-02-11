import CommonsModule from "./modules/commons";
import ProductModule from "./modules/products";

export const ROUTES_NAME = {
    BASE: '/',
    PRODUCTS: '/products'
};

export const ROUTES = [
    { prefix: ROUTES_NAME.BASE, target: CommonsModule.Routes},
    { prefix: ROUTES_NAME.PRODUCTS, target: ProductModule.Routes},
];


