const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true } );

// Creating a Schema for our db
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String

});

// Declaring the model 
const Fruit = mongoose.model('Fruit', fruitSchema  );

//Creating objects into our db

const orange = new Fruit({
    name: 'orange',
    score: 10,
    review: 'Great fruit'
});

const apple = new Fruit({
    name: 'apple',
    score: 8,
    review: 'fruit'
});

const banana = new Fruit({
    name: 'banana',
    score: 6,
    review: 'Rruit'
});

// fruit.save();    To insert a single item into our database



// Insert multiple items into our database
// Fruit.insertMany([orange, apple,banana], (err)=>{
//     if(err){
//         console.log('Error');
//     } else {
//    console.log('OK db');
//     }
// });


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    level: Number,
    Department: String

});


const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'Dammy',
    age: 23,
    level: 300,
    Department: 'Computer Science'
});

// person.save();


//Getting data from our array db

Fruit.find((err, fruits)=>{
    if(err){
        console.log(err);
    }else{

        // console.log(fruits);
        fruits.forEach(element => {
            console.log(element.name);
        });
    }
})