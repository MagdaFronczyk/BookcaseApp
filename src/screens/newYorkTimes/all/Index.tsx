import * as React from 'react';
import {Text, View, Button} from 'react-native';
//types
import {BoottomTabScreenProps} from '../../../types/navigation';

type Props = {
  navigation: BoottomTabScreenProps<'New York Times'>['navigation'];
};

const Index: React.FC<Props> = ({navigation}): JSX.Element => {
  return (
    <View>
      <Text style={{color: 'black'}}>All books</Text>
      <Button
        title="go to single book"
        onPress={() => navigation.navigate('SingleNYTimes')}>
        Go to single book
      </Button>
    </View>
  );
};

export default Index;
