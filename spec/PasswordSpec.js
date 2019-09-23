let test = new PasswordChecker();

  describe("validates is valid", function (){
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

  describe("password should take atleast 3 conditions", function (){
    it ("should not be null, have 8 characters, and a number", function () {
    expect(test.password_is_ok("masixole2")).toBe(true)
  });

    it ("should not be null, have 8 characters, and at least one uppercase letter", function () {
    expect(test.password_is_ok("Masixole2")).toBe(true)
  });

    it ("should not be null, have 8 characters, and at least one lowercase letter", function () {
    expect(test.password_is_ok("MASIXOLe2")).toBe(true)
  });
  
});

