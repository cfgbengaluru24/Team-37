const mongoose = require('mongoose');
const mongoURI = "mongodb://jpmc: De%40thnote01@ac-g1yqdf3-shard-00-00.br5yp6t.mongodb.net:27017,ac-g1yqdf3-shard-00-01.br5yp6t.mongodb.net:27017,ac-g1yqdf3-shard-00-02.br5yp6t.mongodb.net:27017/?ssl=true&replicaSet=atlas-2m9ku4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const mongoDB=async()=>
{
mongoose.connect(mongoURI,{useNewUrlPaser: true}, (err, result)=>{
    console.log("connected");
});
}
module.exports = mongoDB