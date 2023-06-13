export const validateFirstName = (firstName) => {
    if (firstName.trim() === '') {
      return 'First name is required.';
    }
    return '';
  };
  
  export const validateLastName = (lastName) => {
    if (lastName.trim() === '') {
      return 'Last name is required.';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (email.trim() === '') {
      return 'Email is required.';
    }
  
    // Email validation using regular expression
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email format.';
    }
  
    return '';
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber === '') {
      return 'Phone Number is required.';
    } else if (phoneNumber.length !== 10) {
      return 'Phone Number must be exactly 10 digits.';
    }
    return '';
  };
  
  