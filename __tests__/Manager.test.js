const Manager = require("../lib/manager.js")



describe('Test', () => {
  describe('Intern class', () => {
    // Positive test
    it("should return Name Id Email Role and Office Number", () => {
      const newManager = new Manager("Hayk","001","manager@gmail.com","256")

      // Assert
      expect(newManager.getName()).toEqual("Hayk");
      expect(newManager.getId()).toEqual("001");
      expect(newManager.getEmail()).toEqual("manager@gmail.com");
      expect(newManager.getRole()).toEqual("Manager");
      expect(newManager.officeNumber).toEqual("256");
    });

  });
});
