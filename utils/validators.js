export const validateRegisterUser = (username, password, email, phone) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    // regular expression for email validtion
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }

  if (phone.trim() === "") {
    errors.phone = "Phone must not be empty";
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateLoginUser = (email, password) => {
  const errors = {};
  
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    // regular expression for email validtion
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
