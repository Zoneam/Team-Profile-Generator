const Engineer = require("../lib/engineer.js");



describe('Test', () => {
    describe('Engineer class', () => {
      // Positive test
      it("should return Name Id Email and Role", () => {
        const newEngineer = new Engineer("Hayk","004","zoneam@gmail.com")
  
        // Assert
        expect(newEngineer.name).toEqual("Hayk");
      });
  
    });
  });
  