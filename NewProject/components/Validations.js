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
    if (phoneNumber.trim() === '') {
      return 'Phone number is required.';
    }
  
    // Phone number validation using regular expression
    const phoneNumberPattern = /^\d{1,10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
      return 'Invalid phone number format. Please enter only numbers (up to 10 digits).';
    }
  
    return '';
  };
  