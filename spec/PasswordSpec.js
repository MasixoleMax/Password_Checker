let test = new PasswordChecker();

  describe("validates if password is valid", function (){
    it ("should have more than 8 charcters", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
 });

    it ("should not be null", function () {
    expect(test.password_is_valid("")).toBe(false)
  });

    it ("should have atleast one lowecharcter", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });

    it ("should have atleast one UPPERCHARCTER", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });

    it ("should have at least one digit", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });
});

  describe("Password should take at least 3 conditions. It is mandatory for the password not be null, but to have at least 8 characters", function (){
    it ("should not be null, have at least 8 characters, and is all digits", function () {
    expect(test.password_is_ok("123456789")).toBe(true)
  });

    it ("should not be null, have 8 characters, and is all lowercase characters", function () {
    expect(test.password_is_ok("masixolee")).toBe(true)
  });

    it ("should not be null, have 8 characters, and is all uppercase characters", function () {
    expect(test.password_is_ok("MASIXOLEE")).toBe(true)
  });
});

