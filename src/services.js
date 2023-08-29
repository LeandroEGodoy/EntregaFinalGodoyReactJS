const products = [
    {id: 1, name: 'Figura HP', price: 799, category: "Figuras"},
    {id: 2, name: 'Figura LK', price: 899, category: "Figuras"},
    {id: 3, name: 'Figura Poring', price: 999, category: "Figuras"},
    {id: 4, name: 'Remera Deviling', price: 1199, category: "Rropa"},
    {id: 5, name: 'Renera Angeling', price: 12799, category: "Ropa"},
    {id: 6, name: 'Remera Poring', price: 7993, category: "Ropa"},
    {id: 7, name: 'Ragnarok de Mesa', price: 598, category: "Juegos"},
    {id: 8, name: 'Ragnarok 2 Online Pass', price: 3749, category: "Juegos"},
    {id: 9, name: 'Ragnarok Online Pass', price: 4799, category: "Juegos"},
];

// getProduct
const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // buscamos el producto por id
            const product = products.find((p) => p.id === id)
            
            // si existe el producto
            if (product) {
                resolve(product);
            } else {
                reject("No Existe el producto");
            }
        }, 1000);
    });
}

// getProducts
export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           const productsFiltered = category ? products.filter(product => product.category === category)
           : products;
   
           resolve(productsFiltered);
       }, 1000)
    })
   }


