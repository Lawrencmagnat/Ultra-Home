<<<<<<< HEAD
const { response } = require("express");
const express = require("express");
const { Server } = require("http");

const server = express();

server.use(express.urlencoded({ extended:false }));
server.use(express.json());

const user = {
    firstname: "",
    lastname: "",
    gender: "",
};

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

//Creating a get endpoint for the homepage("/")
server.get("/", function(req,res) {
  res.send("Hello, Welcome to Ultra Home");  
})

//Creating a post endpoint that accepts data from the client 
server.post("/create-account", function(req, res) {
  console.log("Query", req.query);
  console.log("Body", req.body)
  
  res.json(req.query);
})
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

//create a get endpont for getting list of houses available
server.get("/items", (req, res) => {
  return res.json(getItems())
});

//creating an account for the user 
server.post("/create-account", function(req, res){
    response.json(resquest.body);
})


//create a post endpoint for accepting form data and add it to the shopping list
server.post("/add-item", function(req, res) {
    res.json('');
});

//create a get endpoint for display of a single item's name and price
server.get("/items/:id", (req, res) => {
  const id = req.params.id

  return res.json(findItem(id))
});

server.listen(8080, () => {
  console.log("Server is running...");
=======
const { response } = require("express");
const express = require("express");
const { Server } = require("http");

const server = express();

server.use(express.urlencoded({ extended:false }));
server.use(express.json());

const user = {
    firstname: "",
    lastname: "",
    gender: "",
};

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

//Creating a get endpoint for the homepage("/")
server.get("/", function(req,res) {
  res.send("Hello, Welcome to Ultra Home");  
})

//Creating a post endpoint that accepts data from the client 
server.post("/create-account", function(req, res) {
  console.log("Query", req.query);
  console.log("Body", req.body)
  
  res.json(req.query);
})
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

//create a get endpont for getting list of houses available
server.get("/items", (req, res) => {
  return res.json(getItems())
});

//creating an account for the user 
server.post("/create-account", function(req, res){
    response.json(resquest.body);
})


//create a post endpoint for accepting form data and add it to the shopping list
server.post("/add-item", function(req, res) {
    res.json('');
});

//create a get endpoint for display of a single item's name and price
server.get("/items/:id", (req, res) => {
  const id = req.params.id

  return res.json(findItem(id))
});

server.listen(8080, () => {
  console.log("Server is running...");
>>>>>>> b6aaffd7700c161a60dfd03e86a109a00a2770ec
});