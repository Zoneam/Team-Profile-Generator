const Intern = require("../lib/intern.js")



describe('Test', () => {
  describe('Intern class', () => {
    // Positive test
    it("should return Name Id Email Role and School", () => {
      const newIntern = new Intern("Hayk","003","engineer@gmail.com","UC Davis")

      // Assert
      expect(newIntern.getName()).toEqual("Hayk");
      expect(newIntern.getId()).toEqual("003");
      expect(newIntern.getEmail()).toEqual("engineer@gmail.com");
      expect(newIntern.getRole()).toEqual("Intern");
      expect(newIntern.getSchool()).toEqual("UC Davis");
    });

  });
});
