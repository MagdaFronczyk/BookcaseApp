import React from 'react';

//components
import RobotoRegular from '../../../../components/fonts/RobotoRegular';

//styles
import {commonNoData as styles} from './_styles';
import {theme} from '../../../../style/styles';

type Props = {text: string};

const CommonNoData: React.FC<Props> = ({text}): React.JSX.Element => {
  return (
    <RobotoRegular
      style={styles.text}
      color={theme.color.black}
      size={theme.fontSize.fifteen}>
      {text}
    </RobotoRegular>
  );
};

export default CommonNoData;
