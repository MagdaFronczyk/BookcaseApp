import React from 'react';
import {Pressable, TextInput} from 'react-native';
import {
  addCalendarEvent,
  fetchCalendarEvents,
} from '../../modules/CalendarModule';

//components
import RobotoRegular from '../../components/fonts/RobotoRegular';
//permissions
import {usePermission} from '../../utils/hooks/usePermissions';
//styles
import {theme} from '../../style/styles';
import {form as styles} from './_styles';
import {status} from '../../types/enums';
import {ICalendarEvent} from '../../types/calendar';
import {ICommonResponseWithoutTotal} from '../../types';
import useInput from '../../utils/hooks/useInput';
import {validateEventName} from '../../utils/validation';
import RobotoLight from '../../components/fonts/RobotoLight';

type Props = {
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponseWithoutTotal<ICalendarEvent[] | null>>
  >;
};

const Form: React.FC<Props> = ({setResponse}): JSX.Element => {
  const {permissions, handleOpenSettings} = usePermission();
  const {
    value: eventTitle,
    isValid: eventIsValid,
    hasErrors: eventHasErrors,
    handleOnTextChanged: setEventTitle,
    handleTouch: handleTouchEventName,
    handlePressButton: handlePressAddEventButton,
    reset: resetEventTitle,
  } = useInput(validateEventName);

  const handleAddEvent = async (title: string) => {
    const startDate = (new Date().getTime() / 1000 + 3600) * 1000;
    const endDate = (new Date().getTime() / 1000 + 3600) * 1000;
    handlePressAddEventButton();
    if (eventIsValid) {
      try {
        await addCalendarEvent(title, startDate, endDate);
        // Refresh the events list after adding a new event
        const events = await fetchCalendarEvents();
        setResponse({status: status.RESOLVED, data: events});
        resetEventTitle();
      } catch (error) {
        setResponse({status: status.REJECTED, data: null});
      }
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setEventTitle}
        value={eventTitle}
        placeholder="Nazwa wydarzenia"
        onTouchStart={handleTouchEventName}
      />
      {eventHasErrors ? (
        <RobotoLight color={theme.color.error} size={theme.fontSize.eleven}>
          Pole nie moe być puste
        </RobotoLight>
      ) : null}
      {permissions.calendar ? (
        <Pressable
          style={[
            styles.button,
            {backgroundColor: theme.backgroundColor.black},
          ]}
          onPress={() => handleAddEvent(eventTitle)}>
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
