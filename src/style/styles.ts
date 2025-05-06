import {moderateScale} from 'react-native-size-matters';

export const theme = {
  general: {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)', // #000
    darkGray: 'rgba(137, 137, 137, 1)', //#898989
    lightGray: 'rgb(192,192,192)', //#C0C0C0
  },
  color: {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)', // #000
    darkGray: 'rgba(137, 137, 137, 1)', //#898989
    lightGray: 'rgb(192,192,192)', //#C0C0C0
    error: 'rgb(255, 44, 44)',
  },
  backgroundColor: {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)', // #000
    darkGray: 'rgba(137, 137, 137, 1)', //#898989
    lightGray: 'rgb(192,192,192)', //#C0C0C0
  },
  fontSize: {
    seven: moderateScale(7),
    eight: moderateScale(8),
    nine: moderateScale(9),
    ten: moderateScale(10),
    eleven: moderateScale(11),
    twelve: moderateScale(12),
    thirteen: moderateScale(13),
    fourteen: moderateScale(14),
    fifteen: moderateScale(15),
    sixteen: moderateScale(16),
    eighteen: moderateScale(18),
    nineteen: moderateScale(19),
    twenty: moderateScale(20),
    twentyOne: moderateScale(21),
    twentyTwo: moderateScale(22),
    thirty: moderateScale(30),
    fortyFive: moderateScale(45),
  },
};
