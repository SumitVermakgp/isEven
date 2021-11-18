const { expect } = require("chai")
const { isEven } = require("./index");

describe('isEven' , () => {
    
    it('should return true if number is even', function() {
        expect(isEven(4)).to.equal(true);
        expect(isEven(14)).to.equal(true);
        expect(isEven(268)).to.equal(true);
    });

    it('should return false if number is not even', function() {
        expect(isEven(3)).to.equal(false);
        expect(isEven(29)).to.equal(false);
        expect(isEven(513)).to.equal(false);
    });

})