// name validation
export const validateEventName = (name: string): boolean => {
  return name.trim().length > 0;
};
//email validation
export const validateEmail = (email: string): boolean => {
  return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email);
};
//password validation
export const validatePassword = (password: string): boolean => {
  return password.trim().length > 0 && password.trim().length > 6;
};
