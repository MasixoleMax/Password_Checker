class PasswordChecker{

   password_is_valid(password){
      var allConditions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      if (password.match(allConditions)){
        return true;
    };
    return false;
  };

   password_is_ok(passwordOK){
      var threeConditions = /[a-zA-Z]{8,}\d+/;
      if (passwordOK.match(threeConditions)){
         return true;
  }
    else {
      return false;
    };
  };
  
};
