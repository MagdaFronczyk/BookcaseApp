import React from 'react';

//components
import RobotoBold from '../../components/fonts/RobotoBold';
import RobotoLight from '../../components/fonts/RobotoLight';
//styles
import {theme} from '../../style/styles';
import {intro as styles} from './_styles';

const Intro = () => {
  return (
    <>
      <RobotoBold
        size={theme.fontSize.twentyTwo}
        color={theme.color.black}
        numberOfLines={1}
        style={styles.title}>
        Wydarzenia z kalendarza
      </RobotoBold>
      <RobotoLight
        size={theme.fontSize.eighteen}
        color={theme.color.black}
        numberOfLines={3}
        style={styles.title}>
        Zacząłeś czytać ksiązkę?
      </RobotoLight>
      <RobotoLight
        size={theme.fontSize.eighteen}
        color={theme.color.black}
        numberOfLines={3}
        style={styles.title}>
        Zaznacz to wydarzenie w kalendarzu!
      </RobotoLight>
    </>
  );
};

export default Intro;
