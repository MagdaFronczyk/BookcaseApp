import React, {useMemo, useState} from 'react';
import {Pressable} from 'react-native';
import {fetchCalendarEvents} from '../../modules/CalendarModule';

//components
import RobotoRegular from '../../components/fonts/RobotoRegular';
import RobotoLight from '../../components/fonts/RobotoLight';
import CommonPanelFormInput from '../panel/_common/CommonPanelFormInput';
//permissions
import {usePermission} from '../../utils/hooks/usePermissions';
//styles
import {theme} from '../../style/styles';
import {form as styles} from './_styles';
//types
import {status} from '../../types/enums';
import {
  ICalendarEvent,
  ICalendarEventForm,
  ICalendarEventFormData,
} from '../../types/calendar';
import {ICommonResponseWithoutTotal} from '../../types';
//utils
import useCalendar from '../../utils/hooks/useCalendar';

type Props = {
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponseWithoutTotal<ICalendarEvent[] | null>>
  >;
};

const INITIAL_FORM: ICalendarEventForm = {
  event: '',
};

const Form: React.FC<Props> = ({setResponse}): JSX.Element => {
  const {permissions, handleOpenSettings} = usePermission();
  const [signInForm, setSignInForm] =
    useState<ICalendarEventForm>(INITIAL_FORM);
  const {addEvent, errors} = useCalendar(signInForm);

  const handleAddEvent = async () => {
    try {
      await addEvent();
      // Refresh the events list after adding a new event
      const events = await fetchCalendarEvents();
      setResponse({status: status.RESOLVED, data: events});
    } catch (error) {
      setResponse({status: status.REJECTED, data: null});
    }
  };

  const handleEvent = (event: string): void => {
    setSignInForm({
      event: event,
    });
  };

  const formData: ICalendarEventFormData = useMemo(() => {
    return {
      placeholder: 'Zdarzenie',
      handler: handleEvent,
      inputValue: signInForm.event,
      secure: false,
    };
  }, [signInForm.event]);

  return (
    <>
      <CommonPanelFormInput key={formData.placeholder} form={formData} />
      {errors.length
        ? errors.map(error => {
            return (
              <RobotoLight
                color={theme.color.error}
                size={theme.fontSize.eleven}
                key={error}>
                {error}
              </RobotoLight>
            );
          })
        : null}
      {permissions.calendar ? (
        <Pressable
          style={[
            styles.button,
            {backgroundColor: theme.backgroundColor.black},
          ]}
          onPress={handleAddEvent}>
          <RobotoRegular
            numberOfLines={1}
            size={theme.fontSize.fifteen}
            color={theme.color.white}
            style={styles.buttonText}>
            Dodaj zdarzenie
          </RobotoRegular>
        </Pressable>
      ) : (
        <Pressable
          style={[
            styles.button,
            {backgroundColor: theme.backgroundColor.black},
          ]}
          onPress={handleOpenSettings}>
          <RobotoRegular
            numberOfLines={1}
            size={theme.fontSize.fifteen}
            color={theme.color.white}
            style={[styles.buttonText]}>
            Otwórz ustawienia aby móc dodać zdarzenie
          </RobotoRegular>
        </Pressable>
      )}
    </>
  );
};

export default Form;
