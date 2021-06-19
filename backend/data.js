var bcrypt = require('bcryptjs');

const data = {

    users: [
        {
            name: 'Prasan',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Prasan',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],

    products: [
        {
            name: "Nike SLim Shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 12,
            description: "high quality product"
        },
        {
            name: "Adidas SLim Shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 12,
            description: "high quality product"
        },
        {
            name: "Puma SLim Pant",
            category: 'Pant',
            image: '/images/p1.jpg',
            price: 180,
            countInStock: 0,
            brand: 'Puma',
            rating: 4,
            numReviews: 8,
            description: "high quality product"
        },
        {
            name: "Connor Sweat shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            name: "New Puma Shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            name: "JD Hi5 Shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        }
    ]
}

module.exports = data;