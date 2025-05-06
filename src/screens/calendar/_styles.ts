import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BOTTOM_TAB_HEIGHT} from '../../utils/constants';

const intro = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
    paddingBottom: BOTTOM_TAB_HEIGHT,
  },
  title: {
    marginBottom: scale(20),
  },
});

const event = StyleSheet.create({
  eventItem: {
    marginBottom: scale(10),
  },
  eventTitle: {
    marginBottom: scale(5),
  },
});

const form = StyleSheet.create({
  button: {
    borderRadius: scale(8),
    padding: scale(12),
    marginVertical: scale(10),
  },
  buttonText: {
    textAlign: 'center',
  },
  input: {
    borderWidth: scale(1),
    padding: scale(10),
    width: '100%',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
});

export {intro, event, form};
