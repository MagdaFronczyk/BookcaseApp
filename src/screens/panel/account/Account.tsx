import React, {useCallback, useMemo} from 'react'
import {View} from 'react-native'

//components
import AccountHeader from './AccountHeader'
import CommonPanelButton from '../_common/CommonPanelButton'
//helpers
import {useFirebaseUser} from '../../../utils/hooks/useFirebaseUser'
import {deleteUserAccount} from '../../../utils/authentication/deleteUserAccount'
import {signOut} from '../../../utils/authentication/signOut'
//styles
import {account as styles} from './_styles'
import {theme} from '../../../style/styles'
//types
import {IPanelButtonData} from '../../../types/index'

const User: React.FC = (): React.JSX.Element => {
  const {user} = useFirebaseUser()

  const handleDeleteUserAccount = useCallback((): void => {
    if (user) {
      deleteUserAccount(user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUserAccount, user])

  const screenButtonsData: IPanelButtonData[] = useMemo(() => {
    return [
      {
        title: 'Wyloguj',
        handler: signOut,
        accLabel: 'Kliknij, aby wylogować się.',
        accHint: 'Po kliknięciu wyloguje użytkownika z konta.',
        borderColor: theme.color.black,
        backgroundColor: 'transparent',
        titleColor: theme.color.black,
        icon: null,
      },
      {
        title: 'Usuń konto',
        handler: handleDeleteUserAccount,
        accLabel: 'Kliknij, aby usuńąć konto.',
        accHint: 'Po kliknięciu rozpoczyna proces usunięcia konta użytkownika.',
        borderColor: theme.color.black,
        backgroundColor: 'transparent',
        titleColor: theme.color.black,
        icon: null,
      },
    ]
  }, [handleDeleteUserAccount])

  return (
    <View style={styles.container}>
      <AccountHeader />
      {screenButtonsData.map(button => {
        return (
          <CommonPanelButton
            key={button.title}
            buttonData={button}
            align="column"
          />
        )
      })}
    </View>
  )
}

export default User
