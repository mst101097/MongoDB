const Student = require('../app/student');
const assert = require('assert');

describe('Create records',() => {
    it('create user in DB',() => {
        // assert(true);
        // assert(false);
        const sam = new Student({name : "sam"});
        sam
            .save()
            .then(() =>{
                assert(!sam.isNew);
            })
            .catch(() =>{
                console.log("error");
            });

    });

});


// describe("Read tests",()=>{
//     let Reader;
//     beforeEach((done) =>{
//         reader = Student({name :"Reader"})
//         reader.save()
//         .then(() =>{
//             done();
//         });
//     });
//     it("Reader is User,Reader",(done) =>{
//         Student.find({name : "Reader"})
//         .then((students) =>{
//             //_id is BSON type so that convert into string TOSTRING Function
//             assert(reader._id.toString() == students[0]._id.toString());
//             done();
//         });
//     });
// });