import React from 'react';

//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
//styles
import {commonPanelError as styles} from './_styles';
import {theme} from '../../../style/styles';

type Props = {
  error: string;
};

const CommonPanelError: React.FC<Props> = ({error}): React.JSX.Element => {
  return (
    <RobotoRegular
      style={styles.text}
      color={theme.color.black}
      size={theme.fontSize.fifteen}>
      {error}
    </RobotoRegular>
  );
};

export default CommonPanelError;
