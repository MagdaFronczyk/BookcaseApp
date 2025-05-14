import React from 'react';
import {TextInput} from 'react-native';

//styles
import {commonAccountFormInput as styles} from './_styles';
//types
import {IListBookFormData, IPanelFormData} from '../../../types/index';
import {theme} from '../../../style/styles';

type Props = {
  form: IPanelFormData | IListBookFormData;
};

const CommonPanelFormInput: React.FC<Props> = ({form}): React.JSX.Element => {
  return (
    <TextInput
      accessibilityLabel={form.placeholder}
      accessibilityHint={`Wpisz ${form.placeholder}`}
      placeholder={form.placeholder}
      placeholderTextColor={theme.color.darkGray}
      textAlign="center"
      autoCorrect={false}
      onChangeText={text => form.handler(text)}
      value={form.inputValue}
      secureTextEntry={form.secure}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.input,
        backgroundColor: 'transparent',
        color: theme.color.black,
        fontSize: theme.fontSize.fifteen,
        borderColor: theme.color.black,
      }}
    />
  );
};

export default CommonPanelFormInput;
