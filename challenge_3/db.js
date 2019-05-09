const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/raggad');

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let Schema = mongoose.Schema;
    
   var FaTable = new Schema({
    name: String,
    email: String,
    password: Number
   });

   var SeTable = new Schema({
    line1: String,
    line2: String,
    city : String,
    state : String,
    zipCode : number
   });

   var ThTable = new Schema({
    creditCard : number,
    expiryDate  : number,
    CVV : number,
    billingZip: number
   });
   let Repo = mongoose.model('Repo', repoSchema);
    let save = (data) => {
   
    for (let i = 0; i < data.length; i++){
      let myRepo = new Repo({id: data[i].id,})
      myRepo.save((err) => {
        if (err) return console.error(err);
      })
    }  
  }

  
   module.exports.save = save;
   module.exports.Repo = Repo;

