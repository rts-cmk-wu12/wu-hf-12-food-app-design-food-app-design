import { generateProductCard } from "./modules/index-main.js";

const products = [
    {
        image_source: 'https://picsum.photos/seed/picsum/120/120',
        heading: 'Cheeseburger',
        description: "Wendy's Burger",
        rating: 4.9
    },
    {
        image_source: 'https://picsum.photos/seed/picsum/120/120',
        heading: 'Hamburger',
        description: "Veggie Burger",
        rating: 4.8
    },
    {
        image_source: 'https://picsum.photos/seed/picsum/120/120',
        heading: 'Hamburger',
        description: "Chicken Burger",
        rating: 4.6
    },
    {
        image_source: 'https://picsum.photos/seed/picsum/120/120',
        heading: 'Hamburger',
        description: "Fried Chicken Burger",
        rating: 4.5
    }
];

generateProductCard(products);
