import {useState} from 'react';

const useInput = (validateInput: (text: string) => boolean) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [buttonIsPressed, setButtonIsPressed] = useState(false);

  const isValid = validateInput(value);
  const hasErrors = (!isValid && isTouched) || (!isValid && buttonIsPressed);

  const handleOnTextChanged = (text: string): void => {
    setValue(text);
  };
  const reset = (): void => {
    setValue('');
    setIsTouched(false);
    setButtonIsPressed(false);
  };

  const handleTouch = (): void => {
    setIsTouched(true);
  };

  const handlePressButton = (): void => {
    setButtonIsPressed(true);
  };

  return {
    value,
    isValid,
    hasErrors,
    handleOnTextChanged,
    handleTouch,
    handlePressButton,
    reset,
  };
};

export default useInput;
