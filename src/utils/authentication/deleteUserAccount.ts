import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const deleteUserAccount = (
  user: FirebaseAuthTypes.User | null,
): void => {
  if (user) {
    user.delete();
  }
};
