export const translateFirebaseErrors = (error: {
  code: string;
  message: string;
}): string => {
  let firebaseError = '';
  switch (error.code) {
    case 'auth/user-not-found':
      firebaseError = 'Użytkownik o podanym adresie nie istnieje';
      break;
    case 'auth/wrong-password':
      firebaseError = 'Niepoprawne hasło';
      break;
    case 'auth/user-disabled':
      firebaseError = 'Użytkownik został zablokowany przez administratora';
      break;
    case 'auth/invalid-email':
      firebaseError = 'Niepoprawny adres e-mail';
      break;
    case 'auth/account-exists-with-different-credential':
      firebaseError =
        'Konto o podanym adresie zostało utworzone przy pomocy innego dostawcy. Zaloguj się korzystając z usługi tego dostawcy.';
      break;
    case 'auth/cancelled-popup-request':
      firebaseError = 'Próba logowania anulowana';
      break;
    case 'auth/operation-not-allowed':
      firebaseError = 'Konto nieaktywne';
      break;
    case 'auth/operation-not-supported-in-this-environment':
      firebaseError =
        'Nie można wykonać operacji. Upewnij się,że używasz protokołu http lub https';
      break;
    case 'auth/popup-blocked':
      firebaseError = 'Okno zablokowane przez przeglądarkę';
      break;
    case 'auth/popup-closed-by-user':
      firebaseError =
        'Okno zamknięte przez użytkownika przed ukończeniem operacji';
      break;
    case 'auth/unauthorized-domain':
      firebaseError = 'Używasz nieautoryzowanej domeny';
      break;
    case 'auth/network-request-failed':
      firebaseError = 'Błąd sieci';
      break;
    case 'auth/weak-password':
      firebaseError = 'Hasło powinno składać się z conajmniej 6 znaków';
      break;
    case 'auth/email-already-in-use':
      firebaseError = 'Podany adres email jest już w użyciu';
      break;
    case 'auth/invalid-credential':
      firebaseError = 'Podane dane nie istnieją w bazie';
      break;
    default:
      return (firebaseError = error.message);
  }
  return firebaseError;
};
