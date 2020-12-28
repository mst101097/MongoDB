const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mongotube", {useNewUrlParser: true,useUnifiedTopology : true});
before((done) => {
mongoose.connection
        .once('open',()=> {
            // console.log('Connected')
            done();
        })
        .on("error",error=> {
            console.log("your error",error);
        });

});

beforeEach((done) =>{
    mongoose.connection.collections.students.drop(() => {
        // console.log("student Database drop successfully ");
        done();
    });

});