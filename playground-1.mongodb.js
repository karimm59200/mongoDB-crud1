//use('hopital');
//db.createCollection("patient");

// db.patient.insertMany([{
//     firstName:"Mohamed",
//      lastName:"Deloin",
//      age:30, history :[{
//         desease:"rhume",treatment:"sirop"},
//         {desease:"grippe", treatment:"anti-biotique"}]
    
// }, {
//     firstName:"Steeve",
//      lastName:"Madeen",
//      age:35, history :[{
//         desease:"constipation",treatment:"suppositoire"},
//         {desease:"grippe", treatment:"anti-biotique"}]
    
// }, {
//     firstName:"Alain",
//      lastName:"Deloin",
//      age:30, history :[{
//         desease:"Sarcoidose",treatment:"ibuprofene"},
//         {desease:"grippe", treatment:"anti-biotique"}]
    
// }]);


// db.books.updateOne({_id: 55}, {$set: {title: "Object Oriented Cassandre"}});

//db.patient.updateOne({firstName:"Mohamed"},{$set:{age: 25, firstName: "Alex", desease:"diarhée"}});

//db.patient.find({age:{$gt: 29}}).pretty();

//db.patient.deleteMany({desease:"rhume"});

//db.patient.findOne({firstName:"Mohamed"});

use('exercice2');

//***************créer un élement*************

//db.users.insertOne({name :"Chuck Norris", age: 77, hobbies :["karate", "kung-fu","ruling the world"]});

//**************Lecture d'un élément **************/

//db.users.find({name:"Chuck Norris"});

//db.users.find({age:{$gte: 30 , $lte:40}});

//db.users.find({"address.state":"Louisiana"});

//db.users.find().limit(20);

//db.users.find({gender:"female", age:30}).count(); 63 femmes

//**************/ modifier ou supprimer un élément \********************

//db.users.updateMany({},{$unset :{phone:""}});

//db.users.updateOne({name:"Chuck Norris"}, {$set :{ age:"infinity"}});

//db.users.updateMany({age:{$gte:50}},{$push:{hobbies:"jardinage"}});





