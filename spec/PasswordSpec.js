describe("validates password", function (){
  let password = "Masixole25";
  it ("should have more than 8 charcters", function () {
   expect(password_is_valid(password)).toBe(true)
 });

  it ("should not be null", function () {
  expect(password_is_valid(password)).toBe(true)
  });

  it ("should have atleast one lowecharcter", function () {
    expect(password_is_valid(password)).toBe(true)
  });

  it ("should have atleast one UPPERCHARCTER", function () {
    expect(password_is_valid(password)).toBe(true)
  });

  it ("should have at least one digit", function () {
    expect(password_is_valid(password)).toBe(true)
  });
})
  describe("validates password", function (){
    let passwordOK = "MASIXOLE5";

  it ("should take atleast 3 conditions", function () {
    expect(password_is_ok(passwordOK)).toBe(true)
  });
})

