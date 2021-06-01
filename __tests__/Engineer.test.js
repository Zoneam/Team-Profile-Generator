const Engineer = require("../lib/engineer.js");



describe('Test', () => {
  describe('Engineer class', () => {
    // Positive test
    it("should return Name Id Email Role and GitHub", () => {
      const newEngineer = new Engineer("Hayk","007","engineer@gmail.com","engineer")

      // Assert
      expect(newEngineer.getName()).toEqual("Hayk");
      expect(newEngineer.getId()).toEqual("007");
      expect(newEngineer.getEmail()).toEqual("engineer@gmail.com");
      expect(newEngineer.getRole()).toEqual("Engineer");
      expect(newEngineer.getGitHub()).toEqual("engineer");
    });

  });
});
