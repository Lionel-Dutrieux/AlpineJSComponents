import { compileTemplate } from '@stories/utils/handlebarsHelper.js';
import ProductCardTemplate from '@components/cards/product-card/productCard.html?raw';

export default {
    title: 'Components/Cards/Product Card',
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
};

export const productCard = (args) => {
    return compileTemplate(ProductCardTemplate, args);
};

productCard.args = {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Nike Air Max 270',
    size: '41',
    price: '120',
    tag: 'New',
};