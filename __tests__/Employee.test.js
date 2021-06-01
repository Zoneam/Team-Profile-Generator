const Employee = require("../lib/employee.js")


describe('Test', () => {
    describe('Employee class', () => {
      // Positive test
      it("should return Name Id Email and Role", () => {
        const newEmployee = new Employee("Hayk","004","zoneam@gmail.com")
  
        // Assert
        expect(newEmployee.name).toEqual("Hayk");
      });
  
    });
  });
  