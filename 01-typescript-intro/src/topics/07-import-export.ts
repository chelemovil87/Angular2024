import { Product, taxCalculation,  } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100.0
    },
    {
        description: "Ipad",
        price: 150.0
    }
];

const [total, taxTotal] = taxCalculation({
    product: shoppingCart,
    tax: 0.15
});

    console.log('Total:', total);
    console.log('Tax:', taxTotal);
