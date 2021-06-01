const Intern = require("../lib/intern.js")



describe('Test', () => {
    describe('Intern class', () => {
      // Positive test
      it("should return Name Id Email and Role", () => {
        const newIntern = new Intern("Hayk","004","zoneam@gmail.com")
  
        // Assert
        expect(newIntern.name).toEqual("Hayk");
      });
  
    });
  });
  