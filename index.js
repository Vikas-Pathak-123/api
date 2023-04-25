import express from "express";
const app = express();
const data=[
    {
      "id": 1,
      "title": "Dermive Oil Free Moisturizer 50ml",
      "description": "Oil-free moisturizer with SPF 20 and ceramides",
      "price": 30,
      "discountPercentage": 10,
      "rating": 4.3,
      "stock": 20,
      "brand": "Dermive"
    },
    {
      "id": 2,
      "title": "Neutrogena Oil-Free Moisturizer",
      "description": "Non-greasy, oil-free moisturizer with SPF 15",
      "price": 25,
      "discountPercentage": 5,
      "rating": 4.1,
      "stock": 50,
      "brand": "Neutrogena"
    },
    {
      "id": 3,
      "title": "Cetaphil Oil Control Moisturizer",
      "description": "Moisturizer for oily skin with SPF 30",
      "price": 35,
      "discountPercentage": 12,
      "rating": 4.4,
      "stock": 15,
      "brand": "Cetaphil"
    },
    {
      "id": 4,
      "title": "La Roche-Posay Effaclar Mat",
      "description": "Matifying moisturizer with SPF 30",
      "price": 40,
      "discountPercentage": 8,
      "rating": 4.6,
      "stock": 30,
      "brand": "La Roche-Posay"
    },
    {
      "id": 5,
      "title": "Aveeno Positively Radiant Moisturizer",
      "description": "Moisturizer with SPF 30 and soy complex",
      "price": 22,
      "discountPercentage": 15,
      "rating": 4.2,
      "stock": 10,
      "brand": "Aveeno"
    },
    {
      "id": 6,
      "title": "Kiehl's Ultra Facial Oil-Free Gel Cream",
      "description": "Oil-free moisturizer with glacial glycoprotein",
      "price": 50,
      "discountPercentage": 0,
      "rating": 4.8,
      "stock": 5,
      "brand": "Kiehl's"
    },
    {
      "id": 7,
      "title": "The Body Shop Tea Tree Mattifying Lotion",
      "description": "Mattifying lotion with tea tree oil",
      "price": 18,
      "discountPercentage": 20,
      "rating": 4.0,
      "stock": 25,
      "brand": "The Body Shop"
    },
    {
      "id": 8,
      "title": "Clinique Dramatically Different Moisturizing Gel",
      "description": "Oil-free moisturizing gel",
      "price": 27,
      "discountPercentage": 7,
      "rating": 4.5,
      "stock": 40,
      "brand": "Clinique"
    },
    {
      "id": 9,
      "title": "Bioderma Sebium Mat Control",
      "description": "Mattifying moisturizer for combination to oily skin",
      "price": 33,
      "discountPercentage": 10,
      "rating": 4.7,
      "stock": 12,
      "brand": "Bioderma"
    },
]

// set up a route for the home page
app.get('/', (req, res) => {
    res.json(data)
});

// start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
