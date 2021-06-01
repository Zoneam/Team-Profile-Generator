const Manager = require("../lib/manager.js")


describe('Test', () => {
    describe('Intern class', () => {
      // Positive test
      it("should return Name Id Email and Role", () => {
        const newManager = new Manager("Hayk","004","zoneam@gmail.com")
  
        // Assert
        expect(newManager.name).toEqual("Hayk");
      });
  
    });
  });
  