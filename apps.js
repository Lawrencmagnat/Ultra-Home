const express = require("express");

const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const items = [
    {
    name: "yogurt",
    price: 7500000,
    currency: "NGN",
    location:"Lagos, Nigeria",
    description:"8 bedrooms, 9 bathrooms, 1700sqft  ",
    available:"Yes",
    Id: 1
},
{
    name: "banana",
    price: 2300000,
    currency: "NGN",
    location:"Lagos, Nigeria",
    description:"6 bedrooms, 7 bathrooms, 1000sqft",
    available:"Yes",
    Id: 2
},
{
  name: "grape",
  price: 1500000,
  currency: "NGN",
  location:"Lagos, Nigeria",
  description:"4 bedrooms, 5 bathroom, 900sqft",
  available:"Yes",
  Id: 3
},
{
  name: "apple",
  price: 1200000,
  currency: "NGN",
  location:"Lagos, Nigeria",
  description:"4 bedrooms, 5 bathrooms, 900sqft",
  available:"Yes",
  Id: 4
},
{
  name: "orange",
  price: 25,
  currency: "USD",
  location:"",
  description:"",
  available:"",
  Id: 5
},
{
  name: "pineapple",
  price: 10,
  currency: "NGN",
  location:"",
  description:"",
  available:"",
  Id: 6
},
{
    name: "pineapple",
    price: 10,
    currency: "NGN",
    location:"",
    description:"",
    available:"",
    Id: 7
},
{
    name: "pineapple",
    price: 10,
    currency: "NGN",
    location:"",
    description:"",
    available:"",
    Id: 8
},
{
    name: "pineapple",
    price: 10,
    currency: "NGN",
    location:"",
    description:"",
    available:"",
    Id: 9
},
{
    name: "pineapple",
    price: 10,
    currency: "NGN",
    location:"",
    description:"",
    available:"",
    Id: 10
}
]

// GET/items
function getItems() {
  return {
    statusCode: 200,
    message: 'Items returned successfully',
    data: items
  }
}

// POST/add-items
function addItem(item) {
 // Process 

 const id = Math.floor(Math.random() * 100000)

 item.id = id 
 
 items.push(item)

 return {
    statusCode: 201,
    message: 'item created successfully',
    data: {
        id: {}
    }
 }
}

//GET/items/:id
function findItem(id) {

  const item = items.find((item) => item.Id = id)

  if (item) {
    return {
        statausCode: 200,
        message: 'Items found successfully',
        data: item
    }
  }else{
    return {
        statusCode: 404,
        message: 'Item not found',
        data: {}
    }
  }
}

//create a get endpont for getting list of houses av 
app.get("/items", (req, res) => {
  return res.json(getItems())
});

//create a post endpoint for accepting form data and add it to the shopping list
app.post("/add-item", function(req, res) {
    res.json('');
});

//create a get endpoint for display of a single item's name and price
app.get("/items/:id", function(req, res) {
  const id = req.params.id

  return res.json(findItem(id))
});

app.listen(8080, function() {
  console.log('Server is running...');
});