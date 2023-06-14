let product = {

    id: 'p101',
    name: "iphone 13",
    price: 50000,
    color: ['black', 'white', 'gold'],
    discount: false,
    availability: 'yes'

}

for ( prop in product) {

    console.log(product[prop])
}