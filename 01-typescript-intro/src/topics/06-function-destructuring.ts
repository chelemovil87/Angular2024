export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    product: Product[];
}

//! Los comentados es la implementacion de la funcion sin destructuring
// function taxCalculation(options: TaxCalculationOptions):[number,number]{
   export function taxCalculation(options: TaxCalculationOptions):[number,number]{
        
        const {tax, product} = options;
        let total = 0;
        
        product.forEach(({price}) => {
    //  product.forEach( product => {
    //  options.product.forEach(({price}) => {
        
        total += price;
    //  total += product.price;
    });
    return [total, total * tax];
    // return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


//! Los comentados es la implementacion de la funcion sin destructuring
const [total, taxTotal] = taxCalculation({
// const result = taxCalculation({
    product: shoppingCart,
    tax: tax, 
});

console.log('Total:', total);
// console.log('Total:', result [0]);
console.log('Tax:', taxTotal);
// console.log('Tax:', result[1];















export{};