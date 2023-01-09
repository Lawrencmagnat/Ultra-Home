const { response } = require("express");
const express = require("express");
const { Server } = require("http");

const server = express();

server.use(express.urlencoded({ extended:false }));
server.use(express.json());

const userDetail = {}
const port = 8080;

const items = [
    {
    name: "Fully detached duplex(Evernest Estate)",
    price: 7500000,
    currency: "NGN",
    location:"Lagos, Nigeria",
    description:"8 bedrooms, 9 bathrooms, 1700sqft  ",
    available:"Rented",
    Id: 1
},
{
    name: "Semi-detached duplex(Pinecrest Estate)",
    price: 2300000,
    currency: "NGN",
    location:"Lagos, Nigeria",
    description:"6 bedrooms, 7 bathrooms, 1000sqft",
    available:"Yes",
    Id: 2
},
{
  name: "Bungalow(Pinecrest Estate)",
  price: 1500000,
  currency: "NGN",
  location:"Lagos, Nigeria",
  description:"4 bedrooms, 5 bathroom, 900sqft",
  available:"Yes",
  Id: 3
},
{
  name: "Unique 5 bedroom duplex(Evermark Estate))",
  price: 3000000,
  currency: "NGN",
  location:"Lagos, Nigeria",
  description:"4 bedrooms, 5 bathrooms, 900sqft",
  available:"Yes",
  Id: 4
},
{
  name: "Fully detached duplex(Luxuna Estate)",
  price: 8000000,
  currency: "NGN",
  location:"Abuja, Nigeria",
  description:"4 Bedrooms, 5 Bathrooms, 900sqft",
  available:"yes",
  Id: 5
},
{
  name: "Bungalow(Riseonic Estate)",
  price: 1200000,
  currency: "NGN",
  location:"Enugu, Nigeria",
  description:"4 Bedrooms, 5Bathrooms, 900sqft",
  available:"Rented",
  Id: 6
},
{
    name: "Semi-detached duplex(Primdale Estate)",
    price: 2000000,
    currency: "NGN",
    location:"Asaba, Nigeria",
    description:"4 Bedrooms, 5 Bathrooms, 900sqft",
    available:"Yes",
    Id: 7
},
{
    name: "Fully detached duplex(Urban Estate)",
    price: 4200000,
    currency: "NGN",
    location:"Abia, Nigeria",
    description:"4 Bedroom, 5 Bathrooms, 900sqft",
    available:"Yes",
    Id: 8
}
]

//Creating a get endpoint for the homepage("/")
server.get("/", function(req,res) {
  res.send("Hello, Welcome to Ultra Homes");  
})

//Creating a post endpoint that accepts data from the client 
server.post('/create-account', function(req,res){
       const {firstName, lastName, email, password, confirmPassword} = req.body;

       if(!firstName || !lastName || !email || !password || !confirmPassword){
        res.status(400).send({
            message: "Please provide all required informaton"
        })
       }else{
        const registeredUser = {
          firstName,
          lastName,
          email,
          password,
          confirmPassword
        }
        
        res.status(200).send({
            message: 'User registered successfully',
            user:registeredUser
        })
       }

});

server.post('/Input Personal Details', function(req,res){
  const {firstName, lastName, email, telephone, feature, homedetails} = req.body;

  if(!firstName || !lastName || !email || !telephone || !feature || !homedetails){
   res.status(400).send({
       message: "Please provide all required informaton"
   })
  }else{
   const registeredUser = {
     firstName,
     lastName,
     email,
     telephone,
     feature,
     homedetails
   }
   
   res.status(200).send({
       message: 'Details saved successfully',
       user:registeredUser
   })
  }

});


server.post('/login-page', function(req,res){
       const{email, password} = req.body;
       if (email === 'admin' && password ==='admin'){
           const token = '123456';
           res.json({
               success: true,
               token,
           });
       }else{
         res.status(401).json({
             success: false,
             message: 'Username or password is incorrect'
         });
       }

});

server.post('/contact-us', function(req,res){
       const{name, email, phonenumber, message} = req.body;

       if (!name || !email || !phonenumber || !message){
           return res.status(200).send({
              success: false,
              message: 'Please provide all the fields'
           })
       }
       return res.status(200).send({
          success: true,
          message: "Your message is sent successfully"
       });
});


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
server.get("/getitems", (req, res) => {
  return res.json(getItems())
});


//create a post endpoint for accepting form data and add it to the shopping list
server.post("/add-item", function(req, res) {
    res.json('');
});

//create a get endpoint for display of a single item's name and price
server.get("/items/:id", (req, res) => {
  const id = req.params.id

  return res.json(findItem(id))
});

server.listen(process.env.port || port, function() {

      console.log('Server listening at port ${port}');
})
