let PasswordChecker = require('../src/PasswordSrc')

let test = new PasswordChecker();

  describe("validates if password is valid", function (){

    it ("should have more than 8 charcters", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true);
 });

    it ("should throw an error if password length is < 8", function () {
    expect(()=>{test.password_is_valid("Masi")}).toThrow(new Error("Password must have 8 or more characters"))
  });

    it ("should not be null", function () {
      expect(()=>{test.password_is_valid("")}).toThrow(new Error("Password must have 8 or more characters"))
    });

    it ("should have atleast one lowecharcter", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });

  it ("should throw an error if password does not have at least one lowercase letter ", function () {
    expect(()=>{test.password_is_valid("MASIXOLE1")}).toThrow(new Error("Password must have at least one lowercase letter"))
  });

    it ("should have atleast one UPPERCHARCTER", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });

  it ("should throw an error if password does not have at least one UPPERCHARACTER", function () {
    expect(()=>{test.password_is_valid("masixole1")}).toThrow(new Error("Password must have at least one uppercase letter"))
  });

    it ("should have at least one digit", function () {
    expect(test.password_is_valid("Masixole25")).toBe(true)
  });

  it ("should throw an error if password does not have at least one digit", function () {
    expect(()=>{test.password_is_valid("Masixole")}).toThrow(new Error("Password must at least have one digit"))
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


  it ("should throw an error if password is empty or have less than 8 characters", function () {
    expect(()=>{test.password_is_ok("")}).toThrow(new Error("Password is not OK, it should not be empty and have at least 8 characters"));
    expect(()=>{test.password_is_ok("Masi")}).toThrow(new Error("Password is not OK, it should match any three of the following conditions: Have at least 8 characters, have at least one digit, at lest one uppercase/lowercase and it should not be empty"));
  });

  it ("should throw an error if it does not match any of the three conditions", function () {
    expect(()=>{test.password_is_ok("mas")}).toThrow(new Error("Password is not OK, it should match any three of the following conditions: Have at least 8 characters, have at least one digit, at lest one uppercase/lowercase and it should not be empty"));
    expect(()=>{test.password_is_ok("MAS")}).toThrow(new Error("Password is not OK, it should match any three of the following conditions: Have at least 8 characters, have at least one digit, at lest one uppercase/lowercase and it should not be empty"));
  });
});
