const Student = require('../app/student');
const assert = require('assert');

describe("Delete Test",() =>{
    let deleter;

    beforeEach(() =>{
        deleter = new Student({name : "Deleter"});
        deleter.save().then(() => done());
    });

    it('Delete a test for deleter',(done) =>{
        Student.findByIdAndDelete(deleter._id)
        .then(() => Student.findOne({name : "Deleter"}))
        .then((student) => {
            assert(student == null);
            done();
        });

    });

});