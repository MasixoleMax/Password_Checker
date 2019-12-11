class PasswordChecker{
  
   password_is_valid(password){

    const digit = new RegExp(/\d+/);
    const upperCase = new RegExp(/[A-Z+]/);
    const lowerCase = new RegExp(/[a-z+]/);
    const allConditions = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

      if (password.match(allConditions)){
        return true;
       }

      if (password.length < 8 || password == ""){
        throw new Error ("Password must have 8 or more characters");
      }

      else if (!password.match(upperCase)){
        throw new Error ("Password must have at least one uppercase letter");
      } 

      else if (!password.match(lowerCase)){
        throw( new Error ("Password must have at least one lowercase letter"));
      }

      else if (!password.match(digit)){
        throw new Error ("Password must at least have one digit");
      }

      else {
        return false;
    }};
    
   password_is_ok(passwordOK){
     
    const threeConditions = new RegExp (/[a-zA-Z]{8,}\d+/);
    const cond1 = new RegExp(/[A-Z+]{8}/);
    const cond2 = new RegExp(/[a-z+]{8}/);
    const cond3 = new RegExp(/\d{8}/);


  if (passwordOK == "" || passwordOK < 8){
      throw new Error ("Password is not OK, it should not be empty and have at least 8 characters")
  }

  else if (passwordOK.match(threeConditions)){
      return true;
  }

  else if ((passwordOK.match(cond1)) || (passwordOK.match(cond2)) || (passwordOK.match(cond3))){
      return true
   }

  else {
      throw new Error("Password is not OK, it should match any three of the following conditions: Have at least 8 characters, have at least one digit, at lest one uppercase/lowercase and it should not be empty")
   }
}};

module.exports = PasswordChecker;

// Instantiating new objects //

 let valid = new PasswordChecker();
 let ok = new PasswordChecker();

// calling the functions //

  valid.password_is_valid("Masixole11");
  ok.password_is_ok("masixoleee");
