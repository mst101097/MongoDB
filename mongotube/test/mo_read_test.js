const Student = require('../app/student');
const assert = require('assert');

describe("Read tests",()=>{
    let reader;
    beforeEach(done =>{
        reader = Student({name :"reader"});
        reader.save()
        .then(() =>{
            done();
        });
    });
    it("Reader is User,Reader",done =>{
        Student.find({name : "reader"})
        .then((students) =>{
            //_id is BSON type so that convert into string TOSTRING Function
            assert(reader._id.toString() == students[0]._id.toString());
            done();
        });
    });
});


// describe("Delete Test",() =>{
//     let deleter;

//     beforeEach(() =>{
//         deleter = new Student({name : "Deleter"});
//         deleter.save().then(() => done());
//     });

//     it('Delete a test for deleter',(done) =>{
//         Student.findByIdAndDelete(deleter._id)
//         .then(() => Student.findOne({name : "Deleter"}))
//         .then((student) => {
//             assert(student == null);
//             done();
//         });

//     });

// });