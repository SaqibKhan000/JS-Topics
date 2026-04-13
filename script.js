


    const cart = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Cap", price: 300 }
    ];

    const total = cart.reduce((acc, item) => {
    return acc + item.price;
    }, 0);

    console.log(total);