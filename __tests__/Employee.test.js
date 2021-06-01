const Employee = require("../lib/employee.js")


describe('Test', () => {
    describe('Employee class', () => {
      // Positive test
      it("should return Name Id Email and Role", () => {
        const newEmployee = new Employee("Hayk","004","zoneam@gmail.com")
  
        // Assert
        expect(newEmployee.getName()).toEqual("Hayk");
        expect(newEmployee.getId()).toEqual("004");
        expect(newEmployee.getEmail()).toEqual("zoneam@gmail.com");
        expect(newEmployee.getRole()).toEqual("Employee");
      });
  
    });
  });
  

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employ