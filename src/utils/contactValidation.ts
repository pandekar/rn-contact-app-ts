const contactValidation = (
  firstname: string,
  lastname: string,
  age: string,
  imageurl: string,
): string => {
  if (firstname.length === 0) {
    return 'please insert first name...';
  } else if (firstname.length < 3) {
    return 'first name must be at least 3 characters long';
  } else if (firstname.length >= 30) {
    return 'first name must be less than or equal to 30 characters long';
  } else if (lastname.length === 0) {
    return 'please insert last name...';
  } else if (lastname.length < 3) {
    return 'last name must be at least 3 characters long';
  } else if (lastname.length >= 30) {
    return 'last name must be less than or equal to 30 characters long';
  } else if (age.length === 0) {
    return 'please insert age...';
  } else if (parseInt(age) === 0) {
    return 'age must be larger than or equal to 1';
  } else if (parseInt(age) > 100) {
    return 'age can not be more than 100';
  } else if (typeof imageurl === 'undefined') {
    return 'please select your image...';
  } else {
    return '';
  }
};

export default contactValidation;
